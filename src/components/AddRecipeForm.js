import React, { useState } from "react";

function AddRecipeForm({ addRecipe }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && ingredients) {
      addRecipe({ name, ingredients: ingredients.split(",") });
      setName("");
      setIngredients("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">
        Add New Recipe
      </h2>
      {/* <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Recipe Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-400 rounded-md text-gray-800"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Ingredients (comma separated):</label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border border-gray-400 rounded-md text-gray-800 "
          required
        />
      </div> */}
      <div className="mb-6">
        <label className="block font-medium mb-2" style={{ color: "black" }}>
          Recipe Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-400 rounded-md"
          style={{ color: "black" }}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block font-medium mb-2" style={{ color: "black" }}>
          Ingredients (comma separated):
        </label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-3 border border-gray-400 rounded-md"
          style={{ color: "black" }}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
