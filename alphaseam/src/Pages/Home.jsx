import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home-hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="tagline">Crafting Digital Precision</h1>
        <p className="description">
          At Alphaseam, we transform ideas into intelligent, high-impact digital solutions. From tech consultancy to robust engineering—we build with intent and scale with purpose.
        </p>
        <div className="cta-buttons">
          <Link to="/services" className="btn primary">Explore Services</Link>
          <Link to="/contact" className="btn secondary">Get in Touch</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
