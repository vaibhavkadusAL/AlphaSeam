import React from 'react';
import './Contact.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Contact() {
  return (
    <>
      <div className="contact-container fade-in">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-description">
          We’re ready to help you accelerate your business through smart IT
          solutions. Whether you have a project in mind, a question about our
          services, or need expert consultation, we’d love to hear from you.
        </p>

        <div className="contact-wrapper slide-up">
          <div className="contact-details">
            <h2>Contact Details</h2>
            <p>
              We'd love to connect with you! Please fill out the form or email us directly at
              <a href="mailto:info@alphaseam.com"> info@alphaseam.com</a>.
            </p>
            <ul>
              <li>🏠 601 Gera's Imperium Rise, Hinjewadi Phase 2, Pune, MH 411057</li>
              <li>📱 +91-**********, +91-**********</li>
              <li>📧 info@alphaseam.com</li>
            </ul>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" rows="6"></textarea>
            <button className="submit-button">SUBMIT</button>
          </div>
        </div>
      </div>

      <div className="map-container fade-in-up">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5042755279146!2d73.71548897465382!3d18.596374866855435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c11ae71d12cf%3A0x5e0b13fd00d2d1bd!2sALPHASEAM!5e0!3m2!1sen!2sin!4v1750743322504!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
