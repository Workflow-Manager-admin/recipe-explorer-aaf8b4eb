import React from 'react';
import RecipeCard from './RecipeCard';

// PUBLIC_INTERFACE
const RecipeGrid = ({ recipes, onRecipeClick, loading }) => {
  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-icon">🔍</div>
        <h3>No recipes found</h3>
        <p>Try adjusting your search terms or browse all recipes.</p>
      </div>
    );
  }

  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={() => onRecipeClick(recipe)}
        />
      ))}
    </div>
  );
};

export default RecipeGrid;
