"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import ProjectModal, { ProjectDetails } from "@/components/ProjectModal";
import { featuredProjects } from "@/data/featuredProjects";
import { openSourceProjects, otherProjects } from "@/data/projects";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: ProjectDetails) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
                category={project.category}
                date={project.date}
                href={project.href}
                liveLink={project.liveLink}
              />
            ))}
          </div>

          {/* Open Source Projects */}
          <h2 className="text-2xl font-bold text-[var(--gh-fg-default)] mb-8">
            Open Source Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {openSourceProjects.map((project) => (
              <div
                key={project.title}
                onClick={() => handleOpenModal(project)}
                className="cursor-pointer h-full"
              >
                <div className="h-full border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-border-muted)] transition-all hover:shadow-lg hover:shadow-[var(--gh-accent-emphasis)]/10">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-[var(--gh-fg-muted)]">{project.year}</p>
                    <span className="px-2 py-0.5 text-xs font-semibold bg-[var(--gh-success-emphasis)] text-white rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[var(--gh-fg-muted)] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-[var(--gh-accent-emphasis)] text-white rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium bg-[var(--gh-canvas-default)] text-[var(--gh-fg-muted)] border border-[var(--gh-border-default)] rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  {/* Quick Links */}
                  {project.links && Object.keys(project.links).length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs text-[var(--gh-fg-muted)] hover:text-[var(--gh-accent-fg)] transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Source
                        </a>
                      )}
                      {project.links.terminologyService && (
                        <a
                          href={project.links.terminologyService}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs text-[var(--gh-fg-muted)] hover:text-[var(--gh-accent-fg)] transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14,2 14,8 20,8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10,9 9,9 8,9"></polyline>
                          </svg>
                          Implementation
                        </a>
                      )}
                    </div>
                  )}
                  <div className="mt-4 text-[var(--gh-accent-fg)] font-medium flex items-center gap-2">
                    View details <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <h2 className="text-2xl font-bold text-[var(--gh-fg-default)] mb-8">
            Other Notable Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                onClick={() => handleOpenModal(project)}
                className="cursor-pointer h-full"
              >
                <div className="h-full border border-[var(--gh-border-default)] rounded-lg p-6 bg-[var(--gh-canvas-subtle)] hover:border-[var(--gh-border-muted)] transition-all hover:shadow-lg hover:shadow-[var(--gh-accent-emphasis)]/10">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-[var(--gh-fg-muted)]">{project.year}</p>
                    <span className="px-2 py-0.5 text-xs font-semibold bg-[var(--gh-success-emphasis)] text-white rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--gh-fg-default)] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[var(--gh-fg-muted)] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-[var(--gh-accent-emphasis)] text-white rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium bg-[var(--gh-canvas-default)] text-[var(--gh-fg-muted)] border border-[var(--gh-border-default)] rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  {/* Quick Links */}
                  {project.links && Object.keys(project.links).length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs text-[var(--gh-fg-muted)] hover:text-[var(--gh-accent-fg)] transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Source
                        </a>
                      )}
                      {project.links.download && (
                        <a
                          href={project.links.download}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs text-[var(--gh-fg-muted)] hover:text-[var(--gh-accent-fg)] transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                          </svg>
                          Download
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs text-[var(--gh-fg-muted)] hover:text-[var(--gh-accent-fg)] transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </svg>
                          Demo
                        </a>
                      )}
                    </div>
                  )}
                  <div className="mt-4 text-[var(--gh-accent-fg)] font-medium flex items-center gap-2">
                    View details <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
      
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
