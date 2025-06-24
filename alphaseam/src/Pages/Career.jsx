import React from 'react';
import './Career.css';

const jobs = [
  {
    title: "Full Stack Lead",
    skills: "Java8 or above including lambda expressions and streams, Spring, SQL, NoSQL, Design, implement and administer the database system, DSA, React, Node.js, Typescript good to have",
    qualification: "Any Bachelor's Degree or Above",
    experience: "3 To 8",
    location: "Pune, MH",
  },
  {
    title: "Sr. Mobile App Developer",
    skills: "Flutter, React Native, IOS & Android",
    qualification: "Any Graduate Or Above",
    experience: "6 To 8",
    location: "Pune",
  },
  {
    title: "Sr. Data Engineer",
    skills: "Spark, Apache, Big Data, Data engineering, Pyspark, SQL, python, R or scala, AWS/Azure/GCP, AI&ML, Data Lakes",
    qualification: "Any graduation or above",
    experience: "3 To 8",
    location: "Pune",
  },
  {
    title: "Sr. Java Microservices Developer",
    skills: "Skills Required: Lucene, solar, akka, cassandra, kafka, elastic search, ML, Junit, Scala, Unix/Linux, TDD",
    qualification: "Any graduate or above",
    experience: "3 To 8",
    location: "Pune, MH",
  },
  {
    title: "HR Admin Intern",
    skills: " Communication, Organization, Attention to Detail, Time Management, Problem-solving, Interpersonal, Adaptability, Teamwork, Confidentiality, Multitasking",
    qualification: "BBA/BMS, Bcom or any related field",
    experience: "0 To 1",
    location: "Pune",
  },
  {
    title: "Java Developer trainee",
    skills: "Knowledge or experience on the Java8 or above including lambda expressions and streams, Spring, SQL, NoSQL, Design, implement and administer the database system, DSA, React, Node.js, typescript",
    qualification: "Any Graduate or Above",
    experience: "0 To 1",
    location: "Pune",
  },
  {
    title: "Full Stack Developer Intern",
    skills: "Java, DSA, Angular, React, VueJs, SQL, PLSQL, NoSQL, NodeJS, Typescript, Python, Shell",
    qualification: "Any Graduate",
    experience: "0 To 1",
    location: "Pune, MH",
  },
  {
    title: "Sr. Mobile App Developer",
    skills: "Flutter, React Native, IOS & Android",
    qualification: "Any Graduate Or Above",
    experience: "6 To 8",
    location: "Pune",
  },
  {
    title: "Sr. Data Engineer",
    skills: "Spark, Apache, Big Data, Data engineering, Pyspark, SQL, python, R or scala, AWS/Azure/GCP, AI&ML, Data Lakes",
    qualification: "Any graduation or above",
    experience: "3 To 8",
    location: "Pune",
  },
];

const Careers = () => {
  return (
    <section className="careers">
      <h2 className="title">Job Listings</h2>
      {jobs.map((job, index) => (
        <div key={index} className="job-box">
          <h3 className="job-title">{job.title}</h3>
          <p><strong>Skills Required:</strong> {job.skills}</p>
          <p><strong>Education/Qualification:</strong> {job.qualification}</p>
          <p><strong>Years Of Exp:</strong> {job.experience}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <button className="apply-btn">APPLY NOW</button>
        </div>
      ))}
    </section>
  );
};

export default Careers;
