import React from "react";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my latest work and technical achievements
        </p>
      </div>

      <div className="projects-grid">
        {/* AI Paragraph Summarizer */}
        <div className="project-card">
          <h3 className="project-title">AI Paragraph Summarizer</h3>
          <p className="project-description">
            Created an AI Paragraph Summarizer using PHP and MySQL with a 100%
            success rate. Increased client revenue by 30% and achieved 95% user
            satisfaction.
          </p>
          <div className="project-links">
            <button
              className="project-btn project-btn-repo"
              onClick={() =>
                window.open(
                  "https://github.com/Ark-Barua/AI-Paragraph-Summarizer",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <span>🔗</span>
              Repository
            </button>
          </div>
        </div>

        {/* Kangaroo Runner Game */}
        <div className="project-card">
          <h3 className="project-title">Kangaroo Runner Game</h3>
          <p className="project-description">
            Unity-based 2D endless runner using reusable prefabs and Rigidbody2D
            physics. Increased gameplay engagement by 50%.
          </p>
          <div className="project-links">
            <button
              className="project-btn project-btn-repo"
              onClick={() =>
                window.open(
                  "https://github.com/Ark-Barua/unity-web-game",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <span>🔗</span>
              Repository
            </button>
          </div>
        </div>

        {/* Mortgage Calculator */}
        <div className="project-card">
          <h3 className="project-title">Mortgage Calculator</h3>
          <p className="project-description">
            Created a responsive mortgage calculator site. Increased client
            revenue by 20% with 95% user satisfaction.
          </p>
          <div className="project-links">
            <button
              className="project-btn project-btn-repo"
              onClick={() =>
                window.open(
                  "https://github.com/Ark-Barua/mortgage-calculator",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <span>🔗</span>
              Repository
            </button>
            <button
              className="project-btn project-btn-demo"
              onClick={() =>
                window.open(
                  "https://ark-barua.github.io/Mortgage-Calculator/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <span>🚀</span>
              Live Demo
            </button>
          </div>
        </div>

        {/* FocusFlow Pomodoro App */}
        <div className="project-card">
          <h3 className="project-title">FocusFlow – Pomodoro Timer Web App</h3>
          <p className="project-description">
            A beautiful, responsive Pomodoro Timer with user registration, login,
            profile editing, dark/light mode, and session tracking — all powered
            by <strong>localStorage</strong>, no backend required.
          </p>
          <ul className="project-features">
            <li>🔐 User Registration & Login</li>
            <li>🕒 Customizable Focus Timer</li>
            <li>📅 Session History Tracking</li>
            <li>🧑‍💼 Editable Profile with Avatar</li>
            <li>🌗 Dark/Light Mode Toggle</li>
          </ul>
          <div className="project-links">
            <button
              className="project-btn project-btn-repo"
              onClick={() =>
                window.open(
                  "https://github.com/Ark-Barua/FocusFlow",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <span>🔗</span>
              Repository
            </button>
            <button
              className="project-btn project-btn-demo"
              onClick={() =>
                window.open(
                  "https://focusflow-flax.vercel.app",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <span>🚀</span>
              Live Demo
            </button>
          </div>
        </div>

        {/* Online HTML Editor */}
        <div className="project-card">
          <h3 className="project-title">Online HTML Editor</h3>
          <p className="project-description">
            A powerful real-time HTML/CSS/JS editor with live preview,
            file-saving, dark mode, CodeMirror syntax highlighting, and Bootstrap
            UI. Includes SweetAlert for beautiful popups and a responsive layout.
          </p>
          <ul className="project-features">
            <li>⚡ Real-time preview with SweetAlert</li>
            <li>💾 Save as HTML/CSS/JS files</li>
            <li>🌙 Dark Mode Toggle</li>
            <li>🧠 CodeMirror for syntax highlighting</li>
            <li>📱 Fully Responsive using Bootstrap</li>
          </ul>
          <div className="project-links">
            <button
              className="project-btn project-btn-repo"
              onClick={() =>
                window.open(
                  "https://github.com/Ark-Barua/Online-HTML-Editor",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <span>🔗</span>
              Repository
            </button>
            <button
              className="project-btn project-btn-demo"
              onClick={() =>
                window.open(
                  "https://ark-barua.github.io/Online-HTML-Editor",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <span>🚀</span>
              Live Demo
            </button>
          </div>
        </div>

        {/* Docker Task Manager */}
        <div className="project-card">
          <h3 className="project-title">Docker Task Manager</h3>
          <p className="project-description">
            A modern, responsive task manager app for Docker operations, built
            using React, Node.js, and Material-UI. Includes real-time updates,
            error handling, and secure REST API.
          </p>
          <ul className="project-features">
            <li>
              📋 Manage Docker tasks (Containers, Images, Networks, Volumes)
            </li>
            <li>⭐ Priority tags & completion tracking</li>
            <li>🧠 Built with React, Node.js, Material-UI</li>
            <li>🔒 Secured with Helmet, CORS, Rate Limiting</li>
            <li>🐳 Dockerized full-stack with Compose support</li>
          </ul>
          <div className="project-links">
            <button
              className="project-btn project-btn-repo"
              onClick={() =>
                window.open(
                  "https://github.com/Ark-Barua/Docker-Task-Manager",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <span>🔗</span>
              Repository
            </button>
          </div>
        </div>

        {/* E-commerce Delivery Analytics Dashboard */}
        <div className="project-card">
          <h3 className="project-title">E-commerce Delivery Analytics Dashboard</h3>
          <p className="project-description">
            A comprehensive dashboard built with Python, Dash, and Plotly to
            visualize and monitor e-commerce delivery performance in real-time.
            Offers advanced analytics, platform insights, and CSV-based dynamic
            data loading.
          </p>
          <ul className="project-features">
            <li>📊 Real-time delivery & performance metrics</li>
            <li>📁 Upload CSVs for instant visualizations</li>
            <li>📉 Correlation & trend analysis tools</li>
            <li>🧠 Built with Dash, Plotly, and Pandas</li>
            <li>⚙️ Bat scripts for easy setup and launch (Windows)</li>
          </ul>
          <div className="project-links">
            <button
              className="project-btn project-btn-repo"
              onClick={() =>
                window.open(
                  "https://github.com/Ark-Barua/Data-Science-Analysis-Dashboard",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <span>🔗</span>
              Repository
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
