import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <h3>Alphaseam Pvt. Ltd.</h3>
          <p>Innovating with precision.</p>
        </div>

        <div className="footer-links">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <p>Email: info@gtasterix.com</p>
          <p>Phone: +91 0000000000</p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Alphaseam Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
