import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Navbar.css';
import logoImage from '../icons/logo.jpg'; // Import your logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-items">
        <Menu >
        </Menu>
      </div>
      <div className="nav-logo">
        <Link to="/" className="nav-link">
          <div className="logo-container">
            <img src={logoImage} alt="Logo" className="nav-logo-image" />
          </div>
        </Link>
      </div>
      <div className="nav-logo">
        <Link to="/" className="nav-link">
          <span className="nav-button">Bron Et</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
