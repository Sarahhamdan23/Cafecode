import React from 'react';
import './HomePage.css';
import Header from './Header.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import ExpEdu from './ExpEdu.js';
import ContactMe from './ContactMe';
import NavBar from './NavBar';
import Footer from './Footer.js';

const HomePage = () => {
  return (
    <div className="cafe-homepage">
      <NavBar/>
      <Header id="header" />
      <Skills id="skills" />
      <Projects id="projects" />
      <ExpEdu id="experience" />
      <ContactMe id="contact" />
      <Footer id="footer" />
      
    </div>
  );
};

export default HomePage;
