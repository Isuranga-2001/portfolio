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
    title: "FirstStep",
    description:
      "A comprehensive recruitment platform with skill-matching algorithms, interview scheduling, and automated deployment via Azure.",
    technologies: ["ASP.NET Core", "Angular", "MSSQL", "Azure", "Entity Framework"],
    category: "Software (RESTful)",
    date: "2023 - 2024",
    href: "/projects/firststep",
  },
  {
    title: "ITW Computers",
    description:
      "A microservices-based online retail shop featuring multi-language services and a full CI/CD pipeline.",
    technologies: ["Go", "Spring Boot", "Node.js", "Next.js", "Docker", "AWS"],
    category: "Software (Microservice)",
    date: "2024",
    href: "/projects/itw-computers",
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
