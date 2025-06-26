// Home.jsx
import React, { useEffect, useState } from 'react';
import { FaCogs, FaServer, FaProjectDiagram, FaHandshake } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

import bg1 from '../assets/Background/bg1.jpg';
import bg2 from '../assets/Background/bg2.jpg';
import bg3 from '../assets/Background/bg3.jpg';

const bgImages = [bg1, bg2, bg3];

const offerings = [
  {
    icon: <FaServer className="icon" />, 
    title: 'SAP ERP Solutions',
    description: 'Streamline your business operations with scalable ERP systems.'
  },
  {
    icon: <FaProjectDiagram className="icon" />, 
    title: 'Custom Software Development',
    description: 'Build intelligent and efficient applications tailored to your enterprise.'
  },
  {
    icon: <FaCogs className="icon" />, 
    title: 'System Integration & Consulting',
    description: 'Optimize your IT infrastructure with expert guidance.'
  }
];

const reasons = [
  {
    icon: <FaHandshake className="icon" />, 
    title: 'Proven SAP Expertise',
    description: 'Industry experience in implementing SAP-powered solutions.'
  },
  {
    icon: <FaServer className="icon" />, 
    title: 'End-to-End IT Services',
    description: 'Comprehensive services from development to deployment.'
  },
  {
    icon: <FaProjectDiagram className="icon" />, 
    title: 'Global Project Experience',
    description: 'Successfully delivered IT solutions to clients worldwide.'
  },
  {
    icon: <FaCogs className="icon" />, 
    title: 'Agile & Customer-Centric Approach',
    description: 'We adapt to your needs to ensure success and satisfaction.'
  }
];

const Home = () => {
  const [theme, setTheme] = useState('light');
  const [bgIndex, setBgIndex] = useState(0);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <section
        className="hero-section image-hero"
        style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Empowering Digital Transformation with SAP Expertise</h1>
          <p>
            Welcome to Alphaseam Enterprise, where innovation meets enterprise. We specialize in
            delivering high-performance SAP-based ERP solutions tailored for businesses of all
            sizes. Our solutions empower global organizations to thrive in a digital-first world.
          </p>
          <button className="cta-button pulse">Get in Touch Today</button>
        </div>
      </section>

      <section className="offerings-section card-section full-width" data-aos="fade-up">
        <h2>Our Core Offerings</h2>
        <div className="offerings-list">
          {offerings.map((item, idx) => (
            <div className="card rectangle" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="reasons-section card-section full-width" data-aos="fade-up">
        <h2>Why Alphaseam Enterprise?</h2>
        <div className="reasons-list">
          {reasons.map((item, idx) => (
            <div className="card rectangle" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;