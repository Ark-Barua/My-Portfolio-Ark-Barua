import React, { useState, useEffect } from 'react';
import { HiHome, HiUser, HiFolderOpen, HiCode, HiAcademicCap, HiMail } from 'react-icons/hi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update CSS variable for scroll progress to drive the navbar progress bar
  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
      document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  // Observe sections to highlight active link
  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'skills', 'certifications', 'contact'];
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        // Use the entry with the largest intersection ratio that is intersecting
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible && visible.target && visible.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Compact navbar has no overlay menu; no body locking or outside click handlers needed

  return (
    <nav className={`navbar compact ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-brand">Ark Barua</div>
        <ul className="nav-links nav-chips">
          <li>
            <a href="#home" className={activeId === 'home' ? 'active' : ''}>
              <HiHome size={18} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className={activeId === 'about' ? 'active' : ''}>
              <HiUser size={18} />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#projects" className={activeId === 'projects' ? 'active' : ''}>
              <HiFolderOpen size={18} />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#skills" className={activeId === 'skills' ? 'active' : ''}>
              <HiCode size={18} />
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a href="#certifications" className={activeId === 'certifications' ? 'active' : ''}>
              <HiAcademicCap size={18} />
              <span>Certifications</span>
            </a>
          </li>
          <li>
            <a href="#contact" className={activeId === 'contact' ? 'active' : ''}>
              <HiMail size={18} />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
