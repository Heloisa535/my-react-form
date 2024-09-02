import React from 'react';
import './Header.css'; 
import logo from '../img/logovans.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Vans Logo" className="header-logo" />
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#shop">Shop</a></li>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
