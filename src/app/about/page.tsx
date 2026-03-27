import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const skills = {
    "Programming Languages": ["C#", "Python", "Java", "Go", "JavaScript", "TypeScript", "Ballerina", "C"],
    Backend: ["ASP.NET Core", "Node.js", "NestJS", "Express", "Spring Boot", "FastAPI", "Flask"],
    Frontend: ["React", "Next.js", "Angular", "Tailwind CSS", "React Native"],
    Databases: ["MSSQL", "MySQL", "PostgreSQL", "Firebase"],
    "Cloud & DevOps": ["Azure", "AWS", "Docker", "GitHub Actions", "WSO2 Choreo"],
  };

  const certificates = [
    {
      title: "Research Exchange Program 2025",
      issuer: "Shibaura Institute of Technology, Tokyo, Japan",
      year: "2025",
      href: "https://1drv.ms/b/c/41b2c25f92a0ea09/ETrCvhRC5YZGoTFu1xiJg4oBIdmC8JEZlSOFzsHfjXAa0A?e=5NUkR2",
      projectHref: "/education",
    },
    {
      title: "Project Based Learning 2025",
      issuer: "Shibaura Institute of Technology, Tokyo, Japan",
      year: "2025",
      href: "https://1drv.ms/b/c/41b2c25f92a0ea09/ETrCvhRC5YZGoTFu1xiJg4oBIdmC8JEZlSOFzsHfjXAa0A?e=5NUkR2",
      projectHref: "/education",
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      year: "2024",
      href: "https://www.coursera.org/account/accomplishments/verify/T6C4N5KXCJJW",
    },
    {
      title: "Building Services Using ASP.NET",
      issuer: "Coursera",
      year: "2024",
      href: "https://www.coursera.org/account/accomplishments/verify/QNKATGKBAM7B",
    },
    {
      title: "Mathematics for Machine Learning: Linear Algebra",
      issuer: "Imperial College London",
      year: "2023",
      href: "https://www.coursera.org/account/accomplishments/verify/6PE8D66BBXSG",
    },
    {
      title: "Microsoft Azure Machine Learning",
      issuer: "Microsoft",
      year: "2023",
      href: "https://www.coursera.org/account/accomplishments/verify/NGFXNCNZSLZ7",
    },
    {
      title: "Hands-on Introduction to Linux Commands and Shell Scripting",
      issuer: "IBM",
      year: "2023",
      href: "https://www.coursera.org/account/accomplishments/verify/JGBH97YPUCEU",
    },
    {
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      year: "2022",
      href: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
    },
    {
      title: "Certificate in Software Engineering",
      issuer: "NIBM",
      year: "2018",
      href: "https://www.linkedin.com/in/isuranga-warnasooriya-588244187/details/certifications/",
    },
    {
      title: "Certificate in English Language",
      issuer: "NIBM",
      year: "2018",
      href: "https://www.linkedin.com/in/isuranga-warnasooriya-588244187/details/certifications/",
    },
  ];

  const awards = [
    {
      title: "Island Finalist - Imagine Cup 2024",
      event: "Microsoft Competition",
      year: "2024",
    },
    {
      title: "Champion - Intellicon 2.0",
      event: "Inter-University AI/ML Ideathon by AIESEC SLIIT",
      year: "2024",
    },
    {
      title: "Champion - Intellicon 1.0",
      event: "Inter-University AI/ML Ideathon by AIESEC SLIIT",
      year: "2022",
    },
  ];

  const highlights = [
    {
      title: "Visiting Research Scholar",
      subtitle: "Shibaura Institute of Technology, Japan",
      description: "Conducted research on Sign Language Detection using Leap Motion Controllers and Computer Vision.",
      date: "Sep 2025 - Oct 2025",
      href: "/education",
      icon: "globe",
    },
    {
      title: "Intern Software Engineer",
      subtitle: "WSO2",
      description:
        "Contributed to the Open Healthcare repository, implementing FHIR standards and enhancing interoperability for global healthcare systems.",
      date: "Feb 2025 - July 2025",
      href: "/experience/wso2",
      icon: "briefcase",
    },
    {
      title: "Full Stack Developer (Part-time)",
      subtitle: "Hypercube Labs",
      description: "Full Stack Developer building robust web applications for clients.",
      date: "Jan 2024 - Nov 2024",
      href: "/experience/hypercube",
      icon: "code",
    },
    {
      title: "Hackathon Champion",
      subtitle: "Microsoft & AIESEC",
      description: "Champion of Intellicon 2.0 (AI/ML Ideathon) and Island Finalist in Microsoft Imagine Cup 2024.",
      date: "2024",
      href: "/experience",
      icon: "trophy",
    },
    {
      title: "Freelance App Developer",
      subtitle: "Self-Employed",
      description: "Developed desktop applications for government and corporate clients.",
      date: "Dec 2020 - Aug 2022",
      href: "/experience/freelance",
      icon: "laptop",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--gh-fg-default)] mb-4">About Me</h1>
          <div className="max-w-4xl space-y-5 text-lg text-[var(--gh-fg-muted)] leading-relaxed">
            <p>
              Hello, I am Isuranga Warnasooriya, a versatile Full-Stack Developer and final-year Information Technology
              undergraduate at the University of Moratuwa. I specialize in bridging technical innovation with
              practical, user-friendly solutions, with a strong focus on scalable systems and IoT solutions.
            </p>
            <p>
              My technical journey spans from developing open-source healthcare solutions as an Intern Software
              Engineer at WSO2, utilizing Ballerina and Java, to building administration management systems as a Full
              Stack Developer at Hypercube Labs. I am highly skilled in Node.js, NestJS, ASP.NET Core, and React.
            </p>
            <p>
              Beyond traditional software engineering, I am deeply passionate about AI, deep learning, and sensor
              fusion. Recently, I had the opportunity to serve as a Visiting Research Scholar at the Shibaura
              Institute of Technology in Tokyo, Japan. This led to presenting my research project, "Hybrid
              Sensor-Fusion Approaches for ASL Recognition," at the ICIPROoB2026 conference, where I was honored to
              receive a student paper award.
            </p>
            <p>
              Whether I am engineering a FHIR Terminology Service or proposing Cross-Modal Attention architectures for
              deep learning, I thrive on solving complex problems and continuously pushing the boundaries of
              technology.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 pt-0">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]"
              >
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-4">{category}</h3>
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

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">Career Highlights</h2>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-[var(--gh-border-default)]"></div>
            <div className="space-y-12">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 bg-[var(--gh-accent-emphasis)] rounded-full border-4 border-[var(--gh-canvas-default)] z-10 flex items-center justify-center">
                    {highlight.icon === "briefcase" && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                    {highlight.icon === "trophy" && (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 15c-1.5 0-2.75-1-3.25-2.5H5c0 2.5 2.5 4.5 5 5.5v3H8v2h8v-2h-2v-3c2.5-1 5-3 5-5.5h-3.75c-.5 1.5-1.75 2.5-3.25 2.5zM5 5h2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2h2c1.1 0 2 .9 2 2v2c0 1.54-.73 2.91-1.86 3.79A4.997 4.997 0 0117 12.5h-1c0 1.93-1.57 3.5-3.5 3.5h-1c-1.93 0-3.5-1.57-3.5-3.5H7a4.997 4.997 0 01-2.14-.71C3.73 10.91 3 9.54 3 8V7c0-1.1.9-2 2-2zm0 2v1c0 .83.4 1.57 1.02 2.03.37-.91.92-1.72 1.62-2.38-.22-.36-.44-.71-.64-1.07V5H5v2zm14-2v1.58c-.2.36-.42.71-.64 1.07.7.66 1.25 1.47 1.62 2.38A2.49 2.49 0 0021 8V7h-2z" />
                      </svg>
                    )}
                    {highlight.icon === "globe" && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                    {highlight.icon === "code" && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )}
                    {highlight.icon === "laptop" && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </div>

                  <div className={`flex-1 pl-14 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <Link href={highlight.href} className="block group">
                      <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-accent-emphasis)] transition-colors">
                        <div className="text-sm text-[var(--gh-fg-muted)] mb-2">{highlight.date}</div>
                        <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-1 group-hover:text-[var(--gh-accent-fg)] transition-colors">
                          {highlight.title}
                        </h3>
                        <p className="text-sm text-[var(--gh-accent-fg)] mb-3">{highlight.subtitle}</p>
                        <p className="text-[var(--gh-fg-muted)]">{highlight.description}</p>
                      </div>
                    </Link>
                  </div>

                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div>
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">Education</h2>

            <div className="space-y-6 mb-8">
              <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-accent-emphasis)] transition-colors">
                <div className="text-sm text-[var(--gh-fg-muted)] mb-2">Aug 2022 - Aug 2026 (Expected)</div>
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-2">BSc (Hons.) in Information Technology</h3>
                <p className="text-[var(--gh-fg-muted)] mb-3">University of Moratuwa, Sri Lanka</p>
                <p className="text-sm text-[var(--gh-fg-muted)]">CGPA: 3.91/4.00 • Dean's List in all 5 semesters</p>
              </div>

              <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-accent-emphasis)] transition-colors">
                <div className="text-sm text-[var(--gh-fg-muted)] mb-2">Sep 2025 - Oct 2025</div>
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-2">Research Exchange Program</h3>
                <p className="text-[var(--gh-fg-muted)] mb-3">Shibaura Institute of Technology (Toyosu Campus), Tokyo, Japan</p>
                <p className="text-sm text-[var(--gh-fg-muted)]">Computer Vision • Machine Learning • Research Skills</p>
              </div>

              <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-accent-emphasis)] transition-colors">
                <div className="text-sm text-[var(--gh-fg-muted)] mb-2">Jan 2007 - Aug 2020</div>
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-2">Primary/Secondary Education</h3>
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
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">Achievements & Certifications</h2>

          <div>
            <h3 className="text-2xl font-semibold text-[var(--gh-fg-default)] mb-6">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-start gap-4 p-6 border border-[var(--gh-border-default)] rounded-lg bg-[var(--gh-canvas-subtle)]"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--gh-accent-emphasis)] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-1">{cert.title}</h4>
                    <p className="text-sm text-[var(--gh-fg-muted)] mb-1">{cert.issuer}</p>
                    <p className="text-sm text-[var(--gh-fg-muted)] mb-3">{cert.year}</p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={cert.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-[var(--gh-accent-fg)] hover:text-[var(--gh-accent-emphasis)] font-medium transition-colors"
                      >
                        View Certificate
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M11 3a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 11-2 0V5.414l-6.293 6.293a1 1 0 01-1.414-1.414L14.586 4H12a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                      {cert.projectHref && (
                        <Link
                          href={cert.projectHref}
                          className="inline-flex items-center gap-1 text-sm text-[var(--gh-accent-fg)] hover:text-[var(--gh-accent-emphasis)] font-medium transition-colors"
                        >
                          View Project
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 pt-0">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">Honors & Awards</h2>
          <div className="space-y-6">
            {awards.map((award) => (
              <div
                key={award.title}
                className="flex items-start gap-4 p-6 border border-[var(--gh-border-default)] rounded-lg bg-[var(--gh-canvas-subtle)]"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-[var(--gh-attention-fg)] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 15c-1.5 0-2.75-1-3.25-2.5H5c0 2.5 2.5 4.5 5 5.5v3H8v2h8v-2h-2v-3c2.5-1 5-3 5-5.5h-3.75c-.5 1.5-1.75 2.5-3.25 2.5zM5 5h2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2h2c1.1 0 2 .9 2 2v2c0 1.54-.73 2.91-1.86 3.79A4.997 4.997 0 0117 12.5h-1c0 1.93-1.57 3.5-3.5 3.5h-1c-1.93 0-3.5-1.57-3.5-3.5H7a4.997 4.997 0 01-2.14-.71C3.73 10.91 3 9.54 3 8V7c0-1.1.9-2 2-2zm0 2v1c0 .83.4 1.57 1.02 2.03.37-.91.92-1.72 1.62-2.38-.22-.36-.44-.71-.64-1.07V5H5v2zm14-2v1.58c-.2.36-.42.71-.64 1.07.7.66 1.25 1.47 1.62 2.38A2.49 2.49 0 0021 8V7h-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-1">{award.title}</h4>
                  <p className="text-sm text-[var(--gh-fg-muted)] mb-1">{award.event}</p>
                  <p className="text-sm text-[var(--gh-fg-muted)]">{award.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
