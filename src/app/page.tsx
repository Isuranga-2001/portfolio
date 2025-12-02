import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function Home() {
  const skills = {
    "Programming Languages": ["C#", "Python", "Java", "Go", "JavaScript", "TypeScript", "Ballerina"],
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
                Associate Software Engineer & Final Year IT Undergraduate at University of Moratuwa
              </p>
              <p className="text-lg text-[var(--gh-fg-muted)] mb-8 leading-relaxed">
                Passionate about Full Stack Development with expertise in Node.js, .NET, React, and Angular. 
                I build scalable web applications and contribute to open-source healthcare solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/experience"
                  className="px-6 py-3 bg-[var(--gh-accent-emphasis)] text-white rounded-lg font-medium hover:bg-[var(--gh-accent-fg)] transition-colors"
                >
                  View Experience
                </Link>
                <Link
                  href="/projects"
                  className="px-6 py-3 border border-[var(--gh-border-default)] text-[var(--gh-fg-default)] rounded-lg font-medium hover:bg-[var(--gh-canvas-subtle)] transition-colors"
                >
                  View Projects
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
                <div className="text-[var(--gh-fg-muted)]">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--gh-success-fg)] mb-2">7</div>
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
        <section id="education" className="bg-[var(--gh-canvas-subtle)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
              Education
            </h2>
            
            <div className="space-y-6 mb-8">
              {/* University of Moratuwa Card */}
              <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-default)] hover:border-[var(--gh-accent-emphasis)] transition-colors">
                <div className="text-sm text-[var(--gh-fg-muted)] mb-2">Aug 2022 - Aug 2026 (Expected)</div>
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-2">
                  BSc (Hons.) in Information Technology
                </h3>
                <p className="text-[var(--gh-fg-muted)] mb-3">University of Moratuwa, Sri Lanka</p>
                <p className="text-sm text-[var(--gh-fg-muted)]">CGPA: 3.91/4.00 • Dean's List in all 5 semesters</p>
              </div>

              {/* Shibaura Institute Card */}
              <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-default)] hover:border-[var(--gh-accent-emphasis)] transition-colors">
                <div className="text-sm text-[var(--gh-fg-muted)] mb-2">Sep 2025 - Oct 2025</div>
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-2">
                  Research Exchange Program
                </h3>
                <p className="text-[var(--gh-fg-muted)] mb-3">Shibaura Institute of Technology (Toyosu Campus), Tokyo, Japan</p>
                <p className="text-sm text-[var(--gh-fg-muted)]">Computer Vision • Machine Learning • Research Skills</p>
              </div>

              {/* St. Sylvester's Card */}
              <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-default)] hover:border-[var(--gh-accent-emphasis)] transition-colors">
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

