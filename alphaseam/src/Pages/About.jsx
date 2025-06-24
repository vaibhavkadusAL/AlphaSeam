import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

import heroImg from '../assets/About/hero.jpg';
import missionImg from '../assets/About/mission.jpg';
import visionImg from '../assets/About/vision.jpg';
import bgImg from '../assets/About/bg.avif';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-page">
      <section className="hero" data-aos="fade-right">
        <div className="text">
          <h2>We Create Designs<br />and Technology</h2>
          <p>We are dedicated to streamlining and improving the industry here at AlphaSeam</p>
          <p>Emphasizing innovation to provide optimum solutions for your clients and give them a competitive edge in the market is a commendable approach.</p>
          <p>Striving to bring future technology excellence for your customers, colleagues, and shareholders is a visionary goal that can lead to long-term success and growth.</p>
          <p>Building quality solutions, boosting productivity, and significantly reducing time to market while keeping costs minimal is a challenging but achievable goal.</p>
        </div>
        <img src={heroImg} alt="Team working" data-aos="zoom-in" />
      </section>

      <section className="mission-vision">
        <div className="block" data-aos="fade-up">
          <h3>Our Mission</h3>
          <p>To bring the future technology excellence for our customers, colleagues and shareholders.</p>
          <img src={missionImg} alt="Mission" />
        </div>
        <div className="block" data-aos="fade-up" data-aos-delay="200">
          <h3>Our Vision</h3>
          <p>To build quality solutions, boost productivity and reduce 10x time to market at minimal cost</p>
          <img src={visionImg} alt="Vision" />
        </div>
      </section>

      <section className="stats" data-aos="fade-up">
        <h2>About Our Company.</h2>
        <p>
          Alphaseam Pvt Ltd is a global leader in software development, dedicated to
          empowering businesses worldwide with cutting-edge technological solutions.
          Founded in 2019, we have consistently delivered exceptional apps that drive
          business growth and success.
        </p>
        <div className="stat-grid">
          <div data-aos="fade-up" data-aos-delay="100">
            <h3>558</h3>
            <p>Happy Clients</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h3>492</h3>
            <p>Projects completed</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <h3>566</h3>
            <p>Positive feedback</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <h3>1950</h3>
            <p>Hours Of Support</p>
          </div>
        </div>
      </section>

      <section className="company-overview" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="overlay" data-aos="zoom-in">
          <h2>Company Overview</h2>
          <p>
            At Alphaseam Pvt Ltd, we fuse innovation and execution to create custom technological
            solutions that empower businesses worldwide to flourish in the digital age. Our
            expertise encompasses a wide range of services, from crafting bespoke software
            applications and robust database management systems to developing dynamic web and mobile
            applications, seamless e-commerce solutions, and sophisticated enterprise software
            solutions.
          </p>
          <button>CONTACT US</button>
        </div>
      </section>
    </div>
  );
}
