function IngredientList(props) {
  const ingredientList = props.ingredient.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <section>
      <div className="ingredient-list-padding">
        <h2>Ingredient on hand:</h2>
        <ul>{ingredientList}</ul>
        {props.ingredient.length > 3 && (
          <div className="get-recipe-container">
            <div>
              <h3>Ready for recipe</h3>
              <p>Generate a recipe from your list of ingredient</p>
              <button onClick={props.toggleRecipeShown}>Get a recipe</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default IngredientList;
