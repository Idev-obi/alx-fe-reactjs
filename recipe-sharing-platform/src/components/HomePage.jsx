// src/components/HomePage.js

import React, { useState, useEffect } from 'react';
import './HomePage.css'; // For any additional custom styles if needed

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the recipe data
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-700">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
