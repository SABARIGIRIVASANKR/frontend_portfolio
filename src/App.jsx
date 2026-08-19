
import React, { useEffect, useState } from "react";
import {
  Github, Linkedin, Mail, MapPin, ExternalLink, Download, Code2,
  GraduationCap, Award, BriefcaseBusiness, Menu, X, ArrowUpRight,
  Boxes, Layers3, Network, ServerCog, LockKeyhole, RefreshCw
} from "lucide-react";
import profile from "./assets/profile.png";
import "./styles.css";

const skills = {
  "Programming": ["Java", "C", "JavaScript"],
  "Frontend": ["HTML5", "CSS3", "JavaScript", "React.js"],
  "Backend": ["Java", "Spring Boot", "JDBC", "REST APIs"],
  "Database & Tools": ["MySQL", "SQL", "Git", "GitHub", "VS Code"],
  "CS Foundations": ["DSA", "OOP", "Operating Systems", "Computer Networks", "Problem Solving"],
  "Design & Architecture": ["LLD", "HLD", "System Design", "Design Patterns", "Scalability Basics"],
  "Embedded / IoT": ["Arduino", "ESP32", "ESP8266", "PCB Design"]
};

const designFoundations = [
  {
    icon: Layers3,
    title: "Low-Level Design (LLD)",
    text: "Practising requirement breakdown, class and interface design, SOLID principles, design patterns and clean, testable object-oriented code.",
    tags: ["SOLID", "UML", "Design Patterns", "Clean Code"]
  },
  {
    icon: Boxes,
    title: "High-Level Design (HLD)",
    text: "Learning how services, APIs, databases and external systems fit together, with clear boundaries and practical architecture trade-offs.",
    tags: ["Components", "API Design", "Data Flow", "Trade-offs"]
  },
  {
    icon: Network,
    title: "Scalable System Design",
    text: "Building foundations in horizontal scaling, load balancing, caching, database indexing, replication, queues and observability.",
    tags: ["Caching", "Load Balancing", "Queues", "Observability"]
  }
];

const projects = [
  {
    title: "Banking Management System",
    type: "Full Stack",
    desc: "Full-stack banking application with authentication, account workflows and a responsive interface. Structured with layered, modular OOP design; future scale considerations include indexed queries, caching and stateless API services.",
    stack: ["Java", "MySQL", "JDBC", "REST", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Student Management System",
    type: "Backend / Database",
    desc: "Student record platform with secure database connectivity, CRUD workflows and role-based access. Uses separation of concerns and a clean OOP model to keep features maintainable and extensible.",
    stack: ["Java", "MySQL", "JDBC", "OOP", "RBAC"],
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

const createAccessCode = () => {
  const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 4 }, () => characters[Math.floor(Math.random() * characters.length)]).join("");
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [accessCode, setAccessCode] = useState(createAccessCode);
  const [enteredCode, setEnteredCode] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [accessError, setAccessError] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const unlockPortfolio = (event) => {
    event.preventDefault();
    if (enteredCode.trim().toUpperCase() === accessCode) {
      setAccessGranted(true);
      setAccessError("");
      return;
    }
    setAccessError("The code does not match. Please try again.");
  };

  const refreshAccessCode = () => {
    setAccessCode(createAccessCode());
    setEnteredCode("");
    setAccessError("");
  };

  if (!accessGranted) {
    return (
      <main className="access-page">
        <section className="access-card" aria-labelledby="access-title">
          <div className="access-icon"><LockKeyhole size={26} /></div>
          <span className="eyebrow">PORTFOLIO ACCESS</span>
          <h1 id="access-title">Enter the code to continue</h1>
          <p>Type the four-character code shown below to view Sabarigirivasan’s portfolio.</p>
          <div className="access-code-row">
            <strong className="access-code" aria-label={`Access code ${accessCode}`}>{accessCode}</strong>
            <button type="button" className="refresh-code" onClick={refreshAccessCode} aria-label="Generate a new code">
              <RefreshCw size={18} />
            </button>
          </div>
          <form onSubmit={unlockPortfolio}>
            <label htmlFor="access-code-input">Four-character code</label>
            <input
              id="access-code-input"
              value={enteredCode}
              onChange={(event) => {
                setEnteredCode(event.target.value.toUpperCase().slice(0, 4));
                setAccessError("");
              }}
              autoComplete="off"
              autoCapitalize="characters"
              maxLength={4}
              placeholder="Enter code"
              aria-describedby={accessError ? "access-error" : undefined}
              autoFocus
            />
            {accessError && <span id="access-error" className="access-error" role="alert">{accessError}</span>}
            <button className="btn primary access-submit" type="submit" disabled={enteredCode.length !== 4}>
              View Portfolio <ArrowUpRight size={18} />
            </button>
          </form>
        </section>
      </main>
    );
  }

  const nav = ["about", "skills", "projects", "experience", "education", "contact"];

  return (
    <div className="app">
      <header className="nav-shell">
        <nav className="nav container">
          <a href="#home" className="brand" aria-label="Sabarigirivasan KR — Home">
            <span className="brand-avatar"><img src={profile} alt="" /></span>
            <span className="brand-name">SKR<span>.</span></span>
          </a>

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
            <h2>Aspiring Full-Stack Developer building reliable Java backends and modern web experiences.</h2>
            <p>
              ECE graduate strengthening production-ready full-stack skills across Java, Spring Boot,
              React, MySQL and REST APIs. I recently began focused learning in LLD, HLD and system design
              to build software that stays clean, maintainable and ready to scale.
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
            <div className="profile-meta">
              <div className="floating-card code-card">
                <span>250+</span>
                <small>LeetCode problems</small>
              </div>
              <div className="floating-card location-card">
                <MapPin size={18}/>
                <div><strong>Chennai</strong><small>Tamil Nadu, India</small></div>
              </div>
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
                I am an aspiring Full-Stack Developer with a strong foundation in Java, MySQL,
                Data Structures & Algorithms and Object-Oriented Programming. I turn requirements
                into responsive interfaces, clear APIs and dependable data flows while improving
                my Spring Boot and React skills toward a professional, production-ready level.
              </p>
              <p>
                Alongside hands-on projects, I am actively learning LLD, HLD and scalable system design.
                My ECE background also gives me practical exposure to embedded systems, IoT, PCB design
                and hardware-software integration.
              </p>
              <p>
                I am currently seeking an entry-level development role where I can contribute with Java,
                Spring Boot, React and SQL, learn from experienced engineers, and grow into a full-stack
                developer who can take ownership from interface design through backend architecture.
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

        <section id="system-design" className="section container">
          <div className="section-heading">
            <span>03</span>
            <div>
              <h3>System Design Foundations</h3>
              <p className="section-intro">Recently added to my learning roadmap and now being applied to project decisions.</p>
            </div>
          </div>
          <div className="design-grid">
            {designFoundations.map(({ icon: Icon, title, text, tags }) => (
              <article className="design-card" key={title}>
                <div className="design-icon"><Icon size={22} /></div>
                <h4>{title}</h4>
                <p>{text}</p>
                <div className="chips">
                  {tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
          <div className="scale-path">
            <ServerCog size={22} />
            <div>
              <strong>How I think about scale</strong>
              <p>Start with a clear modular design, measure the bottleneck, optimize database access, add caching where it helps, keep services stateless for horizontal scaling, and introduce queues for slow asynchronous work.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-heading">
            <span>04</span>
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
            <span>05</span>
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
            <span>06</span>
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
              <p>I’m open to Full-Stack Developer, Java Developer and Software Developer opportunities.</p>
              <a className="email-link" href={socials.email}>krsabari08@gmail.com</a>
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
            <span>Aspiring Full-Stack Developer</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
