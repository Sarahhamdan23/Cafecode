import React from 'react';
import './Skills.css';

const skills = [
  "Full Stack Development (MERN)",
  "MongoDB, Express.js, React, Node.js",
  "Cybersecurity (Google Coursera Certifications)",
  "Cloud Computing & DevOps",
  "Web Technologies",
  "Database Management",
  "API Design & Development",
  "Software Testing & Debugging",
  "Cryptocurrency Investments",
  "Project Management Tools",
  "Microsoft & Google Platforms"
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
