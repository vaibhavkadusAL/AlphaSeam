import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

// Backgrounds and titles
const backgrounds = [
  {
    image: 'https://images.unsplash.com/photo-1581090700227-1e8e57b38092',
    title: 'Web Development',
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    title: 'Mobile App Development',
  },
  {
    image: 'https://images.unsplash.com/photo-1610564557376-7f1f3c46960c',
    title: 'Remote Staffing',
  },
  {
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20',
    title: 'Custom Software',
  },
  {
    image: 'https://images.unsplash.com/photo-1581093588401-8d16a7ca6a73',
    title: 'Software Testing',
  },
  {
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f',
    title: 'Cloud Computing',
  },
  {
    image: 'https://images.unsplash.com/photo-1515165562835-c6adf1f12543',
    title: 'E-Commerce',
  },
  {
    image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437d2',
    title: 'DBMS',
  },
  {
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051',
    title: 'DevOps',
  }
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const changeBg = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(changeBg);
  }, []);

  const current = backgrounds[index];

  return (
    <section
      className="home-hero fade"
      style={{ backgroundImage: `url(${current.image})` }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="tagline animate-up">{current.title}</h1>
        <p className="description animate-delay">
          At Alphaseam, we deliver world-class {current.title.toLowerCase()} solutions tailored to your business needs.
        </p>
        <div className="cta-buttons">
          <Link to="/services" className="btn primary animate-bounce">Explore Services</Link>
          <Link to="/contact" className="btn secondary animate-bounce delay">Get in Touch</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
