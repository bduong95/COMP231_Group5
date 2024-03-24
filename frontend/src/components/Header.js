import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = () => {
  return (
    <header>
      <nav className="nav-left">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <nav className="nav-right">
        <ul>
          <li><Link to="/signin">Log In</Link></li>
          <li>/</li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
  </header>
  );
};

export default Header;