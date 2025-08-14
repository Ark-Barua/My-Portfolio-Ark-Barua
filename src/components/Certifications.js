import React from 'react';
import { 
  SiHtml5, 
  SiJavascript, 
  SiTypescript, 
  SiAngular, 
  SiBootstrap, 
  SiReact,
  SiUnity
} from 'react-icons/si';
import { HiClock } from 'react-icons/hi2';

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="section-header">
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="section-subtitle">
          Professional certifications and continuous learning achievements
        </p>
      </div>
      
      <div className="certifications-grid">
        <div className="cert-card">
          <div className="cert-icon">
            <SiHtml5 size={32} />
          </div>
          <div className="cert-title">HTML5 & CSS3</div>
          <div className="cert-org">Infosys Springboard</div>
          <div className="cert-date">June 2025</div>
        </div>
        
        <div className="cert-card">
          <div className="cert-icon">
            <SiJavascript size={32} />
          </div>
          <div className="cert-title">JavaScript</div>
          <div className="cert-org">Infosys Springboard</div>
          <div className="cert-date">June 2025</div>
        </div>
        
        <div className="cert-card">
          <div className="cert-icon">
            <SiTypescript size={32} />
          </div>
          <div className="cert-title">TypeScript</div>
          <div className="cert-org">Infosys Springboard</div>
          <div className="cert-date">June 2025</div>
        </div>
        
        <div className="cert-card">
          <div className="cert-icon">
            <SiAngular size={32} />
          </div>
          <div className="cert-title">Angular</div>
          <div className="cert-org">Infosys Springboard</div>
          <div className="cert-date">June 2025</div>
        </div>
        
        <div className="cert-card">
          <div className="cert-icon">
            <SiBootstrap size={32} />
          </div>
          <div className="cert-title">Bootstrap</div>
          <div className="cert-org">Infosys Springboard</div>
          <div className="cert-date">June 2025</div>
        </div>
        
        <div className="cert-card">
          <div className="cert-icon">
            <HiClock size={32} />
          </div>
          <div className="cert-title">Time Management</div>
          <div className="cert-org">Infosys Springboard</div>
          <div className="cert-date">June 2025</div>
        </div>
        
        <div className="cert-card">
          <div className="cert-icon">
            <SiUnity size={32} />
          </div>
          <div className="cert-title">Unity Game Development</div>
          <div className="cert-org">Infosys Springboard</div>
          <div className="cert-date">June 2025</div>
        </div>
        
        <div className="cert-card">
          <div className="cert-icon">
            <SiReact size={32} />
          </div>
          <div className="cert-title">React.js</div>
          <div className="cert-org">Self-Paced Learning</div>
          <div className="cert-date">Ongoing</div>
        </div>
      </div>
    </section>
  );
}