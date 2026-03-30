export interface FeaturedProject {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  date: string;
  href: string;
  liveLink?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Hybrid Sign Language Recognition Framework",
    description:
      "Award-winning IEEE conference research proposing a hybrid neuro-symbolic framework for linguistically complete ASL recognition.",
    technologies: [
      "Computer Vision",
      "Transformer",
      "Sensor Fusion",
      "FSM",
      "ASL",
    ],
    category: "Research (IEEE)",
    date: "2025 - 2026",
    href: "/projects/sign-lang",
  },
  {
    title: "FirstStep",
    description:
      "A comprehensive recruitment platform with skill-matching algorithms, interview scheduling, and automated deployment via Azure.",
    technologies: ["ASP.NET Core", "Angular", "MSSQL", "Azure", "Entity Framework"],
    category: "Software (RESTful)",
    date: "2023 - 2024",
    href: "/projects/firststep",
  },
  {
    title: "Internify",
    description:
      "An internship tracking platform for IT undergraduates to discover opportunities and manage CVs.",
    technologies: ["Express", "PostgreSQL", "AWS S3", "AWS EC2"],
    category: "Software (RESTful)",
    date: "2024",
    href: "/projects/internify",
    liveLink: "https://internifyfit.com/",
  },
];
