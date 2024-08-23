import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(recipeId))
  );

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <Link to={`/edit/${recipe.id}`}>
        <button>Edit Recipe</button>
      </Link>
      <DeleteRecipeButton recipeId={recipe.id} />
      <EditRecipeForm recipe={recipe} />
    </div>
  );
};

export default RecipeDetails;
