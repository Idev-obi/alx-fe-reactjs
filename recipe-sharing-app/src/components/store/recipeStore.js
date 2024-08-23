/*import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
}));*/


import create from 'zustand';

// Define the Zustand store
const useRecipeStore = create(set => ({
  recipes: [],

  // Action to add a new recipe
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]
  })),

   // Action to delete a recipe by ID
   deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),

  // Action to update a recipe
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

  // Action to initialize the list of recipes
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;
