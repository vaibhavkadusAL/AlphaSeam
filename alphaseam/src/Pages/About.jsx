import './About.css';
import heroImg from '../assets/About/hero.jpg';
import missionImg from '../assets/About/mission.jpg';
import visionImg from '../assets/About/vision.jpg';
import bgVideo from '../assets/Background/bg3_Video.mp4';

export default function About() {
  return (
    <div className="about-page">
      {/* Background Video with Content */}
      <div className="video-container">
        <video autoPlay muted loop playsInline className="background-video">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="video-content">
          <h2>About Our Company</h2>
          <p>
            Alphaseam Pvt Ltd is a global leader in software development,
            dedicated to empowering businesses worldwide with cutting-edge
            technological solutions. Founded in 2019, we have consistently
            delivered exceptional apps that drive business growth and success.
          </p>
        </div>
      </div>

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
    </div>
  );
}
