import React, { useEffect } from 'react';

// PUBLIC_INTERFACE
const RecipeModal = ({ recipe, onClose }) => {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // PUBLIC_INTERFACE
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="modal-image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <h2 className="modal-title">{recipe.title}</h2>
          <p className="modal-description">{recipe.description}</p>
          
          <div className="recipe-info-grid">
            <div className="recipe-info-item">
              <div className="recipe-info-label">Cook Time</div>
              <div className="recipe-info-value">{recipe.cookTime}</div>
            </div>
            <div className="recipe-info-item">
              <div className="recipe-info-label">Servings</div>
              <div className="recipe-info-value">{recipe.servings}</div>
            </div>
            <div className="recipe-info-item">
              <div className="recipe-info-label">Difficulty</div>
              <div className="recipe-info-value">{recipe.difficulty}</div>
            </div>
            <div className="recipe-info-item">
              <div className="recipe-info-label">Cuisine</div>
              <div className="recipe-info-value">{recipe.cuisine}</div>
            </div>
            <div className="recipe-info-item">
              <div className="recipe-info-label">Rating</div>
              <div className="recipe-info-value">⭐ {recipe.rating}</div>
            </div>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">
              <span>🛒</span>
              Ingredients
            </h3>
            <div className="ingredients-grid">
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="ingredient-item">
                  {ingredient}
                </div>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">
              <span>👨‍🍳</span>
              Instructions
            </h3>
            <div className="instructions-list">
              {recipe.instructions.map((instruction, index) => (
                <div key={index} className="instruction-item">
                  {instruction}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
