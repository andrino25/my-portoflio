import React, { useEffect } from 'react';
import profileImg from '../assets/profile.jpg';
import "../css/About.css"

const About = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        } else {
          entry.target.classList.add('hidden');
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="about-container" id="about">
      <h2 className="section-title fade-section">About Me</h2>
      
      <div className="about-content">
        {/* Personal Info */}
        <div className="about-card fade-section">
          <div className="card-image">
            <img src="https://applescoop.org/image/wallpapers/mac/minimalist-programmer-code-coding-developer-apple-gradient-black-28-10-2024-1730177126-hd-wallpaper.png" alt="Developer working" className="section-image" />
          </div>
          <div className="card-content">
            <p>
              I aim to gain hands-on experience, enhance my technical skills, and contribute
              to a dynamic team. I am eager to learn and grow professionally in the IT field,
              ready to take on challenges that will refine my abilities and support the
              success of the organization.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-card fade-section">
          <div className="card-image">
            <img src= "https://miro.medium.com/v2/resize:fit:1400/1*rsBaIeNZ-fw16kotPb8qhg.png"  alt="Technical skills visualization" className="section-image" />
          </div>
          <div className="card-content">
            <h3>Technical Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">Responsive Design</span>
              <span className="skill-tag">Firebase</span>
              <span className="skill-tag">Git & GitHub</span>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="experience-card fade-section">
          <div className="card-image">
            <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D" alt="Work experience" className="section-image" />
          </div>
          <div className="card-content">
            <h3>Experience</h3>
            <ul>
              <li><strong>Developer Position</strong> - Alliance JumpStart Program (2024)</li>
              <li><strong>Internship</strong> - Accenture Academy: Front End and Back End Development (2025)</li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="education-card fade-section">
          <div className="card-image">
            <img src="https://live.staticflickr.com/3652/3532804081_7eafee2421_b.jpg" alt="Education background" className="section-image" />
          </div>
          <div className="card-content">
            <h3>Education</h3>
            <p>Bachelor of Science in Information Technology - University of Cebu-Banilad (Fresh Graduate)</p>
          </div>
        </div>

        {/* Interests Section */}
        <div className="interests-card fade-section">
          <div className="card-image">
            <img src="https://www.nxp.com/assets/images/en/photography/FreeMASTER-OG.png" alt="Hobbies and interests" className="section-image" />
          </div>
          <div className="card-content">
            <h3>Hobbies & Interests</h3>
            <div className="interest-tags">
              <span className="interest-tag">Gaming</span>
              <span className="interest-tag">Basketball</span>
              <span className="interest-tag">Music Enthusiast</span>
              <span className="interest-tag">Watching Movies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;