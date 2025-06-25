import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

import {
  FaRobot,
  FaNetworkWired,
  FaMapSigns,
  FaServer,
  FaExchangeAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaCogs,
  FaShoppingCart,
  FaCloud,
} from 'react-icons/fa';

import webDev from '../assets/Background/web_development.jpg';
import mobileApp from '../assets/Background/mobile_development.jpg';
import customSoftware from '../assets/Background/software_development.jpg';
import softwareTesting from '../assets/Background/software_testing.jpg';
import cloudComputing from '../assets/Background/devops.jpg';
import ecommerce from '../assets/Background/ecommerce.jpg';
import dbms from '../assets/Background/dbms.jpg';
import devops from '../assets/Background/devops.jpg';
import softwareSectionBg from '../assets/Background/software_section.jpg';

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

const services = [
  {
    icon: <FaRobot />,
    title: 'AI Assessment Services',
    desc: 'We specialize in AI Assessment Services designed to help businesses unlock the full potential of their SAP CX and ERP systems.',
  },
  {
    icon: <FaNetworkWired />,
    title: 'IT Assessment Services',
    desc: 'Elevate your business with our comprehensive IT Assessment Services. Discover hidden opportunities in your IT landscape.',
  },
  {
    icon: <FaMapSigns />,
    title: 'CX Strategy & Roadmap',
    desc: 'Transforming complex business challenges into growth with bespoke customer experience strategies.',
  },
  {
    icon: <FaServer />,
    title: 'SAP Implementation',
    desc: 'Revolutionizing businesses with SAP S/4HANA Cloud, SAP CX, SAP BTP, and SAP Analytics Cloud.',
  },
  {
    icon: <FaExchangeAlt />,
    title: 'SAP Migration Services',
    desc: 'We guide businesses seamlessly through critical SAP migration processes with minimal disruption.',
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
    <>
      {/* Hero Section */}
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

      {/* Services Section */}
      <section className="service-section">
        <h2 data-aos="fade-up">Our Core Services</h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div className="service-box" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Software Development Section */}
      <section
        className="software-section"
        style={{ backgroundImage: `url(${softwareSectionBg})` }}
      >
        <div className="software-overlay"></div>
        <div className="software-container" data-aos="fade-up">
          <h2>Software Development</h2>
          <p className="software-subtext">
            Elevate Your Vision: Expert Software Development Services for Your Success.
          </p>

          <div className="software-grid">
            <div className="software-card" data-aos="fade-up" data-aos-delay="100">
              <FaLaptopCode className="soft-icon" />
              <h3>Web Applications</h3>
              <p>
                Transform your online presence with our custom-built web applications,
                designed to deliver engaging user experiences and drive business growth.
              </p>
            </div>
            <div className="software-card" data-aos="fade-up" data-aos-delay="200">
              <FaMobileAlt className="soft-icon" />
              <h3>Mobile Apps</h3>
              <p>
                Unlock the power of mobile with our expertly crafted iOS and Android apps,
                engineered to captivate users and drive results.
              </p>
            </div>
            <div className="software-card" data-aos="fade-up" data-aos-delay="300">
              <FaCogs className="soft-icon" />
              <h3>Custom Software</h3>
              <p>
                Streamline your operations and amplify productivity with our bespoke
                software solutions, tailored to meet the unique needs of your business.
              </p>
            </div>
            <div className="software-card" data-aos="fade-up" data-aos-delay="400">
              <FaShoppingCart className="soft-icon" />
              <h3>E-commerce Solutions</h3>
              <p>
                Revolutionize your online store with our secure, user-centric e-commerce
                platforms, designed to boost conversions and fuel revenue growth.
              </p>
            </div>
            <div className="software-card" data-aos="fade-up" data-aos-delay="500">
              <FaCloud className="soft-icon" />
              <h3>Cloud Computing</h3>
              <p>
                Harness the limitless potential of the cloud with our expert cloud
                computing services, ensuring scalable, flexible, and secure data management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
