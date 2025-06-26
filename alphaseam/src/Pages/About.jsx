import React from "react";
import "./About.css";

import bannerImg from "../assets/about/banner.jpg";
import missionImg from "../assets/about/mission.jpg";
import visionImg from "../assets/about/vision.jpg";
import journeyImg from "../assets/about/journey.jpg";
import teamImg from "../assets/about/team.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <img src={bannerImg} alt="Alphaseam Enterprise Banner" className="hero-img" />
        <div className="hero-text">
          <h1>About Alphaseam Enterprise</h1>
          <p className="meta-description">
            Learn about Alphaseam Enterprise – a Pune-based IT company offering SAP and ERP solutions for global businesses.
          </p>
        </div>
      </div>

      <div className="about-section">
        <p className="intro">
          Alphaseam Enterprise is a Pune-based software development company specializing in SAP technologies and enterprise-grade IT solutions. With clients across multiple industries and geographies, we’re known for our commitment to quality, innovation, and customer satisfaction.
        </p>

        <div className="mission-vision">
          <div className="box">
            <img src={missionImg} alt="Mission" />
            <h3>Our Mission</h3>
            <p>To empower organizations through transformative IT solutions, driven by SAP and next-gen enterprise technologies.</p>
          </div>
          <div className="box">
            <img src={visionImg} alt="Vision" />
            <h3>Our Vision</h3>
            <p>To become a globally recognized partner for digital transformation through SAP and ERP innovation.</p>
          </div>
        </div>

        <div className="values">
          <h3>Our Core Values</h3>
          <ul>
            <li><strong>Integrity:</strong> We build trust through transparency and ethical practices.</li>
            <li><strong>Innovation:</strong> We embrace change and continuously improve.</li>
            <li><strong>Excellence:</strong> We aim for the highest standards in every project.</li>
            <li><strong>Collaboration:</strong> We work as one team, internally and with clients.</li>
          </ul>
        </div>

        <div className="journey">
          <h3>Our Journey So Far</h3>
          <img src={journeyImg} alt="Journey" className="journey-img" />
          <p>
            Founded in Pune, Alphaseam Enterprise has rapidly grown into a trusted SAP partner for businesses worldwide. Our expert team of certified developers, consultants, analysts, and creative thinkers collaborates closely with clients to deliver scalable and customized IT solutions.
          </p>
        </div>

        <div className="team">
          <h3>Meet the Team</h3>
          <img src={teamImg} alt="Our Team" className="team-img" />
          <p>
            Our diverse team includes SAP-certified professionals, engineers, project managers, and digital experts with deep industry experience. Together, we bring ideas to life with innovation and technical precision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
