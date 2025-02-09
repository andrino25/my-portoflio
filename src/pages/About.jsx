import React, { useEffect } from 'react';
import "../css/About.css"
import hobbyImg from '../assets/hobby.png';

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

  // Langauges mapping
  const skills = [

    // Frontend Development
    { src: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/others/html.svg", alt: "HTML5" },
    { src: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/others/css.svg", alt: "CSS3" },
    { src: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/social%20icons/javascript.svg", alt: "JavaScript" },
    { src: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/react.svg", alt: "React.js" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s", alt: "Tailwind CSS" },
    { src: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/boostrap.svg", alt: "Bootstrap" },


    // Backend Development
    { src: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/c%23.svg", alt: "C#" },
    { src: "https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-3d-icon-download-in-png-blend-fbx-gltf-file-formats--javascript-runtime-backend-node-js-logo-coding-lang-pack-logos-icons-7578002.png?f=webp", alt: "Node.js" },
    { src: "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png", alt: "Firebase" },
    { src: "https://seeklogo.com/images/M/mysql-logo-B4943FE6DD-seeklogo.com.png", alt: "MySQL" },
    { src: "https://ciodimension.com/wp-content/uploads/2024/09/mongo.png", alt: "MongoDB" },

    // Mobile Development
    { src: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/kotlin.svg", alt: "Kotlin" },
  
    // Web Hosting & Deployment
    { src: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/apple-touch-icon-256x256.png", alt: "Vercel" },
    { src: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/gkq3dkkfkec8edd6fuay", alt: "Render" },
  
    // Version Control & Tools
    { src: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png", alt: "GitHub" },
    { src: "https://www.applivery.com/wp-content/uploads/2024/09/Postman.png", alt: "Postman" },
    { src: "https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png", alt: "Figma" },

    //Others
    { src: "https://images.saasworthy.com/witai_30099_logo_1652706679_wqtz0.png", alt: "Wit ai" },
    { src: "https://cdn.worldvectorlogo.com/logos/robot-framework.svg", alt: "Robot" },
    { src: "https://img.icons8.com/?size=512&id=38553&format=png", alt: "Selenium" },

  ];

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
            <img 
              src="https://miro.medium.com/v2/resize:fit:1400/1*rsBaIeNZ-fw16kotPb8qhg.png"  
              alt="Technical skills visualization" 
              className="section-image" 
            />
          </div>
          <div className="card-content">
            <h3>Quite familiar with the following fields:</h3>
            
            <div className="carousel-track">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="skill-wrapper">
                  <img src={skill.src} alt={skill.alt} className="skill-icon" />
                  <span className="skill-label">{skill.alt}</span>
                </div>
              ))}
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
            <img src= {hobbyImg} alt="Hobbies and interests" className="section-image" />
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