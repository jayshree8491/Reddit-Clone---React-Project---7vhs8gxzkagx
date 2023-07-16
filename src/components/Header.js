import React, { useState } from "react";
import "./Header.css";
import logo from "./logo.png";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform the search operation using the search term
    console.log("Searching for:", searchTerm);
    // Reset the search term
    setSearchTerm("");
  };

  return (
    <header className="header">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" onClick={handleSearchSubmit}>
          Search
        </button>
      </div>
      <div className="user-auth"></div>
    </header>
  );
};

export default Header;
