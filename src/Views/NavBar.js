import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-menu-container">
        <div className="logo">Sarah's Portfolio</div>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#" className="nav-item" onClick={scrollToTop}>Home</a>
          <a href="#skills" className="nav-item" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="nav-item" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#experience" className="nav-item" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#contact" className="nav-item" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
