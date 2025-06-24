import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import webDev from '../assets/Background/web_development.jpg';//
import mobileApp from '../assets/Background/mobile_development.jpg';//
import customSoftware from '../assets/Background/software_development.jpg';//
import softwareTesting from '../assets/Background/software_testing.jpg';//
import cloudComputing from '../assets/Background/software_development.jpg';
import ecommerce from '../assets/Background/ecommerce.jpg';//
import dbms from '../assets/Background/dbms.jpg';//
import devops from '../assets/Background/devops.jpg';//

const backgrounds = [
  { image: webDev, title: 'Web Development' },
  { image: mobileApp, title: 'Mobile App Development' },
  { image: customSoftware, title: 'Custom Software' },
  { image: softwareTesting, title: 'Software Testing' },
  { image: cloudComputing, title: 'Cloud Computing' },
  { image: ecommerce, title: 'E-Commerce' },
  { image: dbms, title: 'DBMS' },
  { image: devops, title: 'DevOps' },
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [index]);

  const current = backgrounds[index];
  const previous = backgrounds[prevIndex];

  return (
    <section className="home-hero">
      
      <div
        className="bg-image fade-out"
        style={{ backgroundImage: `url(${previous.image})` }}
      ></div>

     
      <div
        className="bg-image fade-in"
        style={{ backgroundImage: `url(${current.image})` }}
      ></div>

      <div className="overlay"></div>

      <div className="hero-content">
        <h1 className="tagline">{current.title}</h1>
        <p className="description">
          Alphaseam delivers innovative solutions in {current.title.toLowerCase()} tailored to your business needs.
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
