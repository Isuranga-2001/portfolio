"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectModal, { ProjectDetails } from "@/components/ProjectModal";
import EducationMilestoneCard, {
  EducationMilestoneModel,
  MilestoneProject,
} from "@/components/EducationMilestoneCard";
import {
  bscAssociatedProjects,
  getProjectByTitle,
  schoolAssociatedProjects,
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
    "6th Semester SGPA: 3.95 (Dean's List)",
  ];

  const handleMilestoneProjectClick = (project: MilestoneProject) => {
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

  const milestones: EducationMilestoneModel[] = [
    {
      title: "BSc (Hons.) in Information Technology",
      institution:
        "Faculty of Information Technology, University of Moratuwa, Sri Lanka",
      period: "August 2022 - August 2026 (Expected)",
      performance: {
        summary: "CGPA: 3.92/4.00 (Up to 6th Semester)",
        semesterWise: semesterPerformance,
      },
      transcript: {
        href: "/transcript.pdf",
        label: "View Transcript (Up to 5th Semester)",
      },
      associatedProjects: bscAssociatedProjects,
      skills: null,
      achievements: null,
      activities: null,
    },
    {
      title: "Research Exchange Program",
      institution: "Shibaura Institute of Technology (Toyosu Campus), Tokyo, Japan",
      period: "September 2025 - October 2025",
      performance: null,
      transcript: null,
      associatedProjects: [
        {
          title: "Hybrid Sign Language Recognition Framework",
          context:
            "Research project submitted to ICIPROB 2026 (IEEE), awarded Best Student Paper",
          actionType: "route",
          href: "/projects/sign-lang",
        },
      ],
      skills: ["Computer Vision", "Machine Learning", "Research Skills"],
      achievements: null,
      activities: null,
    },
    {
      title: "Primary/Secondary Education",
      institution: "St. Sylvester's College, Kandy",
      period: "January 2007 - August 2020",
      performance: null,
      transcript: null,
      associatedProjects: schoolAssociatedProjects,
      skills: ["Software Development", "Problem Solving", "Basic Computer Skills"],
      achievements: [
        {
          text: "G.C.E. Advanced Level (2020): Z-Score 1.9762 (Common Stream)",
          subItems: ["Physics", "Combined Mathematics", "ICT"],
        },
        {
          text: "G.C.E. Ordinary Level (2017)",
          subItems: null,
        },
      ],
      activities: [
        "President of the College ICT Society (2019/2020)",
        "Editor of the College Astronomical Society (2019/2020)",
        "Member of the College Science Society (2018 - 2020)",
        "Member of the College Gymnastic Team (2007 - 2016)",
        "Member of the College Carrom Team (2015 - 2017)",
      ],
    },
  ];

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

          {milestones.map((milestone) => (
            <EducationMilestoneCard
              key={milestone.title}
              milestone={milestone}
              onProjectClick={handleMilestoneProjectClick}
            />
          ))}
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
