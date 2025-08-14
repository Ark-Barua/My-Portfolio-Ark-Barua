import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate developer with a love for creating innovative digital solutions
        </p>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            I am a results-driven MSc Computer Applications student at SICSR Pune, 
            passionate about crafting efficient and user-friendly web applications. 
            My expertise includes HTML, CSS, JavaScript, Angular, React, and Vue. 
            I thrive in collaborative environments and enjoy working with cross-functional 
            teams to deliver impactful digital solutions.
          </p>
          <p>
            With a strong foundation in both frontend and backend development, 
            I specialize in building scalable applications that provide exceptional 
            user experiences. My approach combines technical excellence with 
            creative problem-solving to deliver solutions that exceed expectations.
          </p>
        </div>
        
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}