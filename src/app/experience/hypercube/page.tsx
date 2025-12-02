import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HypercubePage() {
  const responsibilities = [
    "Developed robust backend features using NestJS, Node.js/Express with TypeScript",
    "Implemented database solutions using TypeORM and Sequelize for efficient data management",
    "Designed user interfaces using Figma and translated designs into functional React components",
    "Built responsive frontend applications using React and Tailwind CSS",
    "Collaborated with clients to understand requirements and deliver tailored solutions",
    "Implemented RESTful APIs for seamless frontend-backend communication",
    "Optimized application performance and implemented best practices for code quality",
  ];

  const technologies = [
    "NestJS",
    "Node.js",
    "Express",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "TypeORM",
    "Sequelize",
    "PostgreSQL",
    "Figma",
    "RESTful APIs",
    "Git",
  ];

  const projects = [
    {
      title: "Client Web Application Development",
      description: "Developed end-to-end web applications for multiple consultancy clients, handling everything from database design to frontend implementation. Built scalable backend services and intuitive user interfaces.",
    },
    {
      title: "API Development & Integration",
      description: "Created robust RESTful APIs using NestJS and Express, ensuring secure and efficient data flow between frontend and backend systems. Implemented authentication and authorization mechanisms.",
    },
    {
      title: "UI/UX Design Implementation",
      description: "Collaborated with design team to create user interfaces in Figma, then implemented pixel-perfect responsive designs using React and Tailwind CSS, ensuring optimal user experience across devices.",
    },
  ];

  const skills = [
    {
      category: "Backend Development",
      items: [
        "Building scalable REST APIs with NestJS",
        "Database design and optimization",
        "ORM implementation (TypeORM, Sequelize)",
        "Authentication and authorization",
        "Error handling and logging",
      ],
    },
    {
      category: "Frontend Development",
      items: [
        "Component-based architecture with React",
        "Responsive design with Tailwind CSS",
        "State management",
        "API integration",
        "UI/UX best practices",
      ],
    },
    {
      category: "Professional Skills",
      items: [
        "Client communication and requirement gathering",
        "Agile development methodology",
        "Code review and documentation",
        "Problem-solving and debugging",
        "Time management and meeting deadlines",
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        {/* Header Section */}
        <section className="bg-[var(--gh-canvas-subtle)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-[var(--gh-accent-fg)] hover:underline mb-8"
            >
              ← Back to Experience
            </Link>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-[var(--gh-canvas-default)] border border-[var(--gh-border-default)] rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-[var(--gh-success-fg)]">HC</span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-[var(--gh-fg-default)] mb-2">
                  Full Stack Developer
                </h1>
                <p className="text-xl text-[var(--gh-accent-fg)] mb-2">
                  Hypercube Labs
                </p>
                <p className="text-[var(--gh-fg-muted)]">Jan 2024 - Nov 2024 (Part-time)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-6">
            Overview
          </h2>
          <p className="text-lg text-[var(--gh-fg-muted)] leading-relaxed mb-8">
            As a Part-time Full Stack Developer at Hypercube Labs, I had the 
            opportunity to work directly with clients to deliver custom web solutions tailored to 
            their business needs. This role allowed me to gain hands-on experience with the complete 
            software development lifecycle, from initial client consultation to deployment and maintenance.
          </p>
          <p className="text-lg text-[var(--gh-fg-muted)] leading-relaxed">
            Working in a consultancy environment taught me the importance of clear communication, 
            meeting deadlines, and adapting to different project requirements. I developed expertise 
            in modern web technologies and learned how to balance technical excellence with client 
            satisfaction.
          </p>
        </section>

        {/* Key Responsibilities */}
        <section className="bg-[var(--gh-canvas-subtle)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
              Key Responsibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {responsibilities.map((responsibility, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 border border-[var(--gh-border-default)] rounded-lg bg-[var(--gh-canvas-default)]"
                >
                  <div className="flex-shrink-0 mt-1">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--gh-success-fg)] text-white text-sm">
                      ✓
                    </span>
                  </div>
                  <p className="text-[var(--gh-fg-muted)]">{responsibility}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
            Notable Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)]"
              >
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                  {project.title}
                </h3>
                <p className="text-[var(--gh-fg-muted)] leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Used */}
        <section className="bg-[var(--gh-canvas-subtle)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
              Technologies & Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[var(--gh-success-fg)] text-white rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Developed */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
            Skills Developed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]"
              >
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-[var(--gh-fg-muted)]">
                      <span className="text-[var(--gh-success-fg)]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Impact & Learnings */}
        <section className="bg-[var(--gh-canvas-subtle)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-6">
              Impact & Key Learnings
            </h2>
            <div className="space-y-6">
              <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-default)]">
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                  Client-Centric Development
                </h3>
                <p className="text-[var(--gh-fg-muted)]">
                  Learned to translate business requirements into technical solutions, working 
                  closely with clients to understand their needs and deliver applications that 
                  drive real business value. This experience enhanced my ability to communicate 
                  technical concepts to non-technical stakeholders.
                </p>
              </div>
              <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-default)]">
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                  Full Stack Proficiency
                </h3>
                <p className="text-[var(--gh-fg-muted)]">
                  Developed comprehensive skills across the entire web development stack, from 
                  database design and backend API development to frontend implementation and UI/UX 
                  considerations. This holistic understanding enables me to make better architectural 
                  decisions and debug issues across the entire application.
                </p>
              </div>
              <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-default)]">
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                  Professional Growth
                </h3>
                <p className="text-[var(--gh-fg-muted)]">
                  Gained invaluable experience in project management, time estimation, and working 
                  under deadlines. Learned to prioritize features, manage scope creep, and deliver 
                  high-quality code while balancing academic commitments.
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
