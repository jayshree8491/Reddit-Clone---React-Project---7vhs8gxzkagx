import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './NavSidebar.css';
import logo from './logo.png';
import "../stylesheets/logo.css";

export default props => {
  return (
    <Menu>

<span id="reddit-logo">
          <img src={logo} alt="Logo" />
        </span>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/popular">
        Popular
      </a>
      <a className="menu-item" href="/gaming">
        Gaming
      </a>
      <a className="menu-item" href="/sports">
        Sports
      </a>
      <a className="menu-item" href="/news">
        News
      </a>
      <a className="menu-item" href="/celebrity">
        Celebrity
      </a>
    </Menu>
  );
};