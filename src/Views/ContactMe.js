import React from 'react';
import './ContactMe.css'; // Ensure the file is correctly styled
import LinkedInIcon from '../assets/images/LinkedinIcon.png'; // LinkedIn icon
import Emailme from '../assets/images/Emailme.png'; // Email icon
import MyProfilePic2 from '../assets/images/MyProfilePic2.png'; // Profile image
import GitHubIcon from '../assets/images/GitHubIcon.png'; // GitHub icon
// import Instagram from '../assets/images/Instagram.png';  // Comment this out for now

const ContactMe = () => {
    return (
        <section className="contact-section" id="contact">  {/* Add the id here */}
            <div className="contact-left">
                <h2 className="contact-title">Work with me</h2>
                <div className="contact-icons">
                    <a href="https://www.linkedin.com/in/sarah-hamdan-86651417b/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInIcon} alt="LinkedIn" className="contact-icon" />
                    </a>
                    <a href="mailto:sarahwbas@gmail.com">
                        <img src={Emailme} alt="Email" className="contact-icon" />
                    </a>
                    <a href="https://github.com/Sarahhamdan23" target="_blank" rel="noopener noreferrer">
                        <img src={GitHubIcon} alt="GitHub" className="contact-icon" />
                    </a>
                    {/* Comment out Instagram section until you have the image
                    <a 
                        href="https://www.instagram.com/tabonbakery/?igsh=aHA0eGZ2d3FsaXMx&utm_source=qr#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img 
                            src={Instagram} 
                            alt="Instagram" 
                            className="contact-icon"
                        />
                    </a>
                    */}
                </div>
                <div className="contact-info">
                    <p className="label">Email:</p>
                    <p className="value"><a href="mailto:sarahwbas@gmail.com">sarahwbas@gmail.com</a></p>
                    <p className="label">Phone:</p>
                    <p className="value">(317) 457-1266</p>
                </div>
            </div>
            <div className="contact-right">
                <img src={MyProfilePic2} alt="Sarah Hamdan" className="profile-pic" />
            </div>
        </section>
    );
};

export default ContactMe;
