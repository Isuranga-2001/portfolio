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
      title: "Hypercube",
      description: "Full Stack Developer building robust web applications for clients",
      date: "Jan 2024 - Nov 2024",
      href: "/experience/hypercube",
    },
    {
      title: "Champion - Intellicon 2.0",
      description: "Inter-University AI/ML Ideathon by AIESEC SLIIT",
      date: "2024",
    },
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
              <div className="relative w-96 h-96 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Isuranga Warnasooriya"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight) => (
              <Card
                key={highlight.title}
                title={highlight.title}
                description={highlight.description}
                date={highlight.date}
                href={highlight.href}
              />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-[var(--gh-canvas-subtle)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
              Education
            </h2>
            <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-default)]">
              <h3 className="text-2xl font-semibold text-[var(--gh-fg-default)] mb-2">
                BSc (Hons.) in Information Technology
              </h3>
              <p className="text-[var(--gh-accent-fg)] mb-4">
                University of Moratuwa, Faculty of Information Technology
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--gh-fg-muted)]">
                <div>
                  <p className="font-medium text-[var(--gh-fg-default)]">Performance</p>
                  <p>CGPA: 3.91/4.00 (Up to 5th Semester)</p>
                </div>
                <div>
                  <p className="font-medium text-[var(--gh-fg-default)]">Duration</p>
                  <p>August 2022 - August 2026 (Expected)</p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-medium text-[var(--gh-fg-default)] mb-2">Honors</p>
                  <p>Dean's List in all 5 semesters (GPAs: 3.89, 3.87, 3.95, 3.96, 3.90)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

