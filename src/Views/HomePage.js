import React from 'react';
import './HomePage.css';
import Header from './Header.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import ExpEdu from './ExpEdu.js';
import ContactMe from './ContactMe';
import NavBar from './NavBar';

const HomePage = () => {
  return (
    <div className="cafe-homepage">
      <NavBar />
      <Header id="overview" />
      <Skills id="skills" />
      <Projects id="projects" />
      <ExpEdu id="experience" />
      <ContactMe id="contact" />
      
    </div>
  );
};

export default HomePage;
