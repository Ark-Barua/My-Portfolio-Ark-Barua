import React from 'react';
import { HiRocketLaunch, HiChatBubbleLeftRight } from 'react-icons/hi2';

export default function Home() {
  return (
    <section id="home">
      <div className="hero-content">
        <h1 className="hero-title">Ark Barua</h1>
        <h2 className="hero-subtitle">Full-Stack Developer & UI/UX Enthusiast</h2>
        <p className="hero-description">
          MSc Computer Applications student passionate about crafting beautiful, 
          responsive web applications with cutting-edge technologies. 
          Specializing in React, Angular, Vue.js, and modern web development.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">
            <HiRocketLaunch size={20} />
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            <HiChatBubbleLeftRight size={20} />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
