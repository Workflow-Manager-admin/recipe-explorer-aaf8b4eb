import React from 'react';

// PUBLIC_INTERFACE
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo">
            <div className="logo-icon">🍳</div>
            <span className="logo-text">Recipe Explorer</span>
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="#" className="nav-link">Home</a></li>
              <li><a href="#" className="nav-link">Categories</a></li>
              <li><a href="#" className="nav-link">Favorites</a></li>
              <li><a href="#" className="nav-link">About</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
