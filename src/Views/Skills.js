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
  "Microsoft & Google Platforms",
  "Generative AI  MidJourney, DALL·E, Stable Diffusion, Runway ML",
  "AI Image & Video AI-generated art, motion graphics, video synthesis",
  "AI Audio & Voice Speech synthesis, AI-generated music",
  "Prompt Engineering Optimizing AI inputs for better results",  
  "AI Tools & Frameworks",
  "ChatGPT, Claude, Gemini, Perplexity, Notion AI, Google AI",
  "Creative Automation AI-driven content creation & workflow optimization",
  "AI Content Strategy Branding, marketing, and ethical AI use"
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">  {/* Add the id here */}
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
