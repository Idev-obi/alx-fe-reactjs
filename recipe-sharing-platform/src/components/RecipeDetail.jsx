// src/components/RecipeDetail.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RecipeDetail.css'; // For any additional custom styles if needed

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the recipe data
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const foundRecipe = data.find(item => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <button 
        onClick={() => navigate('/')} 
        className="mb-4 text-blue-500 underline"
      >
        Back to Home
      </button>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-4">{recipe.summary}</p>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside mb-4">
              {/* Add your ingredients here */}
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              {/* Add more ingredients as needed */}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside">
              {/* Add your cooking steps here */}
              <li>Step 1</li>
              <li>Step 2</li>
              {/* Add more steps as needed */}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
