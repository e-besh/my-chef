import { useState } from "react";
import IngredientList from "./IngredientList"; // Assuming IngredientList is separate
import Recipe from "./Recipe";

const Main = () => {
  const [ingredient, setIngredient] = useState([]);
  const [recipeShow, setRecipeShow] = useState(false);

  function toggleRecipeShown() {
    setRecipeShow((prevShown) => !prevShown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    // Only add if the input isn't empty
    if (newIngredient.trim() !== "") {
      setIngredient((prevIngredient) => [...prevIngredient, newIngredient]);
    }
  }

  return (
    <main>
      <div className="container">
        <form action={addIngredient} className="add-ingredient-form">
          <input
            type="text"
            placeholder="Add ingredient"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button>Add ingredient</button>
        </form>

        {ingredient.length > 0 && (
          <IngredientList
            ingredient={ingredient}
            toggleRecipeShown={toggleRecipeShown}
          />
        )}

        {/* Pass the ingredients list to the Recipe component */}
        {recipeShow && <Recipe ingredients={ingredient} />}
      </div>
    </main>
  );
};
export default Main;
