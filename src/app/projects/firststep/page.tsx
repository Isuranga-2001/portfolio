import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeaturedProjectGallery from "@/components/FeaturedProjectGallery";

export default function FirstStepPage() {
  const basePath = "/projects/featured/firststep";

  const screenshotSections = [
    {
      title: "Welcome Portal",
      images: [
        { src: `${basePath}/welcome/img (1).png`, alt: "Welcome Portal - Landing Page" },
        { src: `${basePath}/welcome/img (2).png`, alt: "Welcome Portal - Features" },
        { src: `${basePath}/welcome/img (3).png`, alt: "Welcome Portal - About" },
      ],
    },
    {
      title: "Seeker Portal",
      images: [
        { src: `${basePath}/seeker/img (1).jpeg`, alt: "Seeker Portal - Dashboard" },
        { src: `${basePath}/seeker/img (2).png`, alt: "Seeker Portal - Job Search" },
        { src: `${basePath}/seeker/img (3).png`, alt: "Seeker Portal - Applications" },
        { src: `${basePath}/seeker/img (4).png`, alt: "Seeker Portal - Profile" },
      ],
    },
    {
      title: "Company Portal",
      images: [
        { src: `${basePath}/company/img (1).png`, alt: "Company Portal - Dashboard" },
        { src: `${basePath}/company/img (2).png`, alt: "Company Portal - Job Listings" },
        { src: `${basePath}/company/img (3).png`, alt: "Company Portal - Candidates" },
        { src: `${basePath}/company/img (4).png`, alt: "Company Portal - Analytics" },
        { src: `${basePath}/company/img (5).png`, alt: "Company Portal - Settings" },
        { src: `${basePath}/company/img (6).png`, alt: "Company Portal - Reports" },
      ],
    },
    {
      title: "Mobile View",
      images: [
        { src: `${basePath}/mobile/img (1).jpg`, alt: "Mobile View - Home" },
        { src: `${basePath}/mobile/img (2).jpg`, alt: "Mobile View - Navigation" },
        { src: `${basePath}/mobile/img (3).jpg`, alt: "Mobile View - Jobs" },
        { src: `${basePath}/mobile/img (4).jpg`, alt: "Mobile View - Profile" },
      ],
    },
  ];

  const features = [
    {
      title: "Intelligent Skill Matching",
      description: "Advanced algorithms that match job seekers with opportunities based on their skills, experience, and preferences.",
    },
    {
      title: "Interview Scheduling System",
      description: "Automated interview scheduling with calendar integration, reducing coordination overhead for both employers and candidates.",
    },
    {
      title: "Comprehensive Dashboard",
      description: "Intuitive dashboards for job seekers, employers, and administrators with real-time analytics and insights.",
    },
    {
      title: "Application Tracking",
      description: "Complete application lifecycle management from submission to hiring decision with status notifications.",
    },
    {
      title: "Azure Deployment",
      description: "Automated deployment pipeline with Azure services ensuring high availability and scalability.",
    },
    {
      title: "Role-Based Access Control",
      description: "Secure authentication and authorization system with different access levels for various user types.",
    },
  ];

  const technologies = [
    "ASP.NET Core",
    "C#",
    "Angular",
    "TypeScript",
    "Microsoft SQL Server",
    "Entity Framework",
    "Azure App Service",
    "Azure SQL Database",
    "RESTful APIs",
    "JWT Authentication",
    "SignalR",
    "Azure DevOps",
  ];

  const challenges = [
    {
      challenge: "Complex Matching Algorithm",
      solution: "Developed a multi-factor matching algorithm considering skills, experience, location, and preferences with weighted scoring.",
    },
    {
      challenge: "Real-time Updates",
      solution: "Implemented SignalR for real-time notifications and updates, keeping users informed of application status changes instantly.",
    },
    {
      challenge: "Scalability Concerns",
      solution: "Leveraged Azure's auto-scaling capabilities and optimized database queries using Entity Framework to handle growing user base.",
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
              href="/projects"
              className="inline-flex items-center gap-2 text-[var(--gh-accent-fg)] hover:underline mb-8"
            >
              ← Back to Projects
            </Link>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-[var(--gh-canvas-default)] border border-[var(--gh-border-default)] rounded-lg flex items-center justify-center">
                  <span className="text-4xl">🎯</span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-[var(--gh-fg-default)] mb-2">
                  FirstStep
                </h1>
                <p className="text-xl text-[var(--gh-accent-fg)] mb-4">
                  Job Matching Platform
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[var(--gh-accent-emphasis)] text-white rounded-full text-sm">
                    Full Stack Developer
                  </span>
                  <span className="px-3 py-1 bg-[var(--gh-success-fg)] text-white rounded-full text-sm">
                    Project Manager
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-6">
            Project Overview
          </h2>
          <p className="text-lg text-[var(--gh-fg-muted)] leading-relaxed mb-8">
            FirstStep is a comprehensive recruitment platform designed to streamline the hiring 
            process by intelligently matching job seekers with opportunities that align with their 
            skills and career goals. As both the Full Stack Developer and Project Manager, I led 
            the development of this platform from conception to deployment.
          </p>
          <p className="text-lg text-[var(--gh-fg-muted)] leading-relaxed mb-12">
            The platform features an advanced skill-matching algorithm that considers multiple 
            factors including technical skills, experience level, location preferences, and career 
            aspirations. It automates the interview scheduling process and provides real-time 
            updates to all parties involved in the recruitment process.
          </p>

          {/* System Architecture */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-[var(--gh-fg-default)] mb-6">
              System Architecture
            </h3>
            <div className="relative w-full rounded-lg overflow-hidden border border-[var(--gh-border-default)] bg-white">
              <Image
                src="/projects/featured/firststep/System Architecture.png"
                alt="FirstStep System Architecture"
                width={1366}
                height={768}
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="text-sm text-[var(--gh-fg-muted)] mt-4 text-center">
              FirstStep employs a modern cloud-native architecture with Angular frontend, ASP.NET Core backend, 
              and Azure services for deployment, storage, and database management.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-[var(--gh-canvas-subtle)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-default)]"
                >
                  <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--gh-fg-muted)]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-4">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["ASP.NET Core", "C#", "Entity Framework", "RESTful APIs", "JWT Authentication"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-4">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Angular", "TypeScript", "RxJS", "Angular Material"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-4">
                Cloud & Database
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Azure App Service", "Azure SQL Database", "MSSQL", "Azure DevOps"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="bg-[var(--gh-canvas-subtle)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
              Challenges & Solutions
            </h2>
            <div className="space-y-6">
              {challenges.map((item, index) => (
                <div
                  key={index}
                  className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-default)]"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--gh-danger-fg)] mb-3">
                        Challenge
                      </h3>
                      <p className="text-[var(--gh-fg-muted)]">{item.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--gh-success-fg)] mb-3">
                        Solution
                      </h3>
                      <p className="text-[var(--gh-fg-muted)]">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="bg-[var(--gh-canvas-subtle)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
              Screenshots
            </h2>
            <FeaturedProjectGallery
              sections={screenshotSections}
              projectTitle="FirstStep"
            />
          </div>
        </section>

        {/* Project Impact */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-6">
            Project Impact & Learnings
          </h2>
          <div className="space-y-6">
            <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                Technical Growth
              </h3>
              <p className="text-[var(--gh-fg-muted)]">
                This project significantly enhanced my skills in .NET ecosystem, particularly in 
                building scalable enterprise applications with ASP.NET Core. I gained deep 
                understanding of Entity Framework, database optimization, and Angular for 
                building complex single-page applications.
              </p>
            </div>
            <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                Project Management
              </h3>
              <p className="text-[var(--gh-fg-muted)]">
                Leading this project taught me valuable lessons in project planning, task 
                prioritization, and team coordination. I learned to balance feature development 
                with technical debt, manage stakeholder expectations, and deliver incremental 
                value through agile methodology.
              </p>
            </div>
            <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                Cloud Deployment
              </h3>
              <p className="text-[var(--gh-fg-muted)]">
                Deploying to Azure provided hands-on experience with cloud infrastructure, 
                CI/CD pipelines, and DevOps practices. I learned to configure Azure services, 
                implement automated deployments, and monitor application performance in production.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
