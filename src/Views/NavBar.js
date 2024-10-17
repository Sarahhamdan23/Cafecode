import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css'; // Add styles for the navbar

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  // Add event listener to detect clicks outside the dropdown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
          Sarah Hamdan | Portfolio
        </h1>
      </div>
      <ul className="navbar-links">
        <li>
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
        {/* Manual dropdown for external links */}
        <li ref={dropdownRef} className="nav-dropdown">
          <span className="dropdown-toggle" onClick={handleDropdownToggle}>
            More
          </span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="https://github.com/Sarahhamdan23" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sarah-hamdan-86651417b/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@soothingmeditation1223" target="_blank" rel="noopener noreferrer">
                  My YouTube Page
                </a>
              </li>
              <li>
                <a href="mailto:sarahwbas@gmail.com">Email Me</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
