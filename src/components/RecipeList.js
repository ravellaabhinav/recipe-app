import React from 'react';
import Recipe from './Recipe';

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* <h2 className="text-2xl font-semibold mb-4 text-black">Recipe List</h2> */}
      <h2 className="text-2xl font-semibold mb-4 text-black" style={{ color: 'black' }}>Recipe List</h2>
      <ul className="space-y-4">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="bg-gray-50 p-4 rounded-lg shadow-sm border">
            <Recipe
              name={recipe.name}
              ingredients={recipe.ingredients}
              deleteRecipe={() => deleteRecipe(recipe.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
