import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCogs,
  FaLaptopCode,
  FaSyncAlt,
  FaProjectDiagram,
} from "react-icons/fa";
import heroVideo from "../assets/Background/bg_Video.mp4";

const offerings = [
  {
    icon: <FaCogs />,
    title: "SAP ERP Solutions",
    desc: "Streamline your business operations with scalable ERP systems.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Custom Software Development",
    desc: "Build intelligent and efficient applications.",
  },
  {
    icon: <FaSyncAlt />,
    title: "System Integration & Consulting",
    desc: "Optimize your IT infrastructure with expert guidance.",
  },
];

const reasons = [
  "Proven SAP Expertise",
  "End-to-End IT Services",
  "Global Project Experience",
  "Agile & Customer-Centric Approach",
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <section className="hero-section video-hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Empowering Digital Transformation with SAP Expertise</h1>
          <p>
            We deliver SAP-powered ERP, digital transformation, and enterprise
            software solutions to help you scale.
          </p>
          <button className="cta-button pulse">Get in Touch</button>
        </div>
      </section>

      <section className="card-section offerings-section full-width" data-aos="fade-up">
        <h2>Our Core Offerings</h2>
        <div className="offerings-list">
          {offerings.map((item, idx) => (
            <div className="card rectangle" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card-section reasons-section full-width" data-aos="fade-up">
        <h2>Why Alphaseam Enterprise?</h2>
        <div className="reasons-list">
          {reasons.map((reason, idx) => (
            <div className="card rectangle" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="icon"><FaProjectDiagram /></div>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
