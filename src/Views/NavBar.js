import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css'; // Add styles for the navbar

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Sarah Hamdan | Portfolio</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="overview" smooth={true} duration={500} offset={-50}>
            Overview
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-80}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-80}>
            Projects & Certificates
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500} offset={-80}>
            Experience & Education
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-50}>
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
