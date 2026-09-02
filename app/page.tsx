"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  FileText,
  Flag,
  GitBranch,
  ListChecks,
  Mail,
  Menu,
  MessageSquareText,
  Milestone,
  ShieldAlert,
  Target,
  UsersRound,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const valueCards = [
  {
    id: "A",
    icon: Target,
    title: "Turn ambiguity into scope",
    text: "Clarify the real outcome, define what matters now and turn a broad request into work a team can act on.",
    artifact: "Scope · priorities · success criteria",
  },
  {
    id: "B",
    icon: UsersRound,
    title: "Align people and ownership",
    text: "Create one shared view across business, operations and technical teams so decisions and next actions stay clear.",
    artifact: "Stakeholders · owners · decisions",
  },
  {
    id: "C",
    icon: GitBranch,
    title: "Keep delivery moving",
    text: "Make dependencies, risks and progress visible early enough to act — before they become missed commitments.",
    artifact: "Plan · risks · delivery rhythm",
  },
  {
    id: "D",
    icon: Zap,
    title: "Build a better system",
    text: "Use evidence from delivery to improve the workflow, not just complete the current task and repeat the same friction.",
    artifact: "KPIs · feedback · improvement",
  },
];

const operatingSteps = [
  {
    number: "01",
    icon: Flag,
    title: "Define the outcome",
    text: "What needs to change, for whom and how will we know it worked?",
    outputs: ["Problem brief", "Success criteria"],
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Build the plan",
    text: "Break the outcome into priorities, milestones, dependencies and realistic next actions.",
    outputs: ["Roadmap", "Delivery plan"],
  },
  {
    number: "03",
    icon: MessageSquareText,
    title: "Align the team",
    text: "Give stakeholders one source of truth for ownership, decisions and trade-offs.",
    outputs: ["Owners", "Decision log"],
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Drive delivery",
    text: "Maintain rhythm, surface blockers, follow through and keep communication useful.",
    outputs: ["Status updates", "Risk log"],
  },
  {
    number: "05",
    icon: Workflow,
    title: "Learn and improve",
    text: "Turn feedback and performance signals into a better process for the next cycle.",
    outputs: ["Review", "Process changes"],
  },
];

const tools = ["Jira", "Confluence", "Figma", "Slack", "Google Workspace", "Microsoft 365", "Canva", "Agile / Scrum"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compactNav, setCompactNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setCompactNav(window.scrollY > 16);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      document.documentElement.style.setProperty("--page-progress", `${progress}%`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll("[data-reveal]").forEach((item) => observer.observe(item));
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="portfolio-shell">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="page-progress" aria-hidden="true" />

      <header className={`topbar ${compactNav ? "compact" : ""}`}>
        <div className="container topbar-inner">
          <a href="#top" className="identity" aria-label="Noe Beridze, home">
            <span className="identity-mark">NB</span>
            <span><strong>Noe Beridze</strong><small>Project Manager</small></span>
          </a>

          <nav className="desktop-navigation" aria-label="Primary navigation">
            <a href="#value">Value</a>
            <a href="#projects">Projects</a>
            <a href="#method">Method</a>
            <a href="#background">Background</a>
          </nav>

          <div className="header-actions">
            <a className="header-contact" href="mailto:noe.beridze3@gmail.com">
              Contact <ArrowUpRight size={16} />
            </a>
            <button
              type="button"
              className="mobile-menu-button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        <nav className={`mobile-navigation ${menuOpen ? "open" : ""}`} aria-label="Mobile navigation">
          <a href="#value" onClick={() => setMenuOpen(false)}>Value</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#method" onClick={() => setMenuOpen(false)}>Method</a>
          <a href="#background" onClick={() => setMenuOpen(false)}>Background</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy" data-reveal>
              <div className="status-pill"><span /> Based in Tbilisi · Remote-friendly</div>
              <p className="section-code">01 / PROJECT MANAGER</p>
              <h1>I turn moving parts into <em>measurable progress.</em></h1>
              <p className="hero-summary">
                7+ years coordinating people, processes and cross-functional initiatives across enterprise operations and B2B SaaS product development.
              </p>
              <div className="hero-buttons">
                <a className="button button-dark" href="#projects">
                  View project record <ArrowDownRight size={17} />
                </a>
                <a
                  className="button button-line"
                  href="https://www.linkedin.com/in/noe-beridze/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ArrowUpRight size={17} />
                </a>
              </div>
            </div>

            <div className="delivery-board" data-reveal>
              <div className="board-header">
                <div>
                  <span className="board-kicker">DELIVERY BOARD</span>
                  <h2>Complex work → clear system</h2>
                </div>
                <span className="on-track"><i /> ON TRACK</span>
              </div>

              <div className="milestone-row">
                <div className="milestone done"><span>01</span><strong>Define</strong><small>DONE</small></div>
                <div className="milestone done"><span>02</span><strong>Align</strong><small>DONE</small></div>
                <div className="milestone active"><span>03</span><strong>Deliver</strong><small>ACTIVE</small></div>
                <div className="milestone"><span>04</span><strong>Improve</strong><small>NEXT</small></div>
              </div>

              <div className="timeline-board" aria-label="Illustrative project timeline">
                <div className="timeline-head"><span>WORKSTREAM</span><span>W1</span><span>W2</span><span>W3</span><span>W4</span></div>
                <div className="timeline-row"><strong>Discovery</strong><i className="bar bar-discovery" /></div>
                <div className="timeline-row"><strong>Scope</strong><i className="bar bar-scope" /></div>
                <div className="timeline-row"><strong>Delivery</strong><i className="bar bar-delivery" /></div>
                <div className="timeline-row"><strong>Feedback</strong><i className="bar bar-feedback" /></div>
              </div>

              <div className="board-footer">
                <div><span>SCOPE</span><strong>Clear</strong></div>
                <div><span>OWNERS</span><strong>Named</strong></div>
                <div><span>RISKS</span><strong>Visible</strong></div>
                <div><span>NEXT STEP</span><strong>Actionable</strong></div>
              </div>
            </div>
          </div>

          <div className="container evidence-strip" data-reveal>
            <div><strong>7+</strong><span>years of professional experience</span></div>
            <div><strong>300+</strong><span>customer interviews</span></div>
            <div><strong>50</strong><span>product demos</span></div>
            <div><strong>10</strong><span>pilot engagements</span></div>
            <div><strong>100+</strong><span>mentors in one program</span></div>
          </div>
        </section>

        <section className="section value-section" id="value">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="section-code">02 / WHAT I BRING</p>
                <h2>Projects move when clarity becomes a habit.</h2>
              </div>
              <p>I help companies create that clarity across the entire delivery cycle — from the first unclear request to the final review.</p>
            </div>

            <div className="value-grid">
              {valueCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article className="value-card" key={card.id} data-reveal>
                    <div className="value-card-header"><span>{card.id}</span><Icon size={22} /></div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <small>{card.artifact}</small>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading project-heading" data-reveal>
              <div>
                <p className="section-code">03 / SELECTED PROJECTS</p>
                <h2>Execution record.</h2>
              </div>
              <p>Two environments that show how I work: building a new product from zero and improving delivery inside a large operation.</p>
            </div>

            <article className="project-case legal-case" data-reveal>
              <div className="project-image">
                <img src="./legalstepy-project.webp" alt="Editorial illustration of LegalStepy moving from discovery through delivery and pilots" />
                <div className="image-label"><span>PROJECT 01</span><strong>0 → 1 product delivery</strong></div>
              </div>

              <div className="project-content">
                <div className="project-title-row">
                  <div className="project-icon"><FileText size={22} /></div>
                  <div><span>2025 — PRESENT</span><strong>LegalStepy</strong></div>
                  <small>CO-FOUNDER · COO</small>
                </div>
                <h3>Moving a Contract Lifecycle Management platform from discovery to pilots.</h3>
                <p className="project-lead">
                  The starting problem was fragmented contract work across email, documents and manual follow-ups. My role was to help turn that pain into a focused product and a delivery plan.
                </p>

                <div className="project-record">
                  <div>
                    <span>01 / DISCOVER</span>
                    <p>Led customer discovery and mapped the recurring workflow problems worth solving.</p>
                    <strong>300+ interviews</strong>
                  </div>
                  <div>
                    <span>02 / DEFINE</span>
                    <p>Shaped the value proposition, MVP scope, priorities and roadmap with the founding team.</p>
                    <strong>Clear product direction</strong>
                  </div>
                  <div>
                    <span>03 / DELIVER</span>
                    <p>Translated business needs into user stories and acceptance criteria for engineering.</p>
                    <strong>Cross-functional execution</strong>
                  </div>
                  <div>
                    <span>04 / VALIDATE</span>
                    <p>Coordinated demos, feedback loops and early pilot engagements.</p>
                    <strong>50 demos · 10 pilots</strong>
                  </div>
                </div>

                <a
                  className="project-link"
                  href="https://nberidzee.github.io/legalstepy-case-study/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View full LegalStepy case study <ArrowUpRight size={17} />
                </a>
              </div>
            </article>

            <article className="project-case evolution-case" data-reveal>
              <div className="project-content evolution-content">
                <div className="project-title-row">
                  <div className="project-icon"><BriefcaseBusiness size={22} /></div>
                  <div><span>2019 — PRESENT</span><strong>Evolution</strong></div>
                  <small>OPERATIONS · PEOPLE · PROJECTS</small>
                </div>
                <h3>Keeping people, performance and parallel initiatives aligned at scale.</h3>
                <p className="project-lead">
                  In a high-volume operational environment, the work cannot depend on memory and manual chasing. I create structure around performance, communication, ownership and follow-through.
                </p>

                <div className="role-line">
                  <span>Shufflers Team Manager</span>
                  <span>Shuffler Mentors Project Manager</span>
                  <span>Newcomers Team Leader</span>
                </div>

                <div className="evolution-impact">
                  <div><CheckCircle2 size={18} /><span><strong>Performance systems</strong>Translate KPIs and quality signals into coaching and corrective action.</span></div>
                  <div><UsersRound size={18} /><span><strong>Mentor program</strong>Coordinate a structured initiative supporting 100+ mentors.</span></div>
                  <div><ListChecks size={18} /><span><strong>Visible workflows</strong>Structure tasks, responsibilities and documentation in Jira and Confluence.</span></div>
                  <div><GitBranch size={18} /><span><strong>Parallel delivery</strong>Track dependencies and keep multiple cross-functional initiatives moving.</span></div>
                </div>
              </div>

              <div className="project-image evolution-image">
                <img src="./evolution-project.webp" alt="Editorial illustration of a project lead coordinating teams, mentors, KPIs and delivery" />
                <div className="image-label"><span>PROJECT 02</span><strong>Enterprise delivery</strong></div>
              </div>
            </article>
          </div>
        </section>

        <section className="section method-section" id="method">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="section-code">04 / OPERATING METHOD</p>
                <h2>How I run the work.</h2>
              </div>
              <p>A lightweight system that makes progress visible without turning the project into administration for its own sake.</p>
            </div>

            <div className="method-list">
              {operatingSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <article className="method-row" key={step.number} data-reveal>
                    <span className="method-number">{step.number}</span>
                    <div className="method-icon"><Icon size={21} /></div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                    <div className="method-outputs">{step.outputs.map((output) => <span key={output}>{output}</span>)}</div>
                  </article>
                );
              })}
            </div>

            <div className="method-principle" data-reveal>
              <ShieldAlert size={27} />
              <p>My rule:</p>
              <h3>If a risk, decision or dependency matters to delivery, it should be visible before it becomes urgent.</h3>
            </div>
          </div>
        </section>

        <section className="section background-section" id="background">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="section-code">05 / BACKGROUND</p>
                <h2>Business judgment. Operational depth. Legal precision.</h2>
              </div>
              <p>A multidisciplinary background that helps me understand commercial goals, ask precise questions and communicate across functions.</p>
            </div>

            <div className="background-layout">
              <div className="career-card" data-reveal>
                <div className="background-label"><BriefcaseBusiness size={18} /> EXPERIENCE</div>
                <article>
                  <span>2025 — PRESENT</span>
                  <div><h3>Co-Founder & COO</h3><p>LegalStepy</p><small>B2B SaaS · Product & delivery</small></div>
                </article>
                <article>
                  <span>2019 — PRESENT</span>
                  <div><h3>Team & Project Leadership</h3><p>Evolution</p><small>Operations · Performance · People programs</small></div>
                </article>
              </div>

              <div className="education-card" data-reveal>
                <div className="background-label"><Milestone size={18} /> EDUCATION</div>
                <article><span>2025 — PRESENT</span><div><h3>MBA</h3><p>Business Administration & Modern Technologies</p><small>Business and Technology University</small></div></article>
                <article><span>2021 — PRESENT</span><div><h3>LL.M</h3><p>Comparative Private & International Law</p><small>New Vision University</small></div></article>
                <article><span>2017 — 2021</span><div><h3>LL.B</h3><p>Law</p><small>Tbilisi State University</small></div></article>
                <article><span>2024</span><div><h3>IT Project Management</h3><p>Professional program</p><small>SkillWill</small></div></article>
              </div>
            </div>

            <div className="tools-row" data-reveal>
              <div><Code2 size={20} /><span>TOOLS & WAYS OF WORKING</span></div>
              <div className="tool-list">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-layout" data-reveal>
            <div>
              <p className="section-code">06 / NEXT PROJECT</p>
              <h2>Need a project manager who makes the work move?</h2>
            </div>
            <div className="contact-side">
              <p>I&apos;m open to project management opportunities where coordination, ownership and practical execution matter.</p>
              <div>
                <a className="button button-orange" href="mailto:noe.beridze3@gmail.com?subject=Project%20Management%20Opportunity">
                  <Mail size={18} /> Email me
                </a>
                <a
                  className="button button-contact-line"
                  href="https://www.linkedin.com/in/noe-beridze/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-layout">
          <div className="footer-identity"><span>NB</span><div><strong>Noe Beridze</strong><small>Project Manager · Tbilisi, Georgia</small></div></div>
          <p>Clarity · Ownership · Delivery</p>
          <div className="footer-links">
            <a href="mailto:noe.beridze3@gmail.com" aria-label="Email"><Mail size={18} /></a>
            <a href="https://www.linkedin.com/in/noe-beridze/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={18} /></a>
            <a href="https://github.com/nberidzee" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
