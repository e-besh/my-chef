import { useState, useEffect } from "react";

function Recipe({ ingredients }) {
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  useEffect(() => {
    async function generateRecipe() {
      setLoading(true);

      // 1. Prepare the list of ingredients as a string
      const ingredientString = ingredients.join(", ");

      // 2. Define the URL
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${API_KEY}`;

      // 3. Create the Prompt
      // System Instruction: forces it to be a chef.
      // User Content: the actual ingredients.
      const promptData = {
        system_instruction: {
          parts: {
            text: "You are a professional chef. You only answer questions related to cooking, recipes, and ingredients. If the user asks anything unrelated to cooking, politely refuse to answer and state you are a chef.",
          },
        },
        contents: [
          {
            parts: [
              {
                text: `I have these ingredients: ${ingredientString}. Please give me a recipe I can cook with them. Format the response as a simple list with a Title, Ingredients section, and Instructions.`,
              },
            ],
          },
        ],
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(promptData),
        });

        const data = await response.json();

        // 4. Extract the text from the API response
        if (data.candidates && data.candidates[0].content) {
          const generatedText = data.candidates[0].content.parts[0].text;
          setRecipe(generatedText);
        } else {
          setRecipe("Sorry, I could not generate a recipe. Please try again.");
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setRecipe("Error connecting to Chef Gemini.");
      } finally {
        setLoading(false);
      }
    }

    generateRecipe();
  }, [ingredients]); // Runs when component mounts or ingredients change

  return (
    <section>
      <h2>Chef recommends:</h2>

      {loading ? (
        <p>Chef is thinking... 👨‍🍳</p>
      ) : (
        // Use whitespace-pre-wrap so the AI's formatting (line breaks) is visible
        <p
          className="chef-recommendation-list"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {recipe}
        </p>
      )}
    </section>
  );
}

export default Recipe;
