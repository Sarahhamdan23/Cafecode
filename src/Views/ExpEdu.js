
import React from 'react';
import './ExpEdu.css';

const ExperienceAndEducation = () => {
  return (
    <section className="experience-education-section"id="experience">
      <div className="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Carmel Dental Gallery</strong><br />
            Office Manager & IT Director (2005-2007)
            <p>Responsible for managing IT infrastructure for the dental office, overseeing all technology-related functions.</p>
          </li>
          <li>
            <strong>Kesler Family Dentistry</strong><br />
            Patient Coordinator & Office Manager (2007-2010)
            <p>Ensured smooth office operations, including maintaining the network and ensuring IT systems were running efficiently.</p>
          </li>
          <li>
            <strong>UAE Inc</strong><br />
            IT Director (2010-2023)
            <p>Led the IT department, responsible for overseeing infrastructure, network security, and ensuring operational continuity.</p>
          </li>
          <li>
            <strong>Emeritus Institute</strong><br />
            Beta Tester Contractor (2023-2024)
            <p>Tested a coding program, gained full-stack web development skills, specializing in front-end, back-end, and API development.</p>
          </li>
        </ul>
      </div>

      <div className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>IvyTech College Carmel, IN</strong><br />
            2006-2009
          </li>
          <li>
            <strong>TCC</strong><br />
            Associate Degree of Art (2016-2019)
          </li>
          <li>
            <strong>MIT</strong><br />
            Full Stack Developer using MERN (2022,2024)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
