"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";

export default function FreelancePage() {
  const responsibilities = [
    "Developed custom desktop applications for government and corporate clients",
    "Transitioned manual processes to digital systems, improving efficiency and data accuracy",
    "Designed and implemented database solutions using Microsoft SQL Server",
    "Built user-friendly Windows Form applications with .NET Framework",
    "Gathered requirements from clients and delivered tailored solutions",
    "Provided technical support and training for end users",
    "Managed complete project lifecycle from planning to deployment",
  ];

  const technologies = [
    ".NET Framework",
    "C#",
    "Windows Forms",
    "Microsoft SQL Server",
    "MSSQL",
    "GitHub",
    "MS Excel Integration",
  ];

  const projects = [
    {
      title: "Project Management System and Water Quality Tracker",
      client: "KMC Water Department",
      slug: "kmc-water",
      description: "A comprehensive desktop application to transition from manual to digital project management and water quality tracking for the KMC Water Department.",
      features: [
        "Project Management: Robust system to oversee water-related projects with weekly progress tracking and report generation",
        "Resource Optimization: Tools to understand project statuses, optimize resource allocation, and identify causes of delays",
        "Water Quality Monitoring: Daily monitoring protocol for three water treatment plants",
        "Quality Parameters: Evaluation of 10 critical water quality parameters with consistent tracking",
        "Report Generation: Automated reporting system for project progress and water quality metrics",
      ],
      images: 6,
      technologies: [".NET Framework", "Windows Forms", "C#", "MSSQL"],
    },
    {
      title: "Monthly Expenditure Management System",
      client: "MASL Digana Headquarters",
      slug: "masl-digana",
      description: "A desktop application to generate monthly expenditure reports for the Digana MASL office account section, streamlining financial reporting processes.",
      features: [
        "Daily Expenditure Tracking: Capture and record daily expenditures in real-time",
        "Data Analysis: Analyze expenditure patterns and trends over time",
        "Monthly Report Generation: Automated creation of comprehensive monthly expenditure reports",
        "MS Excel Export: Seamless export functionality for integration with existing office workflows",
        "Account Section Integration: Designed specifically for accounting department requirements",
      ],
      images: 3,
      technologies: [".NET Framework", "C#", "Windows Forms", "GitHub"],
      github: "https://github.com/Isuranga-2001/MASL-Monthly-Capital-Expenditure-Statement",
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
                  <span className="text-4xl">💼</span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-[var(--gh-fg-default)] mb-2">
                  Freelance App Developer
                </h1>
                <p className="text-xl text-[var(--gh-accent-fg)] mb-2">Self-Employed</p>
                <p className="text-[var(--gh-fg-muted)]">Dec 2020 - Aug 2022</p>
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
            As a Freelance App Developer from 2020 to 2022, I specialized in developing custom 
            desktop applications using the .NET Framework and Microsoft SQL Server. During this 
            period, I worked with government departments and corporate clients to digitize their 
            manual processes and create efficient data management solutions.
          </p>
          <p className="text-lg text-[var(--gh-fg-muted)] leading-relaxed">
            This experience taught me the importance of understanding client needs, designing 
            user-friendly interfaces, and delivering robust solutions that solve real-world problems. 
            I gained valuable experience in database design, Windows Forms development, and project 
            management while working independently with multiple clients.
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
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--gh-accent-emphasis)] text-white text-sm">
                      ✓
                    </span>
                  </div>
                  <p className="text-[var(--gh-fg-muted)]">{responsibility}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Major Projects */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
            Major Projects
          </h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)]"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-[var(--gh-fg-default)] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[var(--gh-accent-fg)] text-lg mb-4">{project.client}</p>
                  <p className="text-[var(--gh-fg-muted)] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3 text-[var(--gh-fg-muted)]">
                        <span className="text-[var(--gh-success-fg)] mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[var(--gh-fg-default)] mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.github && (
                  <div className="mb-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[var(--gh-accent-fg)] hover:underline"
                    >
                      <span>View on GitHub</span>
                      <span>→</span>
                    </a>
                  </div>
                )}

                {/* Project Screenshots */}
                <ProjectGallery 
                  projectPath={`freelance/${project.slug}`}
                  projectTitle={project.title}
                />
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
                  className="px-4 py-2 bg-[var(--gh-accent-emphasis)] text-white rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Learning */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-6">
            Skills Developed & Key Learnings
          </h2>
          <div className="space-y-6">
            <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                Desktop Application Development
              </h3>
              <p className="text-[var(--gh-fg-muted)]">
                Mastered Windows Forms development with .NET Framework, creating intuitive user 
                interfaces and implementing complex business logic. Learned to design applications 
                that are both powerful and easy to use for non-technical users.
              </p>
            </div>
            <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                Database Design & Management
              </h3>
              <p className="text-[var(--gh-fg-muted)]">
                Gained extensive experience in designing normalized database schemas, writing 
                optimized SQL queries, and implementing data integrity constraints. Learned to 
                handle large datasets efficiently and create reliable backup and recovery procedures.
              </p>
            </div>
            <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                Client Relations & Project Management
              </h3>
              <p className="text-[var(--gh-fg-muted)]">
                Developed strong communication skills by working directly with clients to understand 
                their needs and translate them into technical solutions. Learned to manage project 
                timelines, set realistic expectations, and deliver quality software that meets 
                client requirements.
              </p>
            </div>
            <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                Problem Solving & Innovation
              </h3>
              <p className="text-[var(--gh-fg-muted)]">
                Each project presented unique challenges that required creative solutions. This 
                experience taught me to think critically, research effectively, and find innovative 
                ways to solve complex problems within the constraints of desktop application 
                development.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
