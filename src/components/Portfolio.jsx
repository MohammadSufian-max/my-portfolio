import React from "react";
import "./Portfolio.css";


export default function Portfolio() {
  return (
    <div>
      {/* -------- Hero Section -------- */}

      <section className="portfolio" id="home">
        <div className="image">
          <img src="public/MyPhoto.jpg" alt="" />
        </div>
        <div className="container">
          <h1 className="title">
            Hi, I’m <span className="highlight">Mohammad Sufiyan</span>
          </h1>
          <h2 className="subtitle">
            Fullstack Developer | MERN Stack | Problem Solver
          </h2>
          <p className="about">
            I build modern, responsive, and user-friendly web applications using
            the MERN stack. Passionate about coding, problem solving, and
            learning new technologies.
          </p>
          <div className="btn-group">
            <a href="#projects" className="btn">
              View My Work
            </a>
            <a
              href="/resume.pdf" 
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
            {/* Social Media Links */}
          <div className="social-links">
            <a
              href="https://github.com/MohammadSufian-max"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-sufiyan-3l9/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

        </div>
      </section>

      {/* -------- Skills Section -------- */}
      <section className="skills" id="skills">
  <div className="skills-container">
    {/* Section Title */}
    <h2 className="section-title">
      ⚡ <span>My Skills</span>
    </h2>
    <p className="section-subtitle">
      A blend of technical expertise and problem-solving abilities.
    </p>

    {/* Skills Grid */}
    <div className="skills-grid">
      <div className="skill-card">
        <h3>💻 JavaScript (ES6+)</h3>
        <p>
          Experienced in modern JavaScript features, DOM manipulation, and async programming.
        </p>
      </div>

      <div className="skill-card">
        <h3>⚛️ React.js & Node.js</h3>
        <p>
          Building fullstack apps with reusable components and server-side logic.
        </p>
      </div>

      <div className="skill-card">
        <h3>🚀 Express.js & MongoDB</h3>
        <p>
          Designing REST APIs and managing databases with Mongoose & NoSQL queries.
        </p>
      </div>

      <div className="skill-card">
        <h3>🎨 HTML5, CSS3</h3>
        <p>
          Creating responsive layouts, animations, and pixel-perfect UIs.
        </p>
      </div>

      <div className="skill-card">
        <h3>🌍 Git, GitHub, Deployment</h3>
        <p>
          Version control, collaboration, and deploying apps to cloud platforms.
        </p>
      </div>

      <div className="skill-card">
        <h3>🧠 C++ Problem Solving</h3>
        <p>
          Efficient at solving complex problems using Data Structures & Algorithms with C++ for optimized solutions.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* -------- Projects Section -------- */}
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="Project-title">🚀 My Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>🌐 Portfolio Website</h3>
              <p>
                A responsive personal portfolio built with{" "}
                <strong>React + Vite</strong>, showcasing my skills and
                projects.
              </p>
              <a href="#" className="project-link">
                🔗 View Project
              </a>
            </div>

            <div className="project-card">
              <h3>✅ Task Manager App</h3>
              <p>
                A fullstack <strong>MERN</strong> application to manage daily
                tasks with <strong>JWT authentication</strong> and CRUD
                features.
              </p>
              <a href="#" className="project-link">
                🔗 View Project
              </a>
            </div>

            <div className="project-card">
              <h3>🛒 E-commerce Store</h3>
              <p>
                An online shopping platform with{" "}
                <strong>cart, payment integration</strong>, and user-friendly UI
                for smooth checkout.
              </p>
              <a href="#" className="project-link">
                🔗 View Project
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* -------- Education Section -------- */}
     
<section className="education" id="education">
  <h2 className="section-title">
    🎓 <span className="highlight">My Education</span>
  </h2>
  <p className="section-subtitle">
    Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
  </p>

  <div className="education-container">
    {/* College */}
    <div className="education-card">
      <img src="public/education.jpg" alt="PSIT" className="edu-img" />
      <div className="edu-content">
        <h3>Bachelor Of Engineering In CS-AI&DS</h3>
        <p>Pranveer Singh Institute Of Technology | PSIT</p>
        <span className="edu-duration">2022-2026 | <b>Pursuing</b></span>
      </div>
    </div>

    {/* School */}
    <div className="education-card">
      <img src="public/school.avif" alt="School" className="edu-img" />
      <div className="edu-content">
        <h3>Intermediate & High School | Computer Science</h3>
        <p>Mount Carmel Intermediate College </p>
        <span className="edu-duration">2020-2022 | <b>Completed</b></span>
      </div>
    </div>
  </div>
</section>
{/*Contact me*/ }
<section className="contact" id="contact">
  <div className="contact-container">
    <h2 className="section-title">📬 Contact Me</h2>
    <p className="contact-subtitle">
      Feel free to reach out by filling the form below 👇
    </p>

    <form 
      action="https://formspree.io/f/yourFormID" 
      method="POST" 
      className="contact-form"
    >
      <input 
        type="text" 
        name="name" 
        placeholder="Your Name" 
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Your Email" 
        required 
      />
      <textarea 
        name="message" 
        rows="5" 
        placeholder="Your Message" 
        required
      ></textarea>
      <button type="submit" className="btn">
        Send Message
      </button>
    </form>
  </div>
</section>

{/*Footer section*/ }
<footer className="footer">
  <div className="footer-container">
    <p>© 2025 Mohammad Sufiyan | All Rights Reserved</p>
    <p>Made with ❤️ by Mohammad Sufiyan</p>
     
    <div className="footer-socials">
      <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">🐙</a>
      <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">🔗</a>
      <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">📷</a>
    </div>
  </div>
</footer>


    </div>
  );
}
