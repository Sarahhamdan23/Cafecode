import React from 'react';
import './Projects.css'; // Ensure you style your component
//import ProjectImage1 from '../assets/images/project1.png'; // Your project images
import MyProject from '../assets/images/MyProject.png';
import CybersecurityCertif from '../assets/images/CybersecurityCertif.png';
import MITCertif from '../assets/images/MITCertif.png'; // Adjust the path if necessary


const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects & Certificates</h2>
      <div className="projects-container">
        
        {/* Project Card 1 */}
        <div className="project-card">
          <div className="project-image-container">
            <img src={MyProject} alt="Project 1" className="project-image" />
          </div>
          <h3 className="project-title">Finanical Dashboard Application</h3>
          <p className="project-description">
            I completed a 32-week MIT Full Stack Web Development Bootcamp with a score of 98 out of 100.
            I developed a full-stack finance dashboard using Next.js. Users can log in, log out, and perform CRUD operations.
          </p>
          <div className="project-tags">
            <span>#Next.js</span><span>#Node.js</span><span>#RESTAPI</span>
          </div>
          <button className="github-btn" onClick={() => window.open('https:/github.com/Sarahhamdan23/nextjs-dashboard.', '_blank')}>
            GitHub
            </button>

        </div>

        {/* Project Card 2 */}
        <div className="project-card">
          <div className="project-image-container">
          <img src={CybersecurityCertif} alt="Cybersecurity Certificate" className="CybersecurityCertif" />
          </div>
          <h3 className="project-title">Tools of the Trade: Linux and SQL
</h3>
          <p className="project-description">
            This project analyzes real-time cybersecurity risks. I implemented security algorithms, ensuring data protection.
            Check out the GitHub repository for more details.
          </p>



          <div className="project-tags">
            <span>#Splunk</span><span>#Security</span><span>#AI</span><span>#NIST</span><span>#SOC2</span>
          </div>

          <button className="certificate-btn" onClick={() => window.open('https://www.coursera.org/account/accomplishments/verify/YL4GNHNCAJXG', '_blank')}>
            Certificate
            </button>
        </div>
        
        
        {/* Add more project cards as needed */}



        {/* Project Card 2 */}
<div className="project-card">
  <div className="project-image-container">
    <img src={CybersecurityCertif} alt="Cybersecurity Certificate" className="CybersecurityCertif" />
  </div>
  <h3 className="project-title">Connect and Protect: Networks and Network Security</h3>
  <p className="project-description">
    In this certification, I developed expertise in network security, including identifying and mitigating vulnerabilities, implementing security protocols, and protecting data across networks. 
    You can view the certificate for more details.
  </p>

  <div className="project-tags">
    <span>#Networks</span><span>#Security</span><span>#Cybersecurity</span><span>#Encryption</span>
  </div>

  <button className="certificate-btn" onClick={() => window.open('https://www.coursera.org/account/accomplishments/verify/5988VMQUQA86', '_blank')}>
    Certificate
  </button>
</div>


{/* Project Card 3 */}
<div className="project-card">
  <div className="project-image-container">
    <img src={CybersecurityCertif} alt="Cybersecurity Certificate" className="CybersecurityCertif" />
  </div>
  <h3 className="project-title">Play It Safe: Manage Security Risks</h3>
  <p className="project-description">
    Through this certification, I gained in-depth knowledge of managing security risks and implementing proactive strategies to safeguard against potential threats.
    You can view the certificate for more details.
  </p>

  <div className="project-tags">
    <span>#RiskManagement</span><span>#Cybersecurity</span><span>#ProactiveSecurity</span><span>#ThreatMitigation</span>
  </div>

  <button className="certificate-btn" onClick={() => window.open('https://www.coursera.org/account/accomplishments/verify/MLFAA66A64MS', '_blank')}>
  Certificate
  </button>
</div>



{/* Project Card 4 */}
<div className="project-card">
  <div className="project-image-container">
    <img src={CybersecurityCertif} alt="Cybersecurity Certificate" className="CybersecurityCertif" />
  </div>
  <h3 className="project-title">Foundations of Cybersecurity</h3>
  <p className="project-description">
    This certificate represents a strong foundation in cybersecurity principles. I covered essential topics such as threat identification, risk management, and data protection strategies.
    Check out the certificate for more details.
  </p>

  <div className="project-tags">
    <span>#Cybersecurity</span><span>#ThreatManagement</span><span>#RiskManagement</span><span>#DataProtection</span>
  </div>

  <button className="certificate-btn" onClick={() => window.open('https://coursera.org/share/d4414c9b35a4e0c6d3f8c76aff69af56', '_blank')}>
   Certificate
  </button>
</div>

<div className="project-card">
  <div className="project-image-container">
    <img src={MITCertif} alt="MIT Full Stack Development Certificate" className="CybersecurityCertif" />
  </div>
  <h3 className="project-title">MIT Full Stack Development Certification</h3>
  <p className="project-description">
    This certificate represents my completion of MIT's Full Stack Development course. I gained expertise in the MERN stack, including React, Node.js, MongoDB, and Express. The capstone project focused on building a full-stack finance dashboard.
    Check out the certificate for more details.
  </p>

  <div className="project-tags">
    <span>#FullStack</span><span>#MERN</span><span>#MIT</span><span>#WebDevelopment</span>
  </div>

  <button className="certificate-btn" onClick={() => window.open('https://certificates.emeritus.org/0ccc9bd0-8893-4215-9d65-c9a1092b992a#gs.gn63ns', '_blank')}>
    Certificate
  </button>
</div>






        
      </div>
    </section>
  );
};

export default Projects;
