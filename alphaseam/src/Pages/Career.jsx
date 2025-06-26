import React from 'react';
import './Career.css';
import bgVideo from '../assets/Background/bg3_Video.mp4';

function Career() {
  return (
    <div className="career-container">
      <video autoPlay muted loop playsInline className="career-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="career-overlay"></div>

      <div className="career-content">
        <h1 className="career-heading">Career Page</h1>
      </div>
    </div>
  );
}

export default Career;
