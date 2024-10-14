// src/Views/HomePage.js
import React, { useState } from 'react';
import './HomePage.css';


import Header from './Header.js';
import Skills from './Skills.js';
import Projects from './Projects.js';






const HomePage = () => {
    const [isBlue, setIsBlue] = useState(false);

    const toggleColor = () => {
        setIsBlue(!isBlue);
    };

    return (
        <div className="cafe-homepage">
            <Header />
            <Skills />
            <Projects />


        </div>
    );
};

export default HomePage;

