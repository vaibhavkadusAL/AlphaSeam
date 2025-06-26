import React from 'react';
import './Career.css';

const jobs = [
  {
    title: "Full Stack Lead",
    skills: "Java8+, Lambda, Streams, Spring, SQL, NoSQL",
  },
  {
    title: "Frontend Developer",
    skills: "React, HTML, CSS, JavaScript, Responsive Design",
  },
  {
    title: "Backend Developer",
    skills: "Node.js, Express, REST APIs, MongoDB",
  },
  {
    title: "UI/UX Designer",
    skills: "Figma, Adobe XD, Wireframes, Prototypes",
  },
];

const Career = () => {
  return (
    <section className="career-section">
      <div className="career-container">
        <h1 className="career-title">Join Our Team</h1>
        <p className="career-description">
          We're always looking for talented individuals to help us grow. Explore current opportunities and become part of our journey.
        </p>
        <div className="job-grid">
          {jobs.map((job, index) => (
            <div key={index} className="job-box fade-in-up fade-delay-1">
              <h3>{job.title}</h3>
              <p>{job.skills}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
