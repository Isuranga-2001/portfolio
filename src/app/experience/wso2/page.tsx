import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function WSO2Page() {
  const responsibilities = [
    "Contributing to open-source healthcare solution development using Ballerina programming language",
    "Working with FHIR (Fast Healthcare Interoperability Resources) standards for healthcare data exchange",
    "Developing and maintaining the Ballerina Terminology Service for managing healthcare terminology operations",
    "Implementing CI/CD workflows using GitHub Actions for automated testing and deployment",
    "Collaborating with the WSO2 team on the HAPI-FHIR integration and healthcare interoperability solutions",
    "Deploying and managing applications on WSO2 Choreo cloud platform",
  ];

  const technologies = [
    "Ballerina",
    "Java",
    "HAPI-FHIR",
    "WSO2 Choreo",
    "GitHub Actions",
    "CI/CD",
    "RESTful APIs",
    "Healthcare Standards (FHIR)",
  ];

  const achievements = [
    {
      title: "Ballerina Terminology Service",
      description: "Developed an FHIR-compliant Terminology Service that manages healthcare terminology operations including ValueSet expansion, CodeSystem lookups, and concept validation.",
    },
    {
      title: "CI/CD Pipeline Implementation",
      description: "Set up automated testing and deployment pipelines using GitHub Actions, improving the development workflow and ensuring code quality.",
    },
    {
      title: "Open Source Contribution",
      description: "Actively contributed to WSO2's open-source healthcare solutions, collaborating with developers worldwide.",
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
                  <span className="text-3xl font-bold text-[var(--gh-accent-fg)]">WSO2</span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-[var(--gh-fg-default)] mb-2">
                  Intern Software Engineer
                </h1>
                <p className="text-xl text-[var(--gh-accent-fg)] mb-2">WSO2 LLC</p>
                <p className="text-[var(--gh-fg-muted)]">Feb 2025 - July 2025</p>
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
            As an Intern Software Engineer at WSO2 LLC, I am contributing to the development of 
            open-source healthcare solutions. My work focuses on building FHIR-compliant services 
            using Ballerina, a cloud-native programming language designed for integration. This role 
            has provided me with invaluable experience in healthcare interoperability standards, 
            cloud-native development, and enterprise-grade software engineering practices.
          </p>
          <p className="text-lg text-[var(--gh-fg-muted)] leading-relaxed">
            WSO2 is a leading open-source technology provider, and working here has given me the 
            opportunity to collaborate with talented engineers from around the world, learn 
            industry best practices, and contribute to solutions that impact healthcare systems globally.
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

        {/* Major Achievements */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
            Major Achievements
          </h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)]"
              >
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                  {achievement.title}
                </h3>
                <p className="text-[var(--gh-fg-muted)] leading-relaxed">
                  {achievement.description}
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
                  className="px-4 py-2 bg-[var(--gh-accent-emphasis)] text-white rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Learning & Growth */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-6">
            Learning & Professional Growth
          </h2>
          <div className="space-y-6">
            <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                Healthcare Technology
              </h3>
              <p className="text-[var(--gh-fg-muted)]">
                Gained deep understanding of healthcare interoperability standards, particularly 
                FHIR (Fast Healthcare Interoperability Resources), and how they enable seamless 
                data exchange between healthcare systems.
              </p>
            </div>
            <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                Cloud-Native Development
              </h3>
              <p className="text-[var(--gh-fg-muted)]">
                Mastered Ballerina, a modern cloud-native programming language, and learned best 
                practices for building scalable, distributed systems on cloud platforms like WSO2 Choreo.
              </p>
            </div>
            <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                Open Source Collaboration
              </h3>
              <p className="text-[var(--gh-fg-muted)]">
                Experienced the power of open-source development, contributing to projects that 
                are used by organizations worldwide and collaborating with a global community of developers.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
