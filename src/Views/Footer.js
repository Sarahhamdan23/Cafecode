import React from 'react';
import './Footer.css'; // Add this file for the styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Sarah Hamdan | All Rights Reserved</p>
        <div className="social-icons">
          <a href="https://github.com/Sarahhamdan23" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sarah-hamdan-86651417b/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:sarahwbas@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
