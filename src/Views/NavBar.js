import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { NavDropdown } from 'react-bootstrap'; // Import NavDropdown from react-bootstrap
import './NavBar.css'; // Add styles for the navbar

const NavBar = () => {

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* Scroll to the top of the page on click */}
        <h1 onClick={scrollToTop} style={{ cursor: 'pointer' }}>Sarah Hamdan | Portfolio</h1>
      </div>
      <ul className="navbar-links">
        <li>
          {/* Adjust the offset for each section */}
          <Link to="overview" smooth={true} duration={500} offset={-100}>
            Overview
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-100}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-100}>
            Projects & Certificates
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500} offset={-100}>
            Experience & Education
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-100}>
            Contact Me
          </Link>
        </li>
        {/* Add dropdown for external links */}
        <li>
          <NavDropdown title="More">
            <NavDropdown.Item href="https://github.com/Sarahhamdan23" target="_blank">
              GitHub
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.linkedin.com/in/sarah-hamdan-86651417b/" target="_blank">
              LinkedIn
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.youtube.com/@soothingmeditation1223" target="_blank">
              My YouTube Page
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="mailto:sarahwbas@gmail.com">
              Email Me
            </NavDropdown.Item>
          </NavDropdown>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
