import React from 'react';
import { 
  SiReact, 
  SiAngular, 
  SiVuedotjs, 
  SiHtml5, 
  SiJavascript, 
  SiBootstrap,
  SiPhp,
  SiMysql,
  SiSqlite,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiDocker,
  SiJira,
  SiTestinglibrary
} from 'react-icons/si';
import { FaFlag } from 'react-icons/fa';
import { HiArrowPath, HiComputerDesktop, HiUsers, HiLightBulb, HiChartBar } from 'react-icons/hi2';

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-header">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          My technical expertise and tools I work with
        </p>
      </div>
      
      <div className="skills-container">
        <div className="skill-category">
          <h4>Frontend Development</h4>
          <div className="skills-list">
            <div className="skill-item">
              <div className="skill-icon">
                <SiReact size={24} />
              </div>
              <span className="skill-name">React.js</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <SiAngular size={24} />
              </div>
              <span className="skill-name">Angular</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <SiVuedotjs size={24} />
              </div>
              <span className="skill-name">Vue.js</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <SiHtml5 size={24} />
              </div>
              <span className="skill-name">HTML5 & CSS3</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <SiJavascript size={24} />
              </div>
              <span className="skill-name">JavaScript (ES6+)</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <SiBootstrap size={24} />
              </div>
              <span className="skill-name">Bootstrap</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h4>Backend & Database</h4>
          <div className="skills-list">
            <div className="skill-item">
              <div className="skill-icon">
                <SiPhp size={24} />
              </div>
              <span className="skill-name">PHP</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <SiMysql size={24} />
              </div>
              <span className="skill-name">MySQL</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <SiSqlite size={24} />
              </div>
              <span className="skill-name">SQLite</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <SiNodedotjs size={24} />
              </div>
              <span className="skill-name">Node.js</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <SiPython size={24} />
              </div>
              <span className="skill-name">Python</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h4>Tools & Technologies</h4>
          <div className="skills-list">
            <div className="skill-item">
              <div className="skill-icon">
                <SiGit size={24} />
              </div>
              <span className="skill-name">Git & GitHub</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <SiDocker size={24} />
              </div>
              <span className="skill-name">Docker</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <HiArrowPath size={24} />
              </div>
              <span className="skill-name">CI/CD</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <SiTestinglibrary size={24} />
              </div>
              <span className="skill-name">Unit Testing</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <SiJira size={24} />
              </div>
              <span className="skill-name">JIRA & Scrum</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <HiComputerDesktop size={24} />
              </div>
              <span className="skill-name">Chrome DevTools</span>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h4>Languages & Soft Skills</h4>
          <div className="skills-list">
            <div className="skill-item">
              <div className="skill-icon">
                <FaFlag size={24} />
              </div>
              <span className="skill-name">English (Fluent)</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <FaFlag size={24} />
              </div>
              <span className="skill-name">Hindi (Native)</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <FaFlag size={24} />
              </div>
              <span className="skill-name">Bengali (Native)</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <HiUsers size={24} />
              </div>
              <span className="skill-name">Team Collaboration</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <HiLightBulb size={24} />
              </div>
              <span className="skill-name">Problem Solving</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">
                <HiChartBar size={24} />
              </div>
              <span className="skill-name">Agile Methodology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}