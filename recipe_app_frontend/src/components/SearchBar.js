import React from 'react';

// PUBLIC_INTERFACE
const SearchBar = ({ onSearch, searchQuery, resultCount }) => {
  // PUBLIC_INTERFACE
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-section">
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search recipes by name, cuisine, or ingredients..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
      <div className="search-results">
        {searchQuery && (
          <p>
            Found {resultCount} {resultCount === 1 ? 'recipe' : 'recipes'} 
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
