import React, { useEffect } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from './emailjs-config';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize EmailJS
    if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      console.log('EmailJS initialized successfully');
    } else {
      console.warn('EmailJS not initialized - Public key not configured');
    }
    
    // Create particle background (comet field)
    const createParticles = () => {
      const particlesContainer = document.createElement('div');
      particlesContainer.className = 'particles';
      document.body.appendChild(particlesContainer);

      for (let i = 0; i < 42; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 18 + 's';
        particle.style.animationDuration = (Math.random() * 12 + 10) + 's';
        particle.style.setProperty('--twist', (Math.random() * 360).toFixed(0) + 'deg');
        particlesContainer.appendChild(particle);
      }
    };

    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe sections and cards
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.project-card, .skill-category, .cert-card');
    
    sections.forEach(section => observer.observe(section));
    cards.forEach(card => observer.observe(card));

    // Pointer-reactive global variables for unique effects
    const updatePointerVars = (x, y) => {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      const px = Math.max(0, Math.min(x / vw * 100, 100));
      const py = Math.max(0, Math.min(y / vh * 100, 100));
      document.documentElement.style.setProperty('--mx', px + '%');
      document.documentElement.style.setProperty('--my', py + '%');
    };

    const onMouseMove = (e) => updatePointerVars(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      const t = e.touches && e.touches[0];
      if (!t) return;
      updatePointerVars(t.clientX, t.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    createParticles();

    return () => {
      const particles = document.querySelector('.particles');
      if (particles) {
        particles.remove();
      }
      observer.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
