/*// RecipeList component
  import { useRecipeStore } from './recipeStore';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };*/


 /* import React from 'react';
  import useRecipeStore from './recipeStore'; // Adjust the path as needed

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      
       /* recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))*/
      /*)}
    </div>
  );
};

export default RecipeList;*/



import React, { useEffect } from 'react';
import useStore from './store';

const RecipeList = () => {
  const { filteredRecipes, searchTerm, setSearchTerm } = useStore((state) => ({
    filteredRecipes: state.filteredRecipes,
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
  }));

  // Update filtered recipes whenever the search term changes
  useEffect(() => {
    setSearchTerm(searchTerm);
  }, [searchTerm, setSearchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search recipes..."
      />
      <ul>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <li key={recipe.id}>{recipe.name}</li>
          ))
        ) : (
          <li>No recipes found</li>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;

