"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import ProjectModal, { ProjectDetails } from "@/components/ProjectModal";
import {
  bscAssociatedProjects,
  EducationMilestoneProject,
  getProjectByTitle,
} from "@/data/projects";

export default function Education() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const semesterPerformance = [
    "1st Semester SGPA: 3.89 (Dean's List)",
    "2nd Semester SGPA: 3.87 (Dean's List)",
    "3rd Semester SGPA: 3.95 (Dean's List)",
    "4th Semester SGPA: 3.96 (Dean's List)",
    "5th Semester SGPA: 3.90 (Dean's List)",
    "6th Semester SGPA: 3.92 (Dean's List)",
  ];

  const milestoneProjects = bscAssociatedProjects;

  const handleMilestoneProjectClick = (project: EducationMilestoneProject) => {
    if (project.actionType !== "modal") {
      return;
    }

    const linkedProject = getProjectByTitle(project.projectTitle ?? project.title);
    if (linkedProject) {
      setSelectedProject(linkedProject);
      setIsModalOpen(true);
    }
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
          <h1 className="text-4xl font-bold text-[var(--gh-fg-default)] mb-4">
            Education
          </h1>
          <p className="text-lg text-[var(--gh-fg-muted)] mb-12">
            My academic journey and qualifications
          </p>

          {/* University of Moratuwa */}
          <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)] mb-6">
            <h2 className="text-2xl font-semibold text-[var(--gh-fg-default)] mb-2">
              BSc (Hons.) in Information Technology
            </h2>
            <p className="text-[var(--gh-accent-fg)] mb-4">
              Faculty of Information Technology, University of Moratuwa, Sri Lanka
            </p>
            <p className="text-[var(--gh-fg-muted)] mb-4">August 2022 - August 2026 (Expected)</p>
            <div className="text-[var(--gh-fg-muted)] mb-4">
              <p className="font-medium text-[var(--gh-fg-default)]">Performance</p>
              <p>CGPA: 3.92/4.00 (Up to 6th Semester)</p>
              <ul className="space-y-1 mt-2 ml-4 list-disc list-inside">
                {semesterPerformance.map((semester) => (
                  <li key={semester}>{semester}</li>
                ))}
              </ul>
            </div>

            <Link
              href="/transcript.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-1 py-1 text-[var(--gh-accent-fg)] text-sm font-medium hover:text-[var(--gh-accent-emphasis)] transition-colors"
              style={{ cursor: 'pointer' }}
            >
              View Transcript (Up to 5th Semester)
            </Link>

            <div className="mt-6">
              <p className="font-medium text-[var(--gh-fg-default)] mb-3">Associated Projects</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {milestoneProjects.map((project) => {
                  const projectBody = (
                    <>
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <h3 className="text-base font-semibold text-[var(--gh-fg-default)]">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[var(--gh-fg-muted)]">{project.context}</p>
                    </>
                  );

                  if (project.actionType === "route" && project.href) {
                    return (
                      <Link
                        key={project.title}
                        href={project.href}
                        className="group relative overflow-hidden rounded-lg border border-[var(--gh-border-default)] bg-[var(--gh-canvas-default)] p-4 transition-all hover:border-[var(--gh-accent-emphasis)] hover:shadow-md hover:shadow-[var(--gh-accent-emphasis)]/20"
                      >
                        <div className="absolute -top-14 -right-14 h-28 w-28 rounded-full bg-[var(--gh-accent-emphasis)]/10 blur-2xl transition-opacity group-hover:opacity-100" />
                        <div className="relative">{projectBody}</div>
                      </Link>
                    );
                  }

                  return (
                    <button
                      key={project.title}
                      type="button"
                      onClick={() => handleMilestoneProjectClick(project)}
                      className="group relative overflow-hidden rounded-lg border border-[var(--gh-border-default)] bg-[var(--gh-canvas-default)] p-4 text-left transition-all hover:border-[var(--gh-accent-emphasis)] hover:shadow-md hover:shadow-[var(--gh-accent-emphasis)]/20"
                    >
                      <div className="absolute -top-14 -right-14 h-28 w-28 rounded-full bg-[var(--gh-accent-emphasis)]/10 blur-2xl transition-opacity group-hover:opacity-100" />
                      <div className="relative">{projectBody}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Shibaura Institute of Technology */}
          <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)] mb-6">
            <h2 className="text-2xl font-semibold text-[var(--gh-fg-default)] mb-2">
              Research Exchange Program
            </h2>
            <p className="text-[var(--gh-accent-fg)] mb-4">
              Shibaura Institute of Technology (Toyosu Campus), Tokyo, Japan
            </p>
            <p className="text-[var(--gh-fg-muted)] mb-4">September 2025 - October 2025</p>
            <div>
              <p className="font-medium text-[var(--gh-fg-default)] mb-2">Skills Gained</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]">
                  Computer Vision
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]">
                  Machine Learning
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]">
                  Research Skills
                </span>
              </div>
            </div>
          </div>

          {/* St. Sylvester's College */}
          <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)]">
            <h2 className="text-2xl font-semibold text-[var(--gh-fg-default)] mb-2">
              Primary/Secondary Education
            </h2>
            <p className="text-[var(--gh-accent-fg)] mb-4">
              St. Sylvester's College, Kandy
            </p>
            <p className="text-[var(--gh-fg-muted)] mb-4">January 2007 - August 2020</p>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium text-[var(--gh-fg-default)] mb-2">Academic Achievements</p>
                <ul className="space-y-1 text-[var(--gh-fg-muted)]">
                  <li>• G.C.E. Advanced Level (2020): Z-Score 1.9762 (Common Stream: Physics, Combined Mathematics and ICT)</li>
                  <li>• G.C.E. Ordinary Level: 6 A passes, 1 B pass, 2 C passes</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-[var(--gh-fg-default)] mb-2">Leadership & Activities</p>
                <ul className="space-y-1 text-[var(--gh-fg-muted)]">
                  <li>• President of the College ICT Society (2019/2020)</li>
                  <li>• Editor of the College Astronomical Society (2019/2020)</li>
                  <li>• Member of the College Science Society (2018 - 2020)</li>
                  <li>• Member of the College Gymnastic Team (2007 - 2016)</li>
                  <li>• Member of the College Carrom Team (2015 - 2017)</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-[var(--gh-fg-default)] mb-2">Skills Developed</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]">
                    Software Development
                  </span>
                  <span className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]">
                    Problem Solving
                  </span>
                  <span className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]">
                    Basic Computer Skills
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <Footer />
    </>
  );
}
