import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function Home() {
  const skills = {
    "Programming Languages": ["C#", "Python", "Java", "Go", "JavaScript", "TypeScript", "Ballerina", "C"],
    "Backend": ["ASP.NET Core", "Node.js", "NestJS", "Express", "Spring Boot", "FastAPI", "Flask"],
    "Frontend": ["React", "Next.js", "Angular", "Tailwind CSS", "React Native"],
    "Databases": ["MSSQL", "MySQL", "PostgreSQL", "Firebase"],
    "Cloud & DevOps": ["Azure", "AWS", "Docker", "GitHub Actions", "WSO2 Choreo"],
  };

  const highlights = [
    {
      title: "WSO2 LLC",
      description: "Intern Software Engineer contributing to open-source healthcare solutions",
      date: "Feb 2025 - July 2025",
      href: "/experience/wso2",
    },
    {
      title: "Hypercube Labs",
      description: "Full Stack Developer building robust web applications for clients",
      date: "Jan 2024 - Nov 2024",
      href: "/experience/hypercube",
    },
    {
      title: "Freelance App Developer",
      description: "Developed desktop applications for government and corporate clients",
      date: "Dec 2020 - Aug 2022",
      href: "/experience/freelance",
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-[var(--gh-fg-default)] mb-6 leading-tight">
                Hi, I'm <span className="text-[var(--gh-accent-fg)]">Isuranga Warnasooriya</span>
              </h1>
              <p className="text-xl text-[var(--gh-fg-muted)] mb-8 leading-relaxed">
                Associate Software Engineer & Final Year IT Undergraduate at University of Moratuwa, Sri Lanka
              </p>
              <p className="text-lg text-[var(--gh-fg-muted)] mb-8 leading-relaxed">
                Passionate about Full Stack Development with expertise in Node.js, .NET, React, and Angular. 
                I build scalable web applications and contribute to open-source healthcare solutions.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                <a
                  href="https://github.com/Isuranga-2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gh-fg-muted)] hover:text-[var(--gh-accent-fg)] transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/isuranga-warnasooriya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gh-fg-muted)] hover:text-[var(--gh-accent-fg)] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://medium.com/@isurangawarnasooriya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gh-fg-muted)] hover:text-[var(--gh-accent-fg)] transition-colors"
                  aria-label="Medium"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </a>
                <a
                  href="mailto:isurangawarnasooriya@outlook.com"
                  className="text-[var(--gh-fg-muted)] hover:text-[var(--gh-accent-fg)] transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/experience"
                  className="px-6 py-3 bg-[var(--gh-accent-emphasis)] text-white rounded-lg font-medium hover:bg-[var(--gh-accent-fg)] transition-colors"
                >
                  My Experiences
                </Link>
                <Link
                  href="/projects"
                  className="px-6 py-3 border border-[var(--gh-border-default)] text-[var(--gh-fg-default)] rounded-lg font-medium hover:bg-[var(--gh-canvas-subtle)] transition-colors"
                >
                  My Projects
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-[var(--gh-border-default)] text-[var(--gh-fg-default)] rounded-lg font-medium hover:bg-[var(--gh-canvas-subtle)] transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/profile.jpg"
                alt="Isuranga Warnasooriya"
                width={430}
                height={430}
                priority
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[var(--gh-canvas-subtle)] py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[var(--gh-accent-fg)] mb-2">7+</div>
                <div className="text-[var(--gh-fg-muted)]">Years of Coding</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--gh-success-fg)] mb-2">7+</div>
                <div className="text-[var(--gh-fg-muted)]">Programming Languages</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--gh-attention-fg)] mb-2">10+</div>
                <div className="text-[var(--gh-fg-muted)]">Major Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--gh-accent-fg)] mb-2">15+</div>
                <div className="text-[var(--gh-fg-muted)]">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contribution Graph */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[var(--gh-fg-default)]">Contribution Graph (GitHub)</h2>
              <p className="text-[var(--gh-fg-muted)]">Dark theme chart directly from ghchart</p>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-[var(--gh-attention-subtle)] text-[var(--gh-attention-fg)] font-medium self-start sm:self-center">Live</span>
          </div>
          <div className="mt-6 overflow-hidden rounded-md bg-[#0d1117]">
            <img
              src="https://ghchart.rshah.org/4fb6f9/Isuranga-2001"
              alt="GitHub contribution graph for Isuranga-2001"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]"
              >
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Stats Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[var(--gh-fg-default)]">GitHub Pulse</h2>
              <p className="text-[var(--gh-fg-muted)]">Live widgets from statsforgit.com</p>
            </div>
            <a
              href="https://www.statsforgit.com/Isuranga-2001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--gh-accent-fg)] hover:text-[var(--gh-accent-emphasis)] font-medium transition-colors"
            >
              View on statsforgit
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11 3a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 11-2 0V5.414l-6.293 6.293a1 1 0 01-1.414-1.414L14.586 4H12a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>

          <div className="mt-8 space-y-6">
            <div className="border border-[var(--gh-border-default)] rounded-lg bg-[var(--gh-canvas-subtle)] p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-[var(--gh-fg-default)]">GitHub Stats</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--gh-attention-subtle)] text-[var(--gh-attention-fg)] font-medium">Live</span>
              </div>
              <div className="overflow-hidden rounded-md border border-[var(--gh-border-default)] bg-[var(--gh-canvas-default)]">
                <img
                  src="https://greptile-stats.vercel.app/api/widget/Isuranga-2001/private-stats"
                  alt="GitHub stats for Isuranga-2001 from statsforgit"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="border border-[var(--gh-border-default)] rounded-lg bg-[var(--gh-canvas-subtle)] p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-[var(--gh-fg-default)]">Contributions</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--gh-attention-subtle)] text-[var(--gh-attention-fg)] font-medium">Live</span>
              </div>
              <div className="overflow-hidden rounded-md border border-[var(--gh-border-default)] bg-[var(--gh-canvas-default)]">
                <img
                  src="https://greptile-stats.vercel.app/api/widget/Isuranga-2001/contributions"
                  alt="GitHub contributions chart for Isuranga-2001 from statsforgit"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
            Career Highlights
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-[var(--gh-border-default)]"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {highlights.map((highlight, index) => (
                <div key={highlight.title} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[var(--gh-accent-emphasis)] rounded-full border-4 border-[var(--gh-canvas-default)] z-10"></div>
                  
                  {/* Content */}
                  <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <Link href={highlight.href} className="block group">
                      <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-accent-emphasis)] transition-colors">
                        <div className="text-sm text-[var(--gh-fg-muted)] mb-2">{highlight.date}</div>
                        <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3 group-hover:text-[var(--gh-accent-fg)] transition-colors">
                          {highlight.title}
                        </h3>
                        <p className="text-[var(--gh-fg-muted)]">{highlight.description}</p>
                      </div>
                    </Link>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div>
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
              Education
            </h2>
            
            <div className="space-y-6 mb-8">
              {/* University of Moratuwa Card */}
              <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-accent-emphasis)] transition-colors">
                <div className="text-sm text-[var(--gh-fg-muted)] mb-2">Aug 2022 - Aug 2026 (Expected)</div>
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-2">
                  BSc (Hons.) in Information Technology
                </h3>
                <p className="text-[var(--gh-fg-muted)] mb-3">University of Moratuwa, Sri Lanka</p>
                <p className="text-sm text-[var(--gh-fg-muted)]">CGPA: 3.91/4.00 • Dean's List in all 5 semesters</p>
              </div>

              {/* Shibaura Institute Card */}
              <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-accent-emphasis)] transition-colors">
                <div className="text-sm text-[var(--gh-fg-muted)] mb-2">Sep 2025 - Oct 2025</div>
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-2">
                  Research Exchange Program
                </h3>
                <p className="text-[var(--gh-fg-muted)] mb-3">Shibaura Institute of Technology (Toyosu Campus), Tokyo, Japan</p>
                <p className="text-sm text-[var(--gh-fg-muted)]">Computer Vision • Machine Learning • Research Skills</p>
              </div>

              {/* St. Sylvester's Card */}
              <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-accent-emphasis)] transition-colors">
                <div className="text-sm text-[var(--gh-fg-muted)] mb-2">Jan 2007 - Aug 2020</div>
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-2">
                  Primary/Secondary Education
                </h3>
                <p className="text-[var(--gh-fg-muted)] mb-3">St. Sylvester's College, Kandy</p>
                <p className="text-sm text-[var(--gh-fg-muted)]">G.C.E. A/L Z-Score: 1.9762 • ICT Society President (2019/2020)</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/education"
                className="inline-flex items-center gap-2 text-[var(--gh-accent-fg)] hover:text-[var(--gh-accent-emphasis)] font-medium transition-colors"
              >
                View Full Education Details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Competition Achievements Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
            Competition Achievements
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 border border-[var(--gh-border-default)] rounded-lg bg-[var(--gh-canvas-subtle)]">
              <span className="text-3xl">🏆</span>
              <div>
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-2">
                  Champion - Intellicon 2.0 (2024) & Intellicon 1.0 (2022)
                </h3>
                <p className="text-[var(--gh-fg-muted)]">
                  Inter-University AI/ML Ideathon by AIESEC SLIIT
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 border border-[var(--gh-border-default)] rounded-lg bg-[var(--gh-canvas-subtle)]">
              <span className="text-3xl">🥉</span>
              <div>
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-2">
                  4th Place - CodeRush 2023
                </h3>
                <p className="text-[var(--gh-fg-muted)]">
                  Intra-Faculty Hackathon, University of Moratuwa
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 border border-[var(--gh-border-default)] rounded-lg bg-[var(--gh-canvas-subtle)]">
              <span className="text-3xl">🎯</span>
              <div>
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-2">
                  Finalist - NetCom 2023 & CodeFest 2023
                </h3>
                <p className="text-[var(--gh-fg-muted)]">
                  Networking Competition & Hackathon
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

