import '../css/Contact.css';
import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.contact-fade');
    elements.forEach((element) => element.classList.add('show'));
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>Have a question or want to work together? Feel free to reach out!</p>
      </div>

      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="your@email.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="What's this about?" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Tell me about your project..." required></textarea>
        </div>

        <button className = "contact-button" type="submit">Send Message</button>
      </form>

      <div className="social-links">
            <a 
              href="https://github.com/andrino25" 
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Font_Awesome_5_brands_github.svg" 
                alt="GitHub"
                className="github-icon"
              />
            </a>
            <a 
              href="https://www.facebook.com/earlbrando.andrino.1" 
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
                alt="Facebook"
                className="social-image"
              />
            </a>
            <a 
              href="https://www.instagram.com/andrino_25/" 
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                alt="Instagram"
                className="social-image"
              />
            </a>
          </div>
    </div>
  );
};

export default Contact;
