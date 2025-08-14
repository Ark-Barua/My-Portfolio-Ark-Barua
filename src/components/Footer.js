import React from 'react';
import { HiHeart, HiEnvelope, HiBriefcase, HiCodeBracket, HiPhone } from 'react-icons/hi2';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-text">
          <p>© 2025 Ark Barua. All rights reserved.</p>
          <p>Built with <HiHeart className="inline-icon" /> using React and modern web technologies</p>
        </div>
        
        <div className="social-links">
          <a 
            href="mailto:arkbarua16@gmail.com" 
            className="social-link"
            title="Email"
          >
            <HiEnvelope size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/arkbarua" 
            target="_blank" 
            rel="noreferrer" 
            className="social-link"
            title="LinkedIn"
          >
            <HiBriefcase size={20} />
          </a>
          <a 
            href="https://github.com/Ark-Barua" 
            target="_blank" 
            rel="noreferrer" 
            className="social-link"
            title="GitHub"
          >
            <HiCodeBracket size={20} />
          </a>
          <a 
            href="tel:+919064933940" 
            className="social-link"
            title="Phone"
          >
            <HiPhone size={20} />
          </a>
        </div>
        
        <div className="footer-availability">
          <p>Available for freelance opportunities and full-time positions</p>
        </div>
      </div>
    </footer>
  );
}