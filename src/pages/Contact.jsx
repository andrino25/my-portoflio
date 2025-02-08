// Contact.jsx

import '../css/Contact.css';
import React, { useEffect } from 'react';


const Contact = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.contact-fade');
    elements.forEach((element) => element.classList.add('show'));
  }, []);
  return (
    <div className="contact-container" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-linkedin"></i>
            <a href="#">LinkedIn Profile</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-github"></i>
            <a href="#">GitHub Profile</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-twitter"></i>
            <a href="#">Twitter Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;