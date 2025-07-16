import React from 'react';

// PUBLIC_INTERFACE
const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="recipe-image"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>
        <p className="recipe-description">{recipe.description}</p>
        <div className="recipe-meta">
          <span className="recipe-cuisine">{recipe.cuisine}</span>
          <span className="recipe-difficulty">{recipe.difficulty}</span>
        </div>
        <div className="recipe-stats">
          <div className="recipe-stat">
            <span>⏱️</span>
            <span>{recipe.cookTime}</span>
          </div>
          <div className="recipe-stat">
            <span>👥</span>
            <span>{recipe.servings} servings</span>
          </div>
          <div className="recipe-stat">
            <span>⭐</span>
            <span>{recipe.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
