import React from 'react';
import resumePDF from "../assets/resume.pdf";
import resumePreview from "../assets/resume-preview.jpg";
import '../css/Resume.css';

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="resume-overlay">
        <div className="resume-content">
          <h1 className="resume-title">My Resume</h1>

          <div className="resume-card">
            <div className="preview-container">
              <img 
                src={resumePreview} 
                alt="Resume Preview" 
                className="resume-preview" 
              />
              <div className="preview-overlay">
                <div className="action-buttons">
                  <a 
                    href={resumePDF} 
                    download="Andrino_Resume.pdf" 
                    className="download-button"
                  >
                    Download PDF
                  </a>
                  <a 
                    href={resumePDF} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="view-button"
                  >
                    View Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
