"use client";

import Link from "next/link";

export type MilestoneProject = {
  title: string;
  context: string;
  actionType: "modal" | "route";
  href?: string | null;
  projectTitle?: string;
};

export type EducationMilestoneModel = {
  title: string;
  institution: string;
  period: string;
  performance:
    | {
        summary: string | null;
        semesterWise: string[] | null;
      }
    | null;
  transcript:
    | {
        href: string;
        label: string;
      }
    | null;
  associatedProjects: MilestoneProject[] | null;
  skills: string[] | null;
  achievements:
    | {
        text: string;
        subItems?: string[] | null;
      }[]
    | null;
  activities: string[] | null;
};

type EducationMilestoneCardProps = {
  milestone: EducationMilestoneModel;
  onProjectClick?: (project: MilestoneProject) => void;
};

export default function EducationMilestoneCard({
  milestone,
  onProjectClick,
}: Readonly<EducationMilestoneCardProps>) {
  const hasRightColumn = Boolean(milestone.associatedProjects?.length);

  return (
    <div className="border border-[var(--gh-border-default)] rounded-lg p-8 bg-[var(--gh-canvas-subtle)] mb-6 last:mb-0">
      <h2 className="text-2xl font-semibold text-[var(--gh-fg-default)] mb-2">{milestone.title}</h2>
      <p className="text-[var(--gh-accent-fg)] mb-4">{milestone.institution}</p>

      <div className={`mt-4 grid grid-cols-1 ${hasRightColumn ? "lg:grid-cols-2" : ""} gap-6 items-start`}>
        <div>
          <p className="text-[var(--gh-fg-muted)] mb-4">{milestone.period}</p>

          {milestone.performance && (
            <div className="text-[var(--gh-fg-muted)] mb-4">
              <p className="font-medium text-[var(--gh-fg-default)]">Performance</p>
              {milestone.performance.summary && <p>{milestone.performance.summary}</p>}
              {milestone.performance.semesterWise && milestone.performance.semesterWise.length > 0 && (
                <ul className="space-y-1 mt-2 ml-4 list-disc list-inside">
                  {milestone.performance.semesterWise.map((semester) => (
                    <li key={semester}>{semester}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {milestone.achievements && milestone.achievements.length > 0 && (
            <div className="mb-4">
              <p className="font-medium text-[var(--gh-fg-default)] mb-2">Academic Achievements</p>
              <ul className="space-y-1 text-[var(--gh-fg-muted)]">
                {milestone.achievements.map((item) => (
                  <li key={item.text}>
                    <span>• {item.text}</span>
                    {item.subItems && item.subItems.length > 0 && (
                      <ul className="mt-1 ml-12 list-disc list-outside space-y-1 text-[var(--gh-fg-muted)]">
                        {item.subItems.map((subItem) => (
                          <li key={subItem}>{subItem}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {milestone.activities && milestone.activities.length > 0 && (
            <div className="mb-4">
              <p className="font-medium text-[var(--gh-fg-default)] mb-2">Leadership & Activities</p>
              <ul className="space-y-1 text-[var(--gh-fg-muted)]">
                {milestone.activities.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          )}

          {milestone.skills && milestone.skills.length > 0 && (
            <div className="mb-4">
              <p className="font-medium text-[var(--gh-fg-default)] mb-2">Skills Gained</p>
              <div className="flex flex-wrap gap-2">
                {milestone.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-[var(--gh-canvas-inset)] text-[var(--gh-fg-default)] rounded border border-[var(--gh-border-default)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {milestone.transcript && (
            <Link
              href={milestone.transcript.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-1 py-1 text-[var(--gh-accent-fg)] text-sm font-medium hover:text-[var(--gh-accent-emphasis)] transition-colors"
              style={{ cursor: "pointer" }}
            >
              {milestone.transcript.label}
            </Link>
          )}
        </div>

        {hasRightColumn && (
          <div>
            {milestone.associatedProjects && milestone.associatedProjects.length > 0 && (
              <div className="mb-4">
                <p className="font-medium text-[var(--gh-fg-default)] mb-3">Associated Projects</p>
                <div className="space-y-3">
                  {milestone.associatedProjects.map((project) => {
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
                          className="group relative block w-full overflow-hidden rounded-lg border border-[var(--gh-border-default)] bg-[var(--gh-canvas-default)] p-4 transition-all hover:border-[var(--gh-accent-emphasis)] hover:shadow-md hover:shadow-[var(--gh-accent-emphasis)]/20"
                        >
                          <div className="pointer-events-none absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[var(--gh-accent-emphasis)]/10 blur-2xl" />
                          <div className="relative">{projectBody}</div>
                        </Link>
                      );
                    }

                    return (
                      <button
                        key={project.title}
                        type="button"
                        onClick={() => onProjectClick?.(project)}
                        className="group relative block w-full overflow-hidden rounded-lg border border-[var(--gh-border-default)] bg-[var(--gh-canvas-default)] p-4 text-left transition-all hover:border-[var(--gh-accent-emphasis)] hover:shadow-md hover:shadow-[var(--gh-accent-emphasis)]/20"
                      >
                        <div className="pointer-events-none absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[var(--gh-accent-emphasis)]/10 blur-2xl" />
                        <div className="relative">{projectBody}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
}
