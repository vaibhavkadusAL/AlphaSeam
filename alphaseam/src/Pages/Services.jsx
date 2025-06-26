import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services-container">
      <h1 className="services-title">Our Services | SAP & ERP Experts – Alphaseam Enterprise</h1>
      <p className="services-meta">
        Alphaseam Enterprise offers SAP ERP development, system integration, IT consulting, and software support. Tailored enterprise tech solutions.
      </p>

      <div className="services-intro">
        We provide a full spectrum of IT development and consulting services with a strong focus on SAP and ERP ecosystems. Our custom solutions are designed to optimize operations, improve workflows, and support your business growth.
      </div>

      <h2 className="core-title">Our Core Services</h2>
      <ul className="core-services">
        <li>
          <h3>SAP Implementation & Customization</h3>
          <p>Deploy, configure, and tailor SAP systems to meet the unique needs of your enterprise.</p>
        </li>
        <li>
          <h3>ERP Software Development</h3>
          <p>Custom-built ERP applications that help manage everything from finance and HR to inventory and sales.</p>
        </li>
        <li>
          <h3>System Integration & Support</h3>
          <p>Achieve seamless system communication and enjoy round-the-clock technical support.</p>
        </li>
        <li>
          <h3>IT Strategy & Consulting</h3>
          <p>Receive expert advice on digital transformation, infrastructure upgrades, and technology adoption.</p>
        </li>
      </ul>

      <h2 className="industries-title">Industries We Serve</h2>
      <ul className="industries-list">
        <li>Manufacturing</li>
        <li>Retail & E-commerce</li>
        <li>Logistics & Supply Chain</li>
        <li>Healthcare</li>
        <li>Public Sector</li>
      </ul>

      <div className="cta">
        <p>Partner with us for your next IT initiative.</p>
        <button className="cta-button">Request a Consultation</button>
      </div>
    </section>
  );
};

export default Services;
