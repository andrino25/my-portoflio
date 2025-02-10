import React, { useEffect, useState } from 'react';
import '../css/Works.css';
import vioraImg from '../assets/viora.png';
import shibuyaImg from '../assets/shibuya.png';
import capstoneImg from '../assets/people-connect.png';
import gagambrawlImg from '../assets/gagambrawl.png';
import extrImg from '../assets/extr.png';
import adminImg from '../assets/admin.png';

const CustomDialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div 
        className={`dialog-content ${isOpen ? 'dialog-fade-in' : ''}`} 
        onClick={e => e.stopPropagation()}
      >
        {children}
        <button className="dialog-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const Works = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogFade, setDialogFade] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.contact-fade');
    elements.forEach((element) => element.classList.add('show'));
  }, []);

  const handleProjectClick = (link) => {
    if (!link) {
      setShowDialog(true);
      setDialogFade(true);
    } else {
      window.open(link, '_blank');
    }
  };

  const handleCloseDialog = () => {
    setDialogFade(false);
    setTimeout(() => setShowDialog(false), 300);
  };

  const projects = [
    {
      title: "Shibuya Store",
      description: "A simple e-commerce platform for figurines using React.",
      image: shibuyaImg,
      link: "https://shibuya-store-react.vercel.app/"
    },
    {
      title: "Viora Cosmetics Store",
      description: "A simple e-commerce platform for cosmetics with basic functionalities using local storage.",
      image: vioraImg,
      link: "https://viora-cosmetics.vercel.app/"
    },
    {
      title: "Simple Stripe Server",
      description: "A third-party payment server utilizing Stripe without handling real money.",
      image: "https://www.bobsguide.com/wp-content/uploads/2024/06/1510164528_150_social-mobile.jpg",
      link: "https://github.com/andrino25/server-stripe-test"
    },
    {
      title: "Simple Content Based Filtering Algorithm ",
      description: "A python script related to our capstone project filtering out service recommendations categories.",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*dWxRDPTf891yhxlI.png",
      link: ""
    }
  ];

  const projectsInvolved = [
    {
      title: "PeopleConnect (Capstone)",
      description: "A mobile service application providing ease access of personal aide and errands",
      image: capstoneImg,
      link: "https://github.com/vjoseph6/PeopleConnectCapstone"
    },
    {
      title: "Gagambrawl",
      description: "A simple spider inventory management system application.",
      image: gagambrawlImg,
      link: "https://github.com/andrino25/ELDROID_KotlinBois_-130FRI-"
    },
    {
      title: "Expense Tracker",
      description: "A web application for expense management and monitoring",
      image: extrImg,
      link: ""
    },
    {
      title: "PeopleConnect Admin (Capstone)",
      description: "A web application for tracking and monitoring the mobile version of the capstone project.",
      image: adminImg,
      link: "https://github.com/Kevinboo123/TheAdminPeopleConnect"
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h3><strong>{project.title}</strong></h3>
        <p>{project.description}</p>
        <button 
          onClick={() => handleProjectClick(project.link)}
          className={`view-project ${!project.link ? 'private-project' : ''}`}
        >
          {project.link ? 'View Project' : 'Private Project'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="works-container" id="works">
      <h2 className="works-title fade-in-section1">My Works</h2>
      <div className="projects-grid fade-in-section1">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <h2 className="works-title fade-in-section1">Projects Involved</h2>
      <div className="projects-grid fade-in-section1">
        {projectsInvolved.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <CustomDialog isOpen={showDialog} onClose={handleCloseDialog}>
        <h2>Private Project</h2>
        <p>This project is private and not available for public viewing.</p>
      </CustomDialog>
    </div>
  );
};

export default Works;