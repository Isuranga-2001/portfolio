import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function ProjectsPage() {
  const featuredProjects = [
    {
      title: "FirstStep",
      description: "A comprehensive recruitment platform with skill-matching algorithms, interview scheduling, and automated deployment via Azure.",
      technologies: ["ASP.NET Core", "Angular", "MSSQL", "Azure", "Entity Framework"],
      href: "/projects/firststep",
    },
    {
      title: "ITW Computers",
      description: "A microservices-based online retail shop featuring multi-language services and a full CI/CD pipeline.",
      technologies: ["Go", "Spring Boot", "Node.js", "Next.js", "Docker", "AWS"],
      href: "/projects/itw-computers",
    },
    {
      title: "Internify",
      description: "An internship tracking platform for IT undergraduates to discover opportunities and manage CVs.",
      technologies: ["Express", "PostgreSQL", "AWS S3", "AWS EC2"],
      href: "/projects/internify",
    },
  ];

  const otherProjects = [
    {
      title: "KITI-IWM Administration System",
      description: "Official website and admin system for Kothmale International Training Institute.",
      technologies: ["NestJS", "Next.js", "PostgreSQL", "Tailwind CSS"],
    },
    {
      title: "Power Measuring System",
      description: "IoT-based electricity usage monitoring system for hospital labs at Durden's Hospital.",
      technologies: ["ESP32", "MySQL", "Express", "IoT"],
    },
    {
      title: "Ballerina Terminology Service",
      description: "FHIR Terminology Service for managing healthcare terminology operations (WSO2 Internship).",
      technologies: ["Ballerina", "FHIR", "WSO2 Choreo"],
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-[var(--gh-fg-default)] mb-6">
            Projects
          </h1>
          <p className="text-xl text-[var(--gh-fg-muted)] mb-12 max-w-3xl">
            A showcase of my technical projects ranging from enterprise microservices to IoT solutions. 
            These projects demonstrate my expertise in full-stack development, cloud computing, and problem-solving.
          </p>

          {/* Featured Projects */}
          <h2 className="text-2xl font-bold text-[var(--gh-fg-default)] mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredProjects.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.technologies}
                href={project.href}
              />
            ))}
          </div>

          {/* Other Projects */}
          <h2 className="text-2xl font-bold text-[var(--gh-fg-default)] mb-8">
            Other Notable Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.technologies}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
