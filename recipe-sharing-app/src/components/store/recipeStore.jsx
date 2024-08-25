import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // This should be populated with your recipe data
  favorites: [],
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Example recommendation logic
    const favoriteRecipes = state.recipes.filter(recipe => 
      state.favorites.includes(recipe.id)
    );

    // Example logic: recommend other recipes that are not already favorited
    const recommended = state.recipes.filter(recipe =>
      !state.favorites.includes(recipe.id) && Math.random() > 0.5
    );

    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
