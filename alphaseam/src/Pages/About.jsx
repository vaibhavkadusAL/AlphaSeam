import './About.css';
import heroImg from '../assets/hero.jpg';
import missionImg from '../assets/mission.jpg';
import visionImg from '../assets/vision.jpg';
import bgImg from '../assets/bg.avif';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="text">
          <h2>We Create Designs<br />and technology</h2>
          <p>We are dedicated to streamlining and improving the industry here at AlphaSeam</p>
          <p>Emphasizing innovation to provide optimum solutions for your clients and give them a competitive edge in the market is a commendable approach.</p>
          <p>Striving to bring future technology excellence for your customers, colleagues, and shareholders is a visionary goal that can lead to long-term success and growth.</p>
          <p>Building quality solutions, boosting productivity, and significantly reducing time to market while keeping costs minimal is a challenging but achievable goal.</p>
        </div>
        <img src={heroImg} alt="Team working" />
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="block">
          <h3>Our Mission</h3>
          <p>To bring the future technology excellence for our customers, colleagues and shareholders.</p>
          <img src={missionImg} alt="Mission" />
        </div>
        <div className="block">
          <h3>Our Vision</h3>
          <p>To build quality solutions, boost productivity and reduce 10x time to market at minimal cost</p>
          <img src={visionImg} alt="Vision" />
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <h2>About Our Company.</h2>
        <p>
          Alphaseam Pvt Ltd is a global leader in software development, dedicated to
          empowering businesses worldwide with cutting-edge technological solutions.
          Founded in 2019, we have consistently delivered exceptional apps that drive
          business growth and success.
        </p>
        <div className="stat-grid">
          <div>
            <h3>558</h3>
            <p>Happy Clients</p>
          </div>
          <div>
            <h3>492</h3>
            <p>Projects completed</p>
          </div>
          <div>
            <h3>566</h3>
            <p>Positive feedback</p>
          </div>
          <div>
            <h3>1950</h3>
            <p>Hours Of Support</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="overview" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="overlay">
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

