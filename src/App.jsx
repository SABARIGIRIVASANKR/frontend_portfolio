
import React, { useEffect, useState } from "react";
import {
  Github, Linkedin, Mail, MapPin, ExternalLink, Download, Code2,
  Database, Cpu, GraduationCap, Award, BriefcaseBusiness, Menu, X, ArrowUpRight
} from "lucide-react";
import profile from "./assets/profile.png";
import "./styles.css";

const skills = {
  "Programming": ["Java", "C", "JavaScript"],
  "Frontend": ["HTML5", "CSS3", "JavaScript", "React.js"],
  "Backend": ["Java", "Spring Boot", "JDBC", "REST API"],
  "Database & Tools": ["MySQL", "Git", "GitHub", "VS Code"],
  "Core Concepts": ["DSA", "OOP", "Operating Systems", "Computer Networks", "Problem Solving"],
  "Embedded / IoT": ["Arduino", "ESP32", "ESP8266", "PCB Design"]
};

const projects = [
  {
    title: "Banking Management System",
    type: "Full Stack",
    desc: "Scalable banking application with secure authentication, account management and a user-friendly interface. Built using modular OOP design for maintainability.",
    stack: ["Java", "MySQL", "JDBC", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Student Management System",
    type: "Backend / Database",
    desc: "Student record management system with secure database connectivity, CRUD operations, role-based access control and clean OOP architecture.",
    stack: ["Java", "MySQL", "JDBC", "OOP"],
  },
  {
    title: "Smart Induction-Based Rubber Pyrolysis System",
    type: "IoT / Embedded",
    desc: "IoT-enabled monitoring system using Arduino, ESP32 and sensors for real-time monitoring, automated control and remote visualization.",
    stack: ["Arduino", "ESP32", "IoT", "Sensors"],
  },
  {
    title: "IoT Smart Door Lock",
    type: "IoT / Embedded",
    desc: "Wi-Fi enabled smart door lock using ESP8266 and servo motor with password-based authentication and real-time device control.",
    stack: ["ESP8266", "Wi-Fi", "Servo", "IoT"],
  },
];

const socials = {
  github: "https://github.com/SABARIGIRIVASANKR",
  linkedin: "https://www.linkedin.com/in/sabarigirivasan-k-r-284557198/",
  leetcode: "https://leetcode.com/u/sabarigirivasankr/",
  email: "mailto:krsabari08@gmail.com"
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const nav = ["about", "skills", "projects", "experience", "education", "contact"];

  return (
    <div className="app">
      <header className="nav-shell">
        <nav className="nav container">
          <a href="#home" className="brand">SKR<span>.</span></a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {nav.map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
                {item[0].toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button className="theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
              {dark ? "☀" : "☾"}
            </button>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X size={22}/> : <Menu size={22}/>}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">AVAILABLE FOR SOFTWARE DEVELOPER OPPORTUNITIES</div>
            <h1>Hi, I'm <span>Sabarigirivasan KR</span>.</h1>
            <h2>Software Developer focused on Java, backend systems and modern web applications.</h2>
            <p>
              ECE graduate with hands-on experience in Java, MySQL, Data Structures & Algorithms,
              Spring Boot, web technologies and IoT projects. I enjoy building reliable, maintainable
              solutions and solving algorithmic problems.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">View Projects <ArrowUpRight size={18}/></a>
              <a href="/public_resume.pdf" className="btn secondary" download>
                Download Resume <Download size={18}/>
              </a>
            </div>

            <div className="social-row">
              <a href={socials.github} target="_blank" rel="noreferrer"><Github size={20}/> GitHub</a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer"><Linkedin size={20}/> LinkedIn</a>
              <a href={socials.leetcode} target="_blank" rel="noreferrer"><Code2 size={20}/> LeetCode</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-ring">
              <img src={profile} alt="Sabarigirivasan KR" />
            </div>
            <div className="floating-card code-card">
              <span>250+</span>
              <small>LeetCode problems</small>
            </div>
            <div className="floating-card location-card">
              <MapPin size={18}/>
              <div><strong>Chennai</strong><small>Tamil Nadu, India</small></div>
            </div>
          </div>
        </section>

        <section id="about" className="section container">
          <div className="section-heading">
            <span>01</span>
            <h3>About Me</h3>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <p>
                I am a fresher Software Developer with a strong foundation in Java, MySQL,
                Data Structures & Algorithms and Object-Oriented Programming. I focus on
                understanding requirements, writing clean code and building secure,
                scalable and maintainable applications.
              </p>
              <p>
                My background in Electronics and Communication Engineering also gives me
                practical exposure to embedded systems, IoT, PCB design and hardware-software integration.
              </p>
            </div>
            <div className="stats">
              <div><strong>250+</strong><span>LeetCode Problems</span></div>
              <div><strong>4</strong><span>Highlighted Projects</span></div>
              <div><strong>7.5</strong><span>BE CGPA</span></div>
              <div><strong>93.5%</strong><span>Diploma Score</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section container">
          <div className="section-heading">
            <span>02</span>
            <h3>Technical Skills</h3>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items]) => (
              <div className="skill-card" key={group}>
                <h4>{group}</h4>
                <div className="chips">
                  {items.map(item => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-heading">
            <span>03</span>
            <h3>Featured Projects</h3>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-type">{project.type}</span>
                </div>
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <div className="chips">
                  {project.stack.map(item => <span key={item}>{item}</span>)}
                </div>
                <div className="project-link muted">
                  Project demo / repository can be added <ExternalLink size={16}/>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section container">
          <div className="section-heading">
            <span>04</span>
            <h3>Experience</h3>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon"><BriefcaseBusiness size={20}/></div>
              <div>
                <div className="timeline-head">
                  <div>
                    <h4>ENTUDIO PVT LTD</h4>
                    <p>RPA / Robotics Project Experience</p>
                  </div>
                  <span>Jun 2024 — Jul 2024</span>
                </div>
                <p>
                  Contributed to a Robotics Process Automation project by developing software modules,
                  implementing features, supporting testing, debugging and technical documentation.
                  Also gained hands-on exposure to PCB design in Fusion 360, schematic design, routing,
                  DRC, Gerber generation, 3D modeling and 3D printing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section container">
          <div className="section-heading">
            <span>05</span>
            <h3>Education & Recognition</h3>
          </div>
          <div className="edu-grid">
            <div className="edu-card">
              <GraduationCap size={26}/>
              <span>2022 — 2025</span>
              <h4>B.E. Electronics & Communication Engineering</h4>
              <p>Government College of Engineering, Tirunelveli</p>
              <strong>CGPA: 7.5</strong>
            </div>
            <div className="edu-card">
              <GraduationCap size={26}/>
              <span>2020 — 2022</span>
              <h4>Diploma in Electrical & Electronics Engineering</h4>
              <p>K.L.N Memorial Polytechnic College, Madurai</p>
              <strong>93.5%</strong>
            </div>
            <div className="edu-card highlight">
              <Award size={26}/>
              <span>2025</span>
              <h4>Top 50 Winner — Niral Thiruvizha 2.0 Hackathon</h4>
              <p>Tamil Nadu Skill Development Corporation (TNSDC), Government of Tamil Nadu</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section container">
          <div className="contact-card">
            <div>
              <span className="eyebrow">LET'S CONNECT</span>
              <h3>Looking for a fresher who loves building and learning?</h3>
              <p>I’m open to Software Developer, Java Developer and entry-level full-stack opportunities.</p>
            </div>
            <div className="contact-actions">
              <a className="btn primary" href={socials.email}><Mail size={18}/> Email Me</a>
              <a className="btn secondary" href={socials.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18}/> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div>
            <strong>Sabarigirivasan KR</strong>
            <span>Software Developer</span>
          </div>
          <p>Built with React + Vite</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
