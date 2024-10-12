import React from 'react';

function Recipe({ name, ingredients, deleteRecipe }) {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <ul className="list-disc ml-6 text-gray-700 mt-2">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <button
          onClick={deleteRecipe}
          className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Recipe;
