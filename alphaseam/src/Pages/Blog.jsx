import React from 'react';
import './Blog.css';
import blogBg from '../assets/Background/blog.jpg'; 
function Blog() {
  return (
    <section className="blog-section" style={{ backgroundImage: `url(${blogBg})` }}>
      <div className="blog-overlay">
        <div className="blog-content">
          <h1 className="blog-title">Our Blog</h1>
          <p className="blog-subtitle">
            Insights, stories, and updates from Alphaseam to help you stay ahead in the tech world.
          </p>

          <div className="blog-posts">
            <div className="blog-card">
              <h3>5 Emerging Trends in Software Development</h3>
              <p>Explore the latest practices and tools reshaping how software is built in 2025.</p>
              <button>Read More</button>
            </div>

            <div className="blog-card">
              <h3>Why UI/UX Design is Crucial in 2025</h3>
              <p>Discover how a great user experience can increase engagement and conversions.</p>
              <button>Read More</button>
            </div>

            <div className="blog-card">
              <h3>DevOps: Speeding up Delivery Pipelines</h3>
              <p>Learn how DevOps accelerates software releases while maintaining quality.</p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
