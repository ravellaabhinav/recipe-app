'use client';
import React, { useState } from 'react';
import RecipeList from '../src/components/RecipeList';
import AddRecipeForm from '../src/components/AddRecipeForm';

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
}

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([
    { id: 1, name: 'Spaghetti Bolognese', ingredients: ['Spaghetti', 'Tomato Sauce', 'Ground Beef'] },
    { id: 2, name: 'Chicken Curry', ingredients: ['Chicken', 'Curry Powder', 'Coconut Milk'] },
  ]);

  const addRecipe = (recipe: Omit<Recipe, 'id'>) => {
    setRecipes([...recipes, { id: recipes.length + 1, ...recipe }]);
  };

  const deleteRecipe = (id: number) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="container mx-auto mt-12 p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Recipe App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
        <AddRecipeForm addRecipe={addRecipe} />
      </div>
    </div>
  );
}
