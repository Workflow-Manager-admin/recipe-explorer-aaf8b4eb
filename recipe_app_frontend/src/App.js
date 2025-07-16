import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeGrid from './components/RecipeGrid';
import RecipeModal from './components/RecipeModal';
import { mockRecipes } from './data/mockData';

// PUBLIC_INTERFACE
function App() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  // Load recipes on component mount
  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setRecipes(mockRecipes);
      setFilteredRecipes(mockRecipes);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter recipes based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredRecipes(filtered);
    }
  }, [searchQuery, recipes]);

  // PUBLIC_INTERFACE
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  // PUBLIC_INTERFACE
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  // PUBLIC_INTERFACE
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="container">
          <SearchBar 
            onSearch={handleSearch}
            searchQuery={searchQuery}
            resultCount={filteredRecipes.length}
          />
          <RecipeGrid 
            recipes={filteredRecipes}
            onRecipeClick={handleRecipeClick}
            loading={loading}
          />
        </div>
      </main>
      
      {isModalOpen && selectedRecipe && (
        <RecipeModal 
          recipe={selectedRecipe}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
