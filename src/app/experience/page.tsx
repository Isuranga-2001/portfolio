import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function ExperiencePage() {
  const experiences = [
    {
      title: "WSO2 LLC",
      role: "Intern Software Engineer",
      period: "Feb 2025 - July 2025",
      description: "Contributing to open-source healthcare solution development with hands-on experience in Ballerina, Java, HAPI-FHIR, and WSO2 Choreo.",
      href: "/experience/wso2",
    },
    {
      title: "Hypercube Labs",
      role: "Full Stack Developer (Part-time)",
      period: "Jan 2024 - Nov 2024",
      description: "Developed robust backend features and user interfaces for consultancy clients using modern web technologies.",
      href: "/experience/hypercube",
    },
    {
      title: "Freelance App Developer",
      role: "Self-Employed",
      period: "Dec 2020 - Aug 2022",
      description: "Developed custom desktop applications for government and corporate clients using .NET Framework and Microsoft SQL Server, including project management systems and expenditure tracking solutions.",
      href: "/experience/freelance",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-[var(--gh-fg-default)] mb-6">
            Work Experience
          </h1>
          <p className="text-xl text-[var(--gh-fg-muted)] mb-12 max-w-3xl">
            My professional journey in software development, from internships to consultancy work, 
            building enterprise solutions and contributing to open-source projects.
          </p>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card
                key={exp.title}
                title={exp.title}
                description={exp.description}
                href={exp.href}
              >
                <div className="mt-4 space-y-1">
                  <p className="text-[var(--gh-fg-default)] font-semibold">{exp.role}</p>
                  <p className="text-sm text-[var(--gh-fg-muted)]">{exp.period}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 border border-[var(--gh-border-default)] rounded-lg bg-[var(--gh-canvas-subtle)]">
            <h2 className="text-2xl font-bold text-[var(--gh-fg-default)] mb-4">
              Additional Experience
            </h2>
            <div className="space-y-4 text-[var(--gh-fg-muted)]">
              <div>
                <h3 className="text-lg font-semibold text-[var(--gh-fg-default)]">
                  FIT DevLabs - University of Moratuwa
                </h3>
                <p className="text-sm text-[var(--gh-fg-muted)]">Member & Developer | Dec 2022 - Present</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--gh-fg-default)]">
                  IoT and Embedded System Labs - University of Moratuwa
                </h3>
                <p className="text-sm text-[var(--gh-fg-muted)]">Developer & Team Leader, R&D Pillar | Sep 2023 - Present</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--gh-fg-default)]">
                  Technical Writer
                </h3>
                <p className="text-sm text-[var(--gh-fg-muted)]">Active contributor on Medium</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
