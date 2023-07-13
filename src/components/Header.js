// Header.js

import React from 'react';
import './Header.css';
import logo from './logo.png';
const Header = () => {
  return (
    <header className="header">
      <div className="reddit-logo" img src={logo} alt="Logo"></div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button type="button">Search</button>
      </div>
      <div className="user-auth"></div>
    </header>
  );
};

export default Header;
