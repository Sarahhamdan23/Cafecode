import React from 'react';
import './Header.css';
import MyPic from '../assets/images/MyPic.png'; // Update the path to your personal photo

const Header = () => {
  console.log("Header rendered");

  // Function to open email client
  const handleContactClick = () => {
    window.location.href = 'mailto:sarahwbas@gmail.com';
  };

  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <h1 className="greeting-text">
            Hi, <br /> I'm <span className="name-highlight">Sarah,</span> <br /> Full Stack Developer
          </h1>

          {/* Button to trigger email client */}
          <button className="contact-btn" onClick={handleContactClick}>
            Contact
          </button>
        </div>
        <div className="image-container">
          <img src={MyPic} alt="Sarah Hamdan" className="profile-photo" />
        </div>
      </header>

      {/* Overview Section */}
      <section className="overview-section" id="overview">
        <h2 className="overview-title">Overview.</h2>
        <p className="overview-text">
          With a professional certification in Full Stack Development from MIT, specializing in the MERN stack
          (MongoDB, Express.js, React, Node.js), and certified in cybersecurity from Google Coursera, I bring a
          diverse skill set in both development and security. My expertise spans building dynamic, responsive web
          applications, managing databases, and ensuring the highest levels of security in the projects I work on.
          <br />
          <br />
          Having worked with a range of technologies and tools, I am passionate about creating secure, scalable
          solutions while constantly learning and improving my skills. If you’re looking for someone who can bridge
          the gap between development and cybersecurity, feel free to reach out!
        </p>
      </section>
    </>
  );
};

export default Header;
