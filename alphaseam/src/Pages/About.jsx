import React from 'react';
import './About.css';
import bgVideo from '../assets/Background/bg3_Video.mp4';

function About() {
  return (
    <div className="about-container">
      <video
        autoPlay
        muted
        loop
        className="background-video"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="about-content">
        About
      </div>
    </div>
  );
}

export default About;
