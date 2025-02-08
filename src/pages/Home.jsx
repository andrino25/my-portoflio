import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import '../css/Home.css';
import profileImg from '../assets/profile.jpg';

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observerRef.current.observe(section));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="home-container">
      {/* Background Image Container */}
      <div className="background-container">
        <img 
          src={profileImg} 
          alt="Background" 
          className="background-image"
        />
      </div>

      {/* Content Container */}
      <div className="content-overlay">
        <div className="content-wrapper">
          <h1 className="main-title">
            <span className="typing-animation">Earl Brando Andrino</span>
          </h1>
          <p className="subtitle">
            Just an Average Developer.
          </p>

          {/* CTA Button */}
          <div className="cta-container">
            <Link to="/resume" className="cta-button">
              View Resume
            </Link>
          </div>

          {/* Social Links */}
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
            <a 
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=earlbrandx@gmail.com&su=Your%20Subject%20Here&body=Your%20Message%20Here"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2913/2913990.png" 
                alt="Gmail"
                className="social-image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;