import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeaturedProjectGallery from "@/components/FeaturedProjectGallery";

export default function InternifyPage() {
  const basePath = "/projects/featured/internify";

  const screenshotSections = [
    {
      title: "Application Screenshots",
      images: [
        { src: `${basePath}/img (1).jpg`, alt: "Internify Screenshot 1" },
        { src: `${basePath}/img (2).jpg`, alt: "Internify Screenshot 2" },
      ],
    },
  ];

  const features = [
    {
      title: "Internship Discovery",
      description: "Browse and search for internship opportunities specifically curated for IT undergraduates with advanced filtering options.",
    },
    {
      title: "Application Tracking",
      description: "Track all internship applications in one place, monitoring their status from submission to final decision.",
    },
    {
      title: "CV Management",
      description: "Create, update, and manage multiple versions of CVs for different types of internship applications.",
    },
    {
      title: "Company Profiles",
      description: "Detailed company information, culture insights, and past internship experiences shared by other students.",
    },
    {
      title: "Deadline Reminders",
      description: "Never miss an application deadline with automated email reminders and calendar integration.",
    },
    {
      title: "Analytics Dashboard",
      description: "Visualize application statistics, success rates, and internship market trends for IT students.",
    },
  ];

  const technologies = {
    "Backend": ["Express.js", "Node.js", "JavaScript", "RESTful APIs", "JWT Authentication"],
    "Database": ["PostgreSQL", "SQL", "Database Design", "Query Optimization"],
    "Cloud Services": ["AWS S3 (File Storage)", "AWS EC2 (Deployment)", "AWS RDS (Database)"],
    "Tools & Libraries": ["Passport.js", "Multer", "Nodemailer", "bcrypt", "dotenv"],
  };

  const architecture = [
    {
      component: "RESTful API Server",
      description: "Express.js server handling all business logic, authentication, and data validation with proper error handling and logging.",
    },
    {
      component: "PostgreSQL Database",
      description: "Relational database storing user profiles, internship listings, applications, and CV metadata with optimized schema design.",
    },
    {
      component: "AWS S3 Integration",
      description: "Secure cloud storage for CV files with pre-signed URLs for download, ensuring data privacy and scalability.",
    },
    {
      component: "Authentication System",
      description: "JWT-based authentication with refresh tokens, password hashing using bcrypt, and role-based access control.",
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
                  <span className="text-4xl">💼</span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-[var(--gh-fg-default)] mb-2">
                  Internify
                </h1>
                <p className="text-xl text-[var(--gh-accent-fg)] mb-4">
                  Internship Tracking System for IT Undergraduates
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[var(--gh-accent-emphasis)] text-white rounded-full text-sm">
                    Backend Developer
                  </span>
                  <span className="px-3 py-1 bg-[var(--gh-success-fg)] text-white rounded-full text-sm">
                    Database Designer
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
            Internify is a comprehensive platform designed to help IT undergraduates streamline 
            their internship search and application process. The system addresses the common 
            challenges students face when managing multiple internship applications, keeping track 
            of deadlines, and organizing their CVs for different opportunities.
          </p>
          <p className="text-lg text-[var(--gh-fg-muted)] leading-relaxed">
            Built with Express.js and PostgreSQL, the platform provides a centralized hub where 
            students can discover opportunities, manage their applications, and store their CVs 
            securely in the cloud. The system emphasizes user experience, security, and scalability 
            to serve the growing community of IT students.
          </p>
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

        {/* System Architecture */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
            System Architecture
          </h2>
          <div className="space-y-6">
            {architecture.map((item, index) => (
              <div
                key={index}
                className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)]"
              >
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                  {item.component}
                </h3>
                <p className="text-[var(--gh-fg-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="bg-[var(--gh-canvas-subtle)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
              Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(technologies).map(([category, techs]) => (
                <div
                  key={category}
                  className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-default)]"
                >
                  <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
            Technical Implementation Highlights
          </h2>
          <div className="space-y-6">
            <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-4">
                Database Design
              </h3>
              <p className="text-[var(--gh-fg-muted)] mb-4">
                Designed a normalized PostgreSQL schema with proper relationships between users, 
                internships, applications, and CVs. Implemented indexing strategies for optimal 
                query performance and used foreign keys to maintain referential integrity.
              </p>
              <ul className="space-y-2 text-[var(--gh-fg-muted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gh-success-fg)] mt-1">✓</span>
                  <span>Normalized database schema (3NF)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gh-success-fg)] mt-1">✓</span>
                  <span>Efficient indexing for search queries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gh-success-fg)] mt-1">✓</span>
                  <span>Complex joins for analytics and reporting</span>
                </li>
              </ul>
            </div>

            <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-4">
                File Upload & Storage
              </h3>
              <p className="text-[var(--gh-fg-muted)] mb-4">
                Implemented secure file upload using Multer middleware with file type validation, 
                size limits, and virus scanning. CVs are stored in AWS S3 with unique identifiers 
                and pre-signed URLs for secure, time-limited access.
              </p>
              <ul className="space-y-2 text-[var(--gh-fg-muted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gh-success-fg)] mt-1">✓</span>
                  <span>Secure file upload with validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gh-success-fg)] mt-1">✓</span>
                  <span>AWS S3 integration for scalable storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gh-success-fg)] mt-1">✓</span>
                  <span>Pre-signed URLs for secure file access</span>
                </li>
              </ul>
            </div>

            <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-4">
                Security Implementation
              </h3>
              <p className="text-[var(--gh-fg-muted)] mb-4">
                Comprehensive security measures including JWT authentication, password hashing with 
                bcrypt, input validation, SQL injection prevention, and CORS configuration. 
                Implemented rate limiting to prevent abuse and DDoS attacks.
              </p>
              <ul className="space-y-2 text-[var(--gh-fg-muted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gh-success-fg)] mt-1">✓</span>
                  <span>JWT-based authentication with refresh tokens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gh-success-fg)] mt-1">✓</span>
                  <span>Password hashing using bcrypt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gh-success-fg)] mt-1">✓</span>
                  <span>Input validation and sanitization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gh-success-fg)] mt-1">✓</span>
                  <span>Rate limiting and CORS protection</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Deployment */}
        <section className="bg-[var(--gh-canvas-subtle)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-6">
              Deployment & Infrastructure
            </h2>
            <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-default)]">
              <p className="text-[var(--gh-fg-muted)] mb-6">
                The application is deployed on AWS infrastructure with the Express.js server running 
                on EC2 instances, PostgreSQL database on RDS for managed database services, and 
                S3 for file storage. This setup ensures high availability, automatic backups, and 
                easy scalability as the user base grows.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-[var(--gh-border-default)] rounded-lg p-4 bg-[var(--gh-canvas-subtle)]">
                  <h4 className="font-semibold text-[var(--gh-fg-default)] mb-2">AWS EC2</h4>
                  <p className="text-sm text-[var(--gh-fg-muted)]">
                    Application server hosting with auto-scaling capabilities
                  </p>
                </div>
                <div className="border border-[var(--gh-border-default)] rounded-lg p-4 bg-[var(--gh-canvas-subtle)]">
                  <h4 className="font-semibold text-[var(--gh-fg-default)] mb-2">AWS RDS</h4>
                  <p className="text-sm text-[var(--gh-fg-muted)]">
                    Managed PostgreSQL database with automatic backups
                  </p>
                </div>
                <div className="border border-[var(--gh-border-default)] rounded-lg p-4 bg-[var(--gh-canvas-subtle)]">
                  <h4 className="font-semibold text-[var(--gh-fg-default)] mb-2">AWS S3</h4>
                  <p className="text-sm text-[var(--gh-fg-muted)]">
                    Scalable file storage with CDN integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        {screenshotSections.length > 0 && (
          <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
              Screenshots
            </h2>
            <FeaturedProjectGallery
              sections={screenshotSections}
              projectTitle="Internify"
            />
          </section>
        )}

        {/* Impact & Learning */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-6">
            Project Impact & Learning Outcomes
          </h2>
          <div className="space-y-6">
            <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                Backend Development Mastery
              </h3>
              <p className="text-[var(--gh-fg-muted)]">
                This project significantly strengthened my backend development skills, particularly 
                in building RESTful APIs with Express.js. I gained deep understanding of middleware 
                architecture, error handling patterns, and API design best practices.
              </p>
            </div>
            <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                Database Expertise
              </h3>
              <p className="text-[var(--gh-fg-muted)]">
                Working extensively with PostgreSQL taught me advanced SQL concepts, database 
                optimization techniques, and the importance of proper schema design. I learned 
                to write complex queries, use indexes effectively, and maintain data integrity.
              </p>
            </div>
            <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                AWS Cloud Services
              </h3>
              <p className="text-[var(--gh-fg-muted)]">
                Deploying and managing the application on AWS provided practical experience with 
                cloud services. I learned about EC2 instance management, S3 bucket policies, RDS 
                configuration, and security groups, preparing me for cloud-based development in 
                professional settings.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
