import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ITWComputersPage() {
  const features = [
    {
      title: "Microservices Architecture",
      description: "Modular design with independent services written in Go, Spring Boot (Java), and Node.js for different business domains.",
    },
    {
      title: "Multi-Language Services",
      description: "Leveraged the strengths of different programming languages - Go for performance, Java for enterprise features, and Node.js for flexibility.",
    },
    {
      title: "Modern Frontend",
      description: "Built with Next.js and React for a fast, SEO-friendly shopping experience with server-side rendering.",
    },
    {
      title: "Container Orchestration",
      description: "Fully containerized application with Docker, enabling consistent deployment across different environments.",
    },
    {
      title: "CI/CD Pipeline",
      description: "Automated build, test, and deployment pipeline ensuring rapid and reliable releases.",
    },
    {
      title: "Cloud Infrastructure",
      description: "Deployed on AWS with Supabase for database and Firebase for real-time features and authentication.",
    },
  ];

  const services = [
    {
      name: "Product Service",
      language: "Go",
      description: "High-performance service handling product catalog, inventory management, and search functionality.",
    },
    {
      name: "Order Management",
      language: "Spring Boot (Java)",
      description: "Enterprise-grade order processing with transaction management and business logic.",
    },
    {
      name: "User Service",
      language: "Node.js",
      description: "User authentication, profile management, and session handling.",
    },
    {
      name: "Payment Gateway",
      language: "Node.js",
      description: "Secure payment processing integration with third-party payment providers.",
    },
  ];

  const technologies = {
    "Backend Services": ["Go", "Spring Boot", "Node.js", "Express", "gRPC", "REST APIs"],
    "Frontend": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Server-Side Rendering"],
    "Databases": ["Supabase (PostgreSQL)", "Firebase", "Redis Cache"],
    "DevOps": ["Docker", "Docker Compose", "GitHub Actions", "AWS EC2", "AWS S3"],
    "Tools": ["Git", "Postman", "pgAdmin", "Firebase Console"],
  };

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
                  <span className="text-4xl">🛒</span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-[var(--gh-fg-default)] mb-2">
                  ITW Computers
                </h1>
                <p className="text-xl text-[var(--gh-accent-fg)] mb-4">
                  Online Retail Shop - Microservices Architecture
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[var(--gh-accent-emphasis)] text-white rounded-full text-sm">
                    Full Stack Developer
                  </span>
                  <span className="px-3 py-1 bg-[var(--gh-attention-fg)] text-white rounded-full text-sm">
                    DevOps Engineer
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
            ITW Computers is a modern e-commerce platform built using microservices architecture, 
            showcasing the power of polyglot programming. The project demonstrates how different 
            programming languages can be leveraged for their specific strengths within a single 
            application ecosystem.
          </p>
          <p className="text-lg text-[var(--gh-fg-muted)] leading-relaxed mb-12">
            As the Full Stack Developer and DevOps engineer, I designed and implemented the entire 
            system architecture, developed individual microservices in Go, Spring Boot, and Node.js, 
            built the Next.js frontend, and established a complete CI/CD pipeline for automated 
            deployment on AWS infrastructure.
          </p>

          {/* System Architecture */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[var(--gh-fg-default)] mb-6">
              System Architecture
            </h3>
            <div className="border border-[var(--gh-border-default)] rounded-lg overflow-hidden bg-white">
              <Image
                src="/projects/featured/itw-computers/system.png"
                alt="ITW Computers System Architecture - Microservices with API Gateway, User Service, Order Service, Product Service, and databases"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-[var(--gh-fg-muted)] mt-4 text-center">
              System architecture showing Next.js frontend, Node.js API Gateway, and microservices with PostgreSQL, Supabase, and Firebase
            </p>
          </div>

          {/* Deployment Architecture */}
          <div>
            <h3 className="text-2xl font-semibold text-[var(--gh-fg-default)] mb-6">
              Deployment Architecture
            </h3>
            <div className="border border-[var(--gh-border-default)] rounded-lg overflow-hidden bg-white">
              <Image
                src="/projects/featured/itw-computers/deployment.png"
                alt="ITW Computers AWS Deployment Architecture - Production and Test clusters with EKS, RDS, ALB"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-[var(--gh-fg-muted)] mt-4 text-center">
              AWS deployment architecture with Production and Test clusters, EKS, RDS, and Application Load Balancer
            </p>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="bg-[var(--gh-canvas-subtle)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
              Microservices Architecture
            </h2>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-default)]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-[var(--gh-fg-default)]">
                      {service.name}
                    </h3>
                    <span className="px-3 py-1 bg-[var(--gh-success-fg)] text-white rounded-full text-sm">
                      {service.language}
                    </span>
                  </div>
                  <p className="text-[var(--gh-fg-muted)]">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)]"
              >
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--gh-fg-muted)]">{feature.description}</p>
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

        {/* DevOps & Deployment */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
            DevOps & CI/CD Pipeline
          </h2>
          <div className="space-y-6">
            <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-4">
                Containerization Strategy
              </h3>
              <p className="text-[var(--gh-fg-muted)] mb-4">
                Each microservice is containerized using Docker with optimized multi-stage builds 
                to minimize image sizes. Docker Compose orchestrates the entire application stack 
                for local development, including all services, databases, and dependencies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-[var(--gh-accent-emphasis)] text-white rounded">
                  Multi-stage Docker builds
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--gh-accent-emphasis)] text-white rounded">
                  Docker Compose orchestration
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--gh-accent-emphasis)] text-white rounded">
                  Image optimization
                </span>
              </div>
            </div>

            <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-4">
                Automated CI/CD
              </h3>
              <p className="text-[var(--gh-fg-muted)] mb-4">
                GitHub Actions workflow automates the entire deployment process: running tests, 
                building Docker images, pushing to container registry, and deploying to AWS EC2 
                instances. This ensures consistent and reliable deployments with minimal manual intervention.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-[var(--gh-success-fg)] text-white rounded">
                  Automated testing
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--gh-success-fg)] text-white rounded">
                  Container registry
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--gh-success-fg)] text-white rounded">
                  Zero-downtime deployment
                </span>
              </div>
            </div>

            <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)]">
              <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-4">
                AWS Infrastructure
              </h3>
              <p className="text-[var(--gh-fg-muted)] mb-4">
                Deployed on AWS with EC2 instances for compute, S3 for static asset storage, 
                and managed database services. Infrastructure is configured for high availability 
                and scalability, with load balancing and auto-scaling capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-[var(--gh-attention-fg)] text-white rounded">
                  AWS EC2
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--gh-attention-fg)] text-white rounded">
                  AWS S3
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--gh-attention-fg)] text-white rounded">
                  Supabase Database
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & Learning */}
        <section className="bg-[var(--gh-canvas-subtle)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-12">
              Technical Challenges & Solutions
            </h2>
            <div className="space-y-6">
              <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-default)]">
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                  Service Communication
                </h3>
                <p className="text-[var(--gh-fg-muted)]">
                  Implemented both REST and gRPC protocols for inter-service communication. 
                  REST for public APIs and client communication, gRPC for internal service-to-service 
                  calls requiring high performance and type safety.
                </p>
              </div>
              <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-default)]">
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                  Data Consistency
                </h3>
                <p className="text-[var(--gh-fg-muted)]">
                  Addressed distributed data management challenges using event-driven architecture 
                  and eventual consistency patterns. Implemented saga pattern for distributed transactions.
                </p>
              </div>
              <div className="border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-default)]">
                <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                  Performance Optimization
                </h3>
                <p className="text-[var(--gh-fg-muted)]">
                  Implemented Redis caching for frequently accessed data, optimized database queries, 
                  and used Next.js's SSR and ISR capabilities for fast page loads and better SEO.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Impact */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-[var(--gh-fg-default)] mb-6">
            Key Learnings
          </h2>
          <p className="text-lg text-[var(--gh-fg-muted)] leading-relaxed mb-8">
            This project was instrumental in developing my understanding of distributed systems, 
            microservices architecture, and DevOps practices. I gained hands-on experience with 
            multiple programming languages and learned how to choose the right tool for each specific 
            task within a larger system.
          </p>
          <p className="text-lg text-[var(--gh-fg-muted)] leading-relaxed">
            The DevOps aspect taught me the importance of automation, monitoring, and infrastructure 
            as code. Building and maintaining the CI/CD pipeline gave me valuable experience that 
            directly applies to modern software development workflows in professional environments.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
