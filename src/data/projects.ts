import type { ProjectDetails } from "@/components/ProjectModal";

export const openSourceProjects: ProjectDetails[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio website showcasing my projects, experience, and skills.",
    fullDescription: `A modern, responsive personal portfolio website built with Next.js 16 and React 19. This portfolio showcases my professional journey, projects, education, and technical skills in an elegant and interactive design.

The website features a GitHub-inspired dark theme with smooth animations and transitions. It includes dedicated sections for featured projects with detailed case studies, work experience timeline, education background, and a contact form.

Key highlights:
• Server-side rendering for optimal performance and SEO
• Responsive design that works seamlessly across all devices
• Interactive project modals with embedded videos and image galleries
• Dark theme with custom CSS variables for consistent styling
• Contact form with email integration
• Clean, maintainable codebase with TypeScript

This portfolio serves as both a showcase of my work and a demonstration of my frontend development capabilities using modern web technologies.`,
    year: "2025-2026",
    association: "Personal Project",
    category: "Software",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    skills: [
      "Frontend Development",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX",
    ],
    features: [
      "Server-side rendering with Next.js 16",
      "Modern React 19 with latest features",
      "Fully responsive design",
      "GitHub-inspired dark theme",
      "Interactive project showcases with modals",
      "Contact form integration",
      "TypeScript for type safety",
    ],
    screenshots: 0,
    screenshotBasePath: "",
    links: {
      github: "https://github.com/Isuranga-2001/portfolio",
    },
  },
  {
    title: "University Course Advisor",
    description:
      "A desktop application that helps Sri Lankan A/L students find eligible university programs based on their stream, subjects, Z-score, and district.",
    fullDescription: `University Course Advisor is a desktop application designed to help Sri Lankan A/L students discover degree programs they are eligible for based on their academic profile.

The application uses a Prolog knowledge base for eligibility rules and cutoff Z-scores, combined with a modern Tkinter GUI in Python.

Key Features:
• Collects A/L stream, three subjects, Z-score, and district
• Queries a Prolog KB to determine programs you're eligible for
• Filter by interest area and optionally prioritize a university
• Shows recommendations ranked by your Z-score relative to district cutoffs

How it works:
• The knowledge base defines streams, subjects, programs with eligibility rules, and cutoff facts
• The app converts your selections to KB atoms and runs eligibility queries
• District-specific cutoffs are looked up and recommendations are sorted accordingly

Technical Stack:
• GUI: Python Tkinter
• Core Logic: PySWIP (Python-SWI-Prolog bridge)
• Knowledge Base: SWI-Prolog (kb.pl)

Data Sources: UGC Handbook 2024/2025 and UGC cutoff Z-scores 2024/2025`,
    year: "2025",
    association: "Academic Project",
    category: "Tool",
    technologies: ["Python", "Prolog", "Tkinter", "PySWIP"],
    skills: [
      "Python",
      "Prolog",
      "Knowledge Base Systems",
      "GUI Development",
      "Logic Programming",
    ],
    features: [
      "A/L stream and subject selection",
      "Z-score based eligibility calculation",
      "District-specific cutoff comparisons",
      "Interest area filtering",
      "University preference prioritization",
      "Comprehensive recommendations display",
    ],
    screenshots: 0,
    screenshotBasePath: "",
    links: {
      github: "https://github.com/Isuranga-2001/university-course-advisor",
    },
  },
  {
    title: "LOINC to FHIR Converter",
    description:
      "A specialized healthcare interoperability tool developed during my internship at WSO2, designed to map LOINC data to FHIR-compliant resources.",
    fullDescription: `Originally developed as an open-source project during my internship with the WSO2 Open Healthcare team, this tool bridges the gap between standardized clinical terminology and modern data exchange formats.

The project has reached a significant milestone and is now officially integrated with the WSO2 Ballerina Terminology Service. This integration allows for more robust, automated terminology lookups and mapping validations, making it a vital component in the open-healthcare prebuilt services ecosystem.

Key Features:
• Seamless transformation of LOINC observation data into FHIR R4/R5 Observation resources.
• Integration with Ballerina Terminology Service for enhanced code validation.
• Designed for high-performance clinical data pipeline environments.

How it works:
• Data Ingestion: Accepts clinical data associated with specific LOINC codes.
• Terminology Lookup: Leverages the Ballerina Terminology Service to validate and enrich the mapping process.
• Resource Generation: Outputs standardized JSON-based FHIR Observation resources ready for exchange across HAPI or other FHIR servers.

Technical Stack:
• Ballerina (Integration & Terminology)
• Java / Spring Boot
• FHIR / HL7 Standards
• Maven
`,
    year: "2025",
    association: "WSO2 (Associated with the Internship Project)",
    category: "Software | Healthcare Interoperability",
    technologies: ["Ballerina", "Java", "FHIR", "LOINC", "WSO2 Open Healthcare"],
    skills: [
      "Enterprise Integration",
      "Healthcare Standards",
      "Data Mapping",
      "Middleware Development",
    ],
    features: [
      "WSO2 Ballerina Terminology Integration",
      "LOINC-to-FHIR Resource Mapping",
      "Clinical Data Interoperability",
      "Open Source Contribution",
    ],
    screenshots: 0,
    screenshotBasePath: "",
    embeddedVideo: "",
    links: {
      github: "https://github.com/Isuranga-2001/LOINCtoFHIR",
      terminologyService:
        "https://github.com/wso2/open-healthcare-prebuilt-services/tree/main/miscellaneous/terminology-service",
    },
    note:
      "This project is a testament to the power of open-source collaboration in the healthcare sector, now serving as a prebuilt utility within WSO2's healthcare offerings.",
  },
  {
    title: "S3 to Google Drive",
    description:
      "A Node.js application to transfer files from AWS S3 bucket to Google Drive with folder creation and sharing capabilities.",
    fullDescription: `S3 to Google Drive is a Node.js application built with Express and TypeScript that enables seamless file transfer from AWS S3 buckets to Google Drive.

Key Features:
• Transfer files from an AWS S3 bucket to Google Drive
• Create folders in Google Drive programmatically
• Share folders with specific users via email
• List files from S3 bucket
• TypeScript for robust type-checking
• Express for building the server-side logic
• OAuth2 for Google Drive API integration

API Endpoints:
• POST /copy-files - Transfer specified files to a new Google Drive folder
• GET /list-files - List files from the configured S3 bucket

The application handles the entire workflow:
1. Creates a new folder in Google Drive
2. Downloads files from S3
3. Uploads them to the created folder
4. Optionally shares the folder with specified email addresses

Perfect for automated backup solutions or migrating data between cloud storage providers.`,
    year: "2024",
    association: "Personal Project",
    category: "Software",
    technologies: [
      "Node.js",
      "TypeScript",
      "Express",
      "AWS S3",
      "Google Drive API",
      "Docker",
    ],
    skills: [
      "Node.js",
      "TypeScript",
      "AWS SDK",
      "Google APIs",
      "Cloud Integration",
      "Docker",
    ],
    features: [
      "File transfer from S3 to Google Drive",
      "Automatic folder creation in Drive",
      "Folder sharing via email",
      "List S3 bucket contents",
      "Docker support for deployment",
      "RESTful API interface",
    ],
    screenshots: 0,
    screenshotBasePath: "",
    links: {
      github: "https://github.com/Isuranga-2001/s3-to-gdrive",
    },
  },
  {
    title: "Golang Microservice",
    description:
      "A microservices application demonstrating microservices architecture with API Gateway, Product Service, and Order Service using Go.",
    fullDescription: `Golang Microservice is a demonstration project showcasing microservices architecture principles using the Go programming language.

Architecture Components:

1. API Gateway (Port 8080)
   • Routes requests to appropriate microservices
   • Acts as the single entry point for all API calls
   • Implements reverse proxy pattern

2. Product Service (Port 8081)
   • Manages product catalog
   • CRUD operations for products and product types
   • PostgreSQL database integration with GORM

3. Order Service (Port 8082)
   • Handles order management
   • Manages order items with foreign key relationships
   • Separate database for order data

Key Features:
• Lightweight and fast microservices
• Easy to deploy and scale
• RESTful API design
• Database auto-migration with GORM
• Environment-based configuration
• Clean separation of concerns

Technologies:
• Go (Golang) for all services
• Gin framework for HTTP routing
• GORM for database ORM
• PostgreSQL for data persistence
• godotenv for environment management`,
    year: "2024",
    association: "Personal Project",
    category: "Software (Microservice)",
    technologies: ["Go", "Gin", "GORM", "PostgreSQL", "REST API"],
    skills: [
      "Go",
      "Microservices Architecture",
      "API Gateway",
      "Database Design",
      "REST APIs",
    ],
    features: [
      "API Gateway with reverse proxy",
      "Product Service with CRUD operations",
      "Order Service with order management",
      "PostgreSQL integration with GORM",
      "Environment-based configuration",
      "Auto database migration",
    ],
    screenshots: 0,
    screenshotBasePath: "",
    links: {
      github: "https://github.com/Isuranga-2001/golang-microservice",
    },
  },
];

export const otherProjects: ProjectDetails[] = [
  {
    title: "Air Quality Monitoring System",
    description:
      "IoT-based indoor air quality monitoring system with real-time data visualization and alerts.",
    fullDescription: `An IoT-based indoor air quality monitoring system. This project is inspired by the need to help people working in factories or laboratories that can produce unhealthy air. Many people do not care or are not aware of the impact of air quality on their health and productivity. Managers also do not clearly understand the variation in air quality in their workplace.

Therefore, we developed a system that informs managers and employees about the variations in air quality using high-precision sensors and a web application.

Our system consists of a set of air quality monitoring devices that can be placed in different locations in the indoor area. The devices measure temperature, humidity, air pressure, CO2, and TVOC levels using high-quality sensors and send the data to a Firebase real-time database via WIFI or Ethernet. The user can access the data from any device using a web application that displays the live readings and the historical trends of the air quality parameters. The user can also manage multiple monitoring devices under his/her username and customize the settings and alerts according to his/her preferences.

Our project can help improve the health and well-being of workers and create a safer and more comfortable indoor environment. By monitoring and analyzing indoor air quality, the user can identify the sources of pollution, take action to reduce them, and optimize the ventilation and temperature control systems. Our project also has potential applications in other indoor settings such as schools, hospitals, offices, homes, etc.

Sensors:
• ESP32 doit devkit v1 (Main microcontroller)
• SGP30 - Air quality (CO2 and TVOC)
• BMP280 - Air Pressure
• SHTC3 - Humidity Sensor
• DS18B20 - Temperature Sensor
• ENC28J60 - Ethernet Module
• RTC and SD card module`,
    year: "2022 - 2023",
    association: "University of Moratuwa",
    category: "Hardware",
    technologies: ["Node.js", "Firebase", "MQTT", "ESP32", "IoT Sensors"],
    skills: [
      "Problem Solving",
      "Web Application Development",
      "Internet of Things (IoT)",
      "Air Quality Analysis",
      "Node.js",
      "MQTT",
      "Firebase",
    ],
    features: [
      "Real-time air quality monitoring with high-precision sensors",
      "Multi-device management under single user account",
      "Historical data trends and analysis",
      "Customizable settings and alerts",
      "WIFI and Ethernet connectivity options",
      "Web application for remote monitoring",
    ],
    screenshots: 5,
    screenshotBasePath: "/projects/other/air-quality",
    links: {
      github: "https://github.com/Isuranga-2001/AirQualityMonitor",
    },
  },
  {
    title: "Guardian of Crystals",
    description:
      "A 2D desktop game developed using Unity Engine featuring moving platforms, enemy attacks, and power boosters.",
    fullDescription: `Guardian of Crystals is a 2D desktop game developed using Unity Engine and C#.

This game was created for a competition organized by the Ceylon School of Game Development.

Features:
• Easy player controller using arrow keys
• Moving Platforms
• Enemy Attacks
• Power Boosters

The game challenges players to navigate through levels while protecting crystals from enemies, using various power-ups to enhance their abilities.`,
    year: "2022",
    association:
      "Game Jam Competition of Ceylon School of Game Development (CSGD)",
    category: "Game",
    technologies: ["Unity", "C#"],
    skills: ["C#", "Game Development", "Unity"],
    features: [
      "Easy player controller using arrow keys",
      "Dynamic moving platforms",
      "Enemy attack system",
      "Power boosters and collectibles",
    ],
    screenshots: 5,
    screenshotBasePath: "/projects/other/guardian-of-crystals",
    embeddedVideo: "https://www.youtube.com/embed/ZDLM9fENVQk",
    links: {
      download: "https://1drv.ms/f/s!AgnqoJJfwrJBlckOFW-bBxkyfDpUNg?e=i035z0",
    },
  },
  {
    title: "KMC Water Department System",
    description:
      "Desktop application for project management and water quality tracking for KMC Water Department.",
    fullDescription: `Desktop application for KMC Water Department.

Overview: Developed a comprehensive desktop application tailored for the KMC Water Department to transition from manual to digital project management and water quality tracking.

Key Features:

1. Project Management:
Implemented a robust system to oversee KMC's water-related projects. The application offers weekly progress tracking and report generation, aiding staff in understanding project statuses, optimizing resource allocation, and pinpointing causes of project delays.

2. Water Quality Monitoring:
Established a daily monitoring protocol for KMC's three water treatment plants. The application evaluates 10 critical water quality parameters, ensuring consistent tracking and facilitating future report generation.`,
    year: "2021",
    association: "Self Employed (Freelance)",
    category: "Software (Desktop App)",
    technologies: [".NET Framework", "C#", "Windows Forms", "MSSQL"],
    skills: [
      "Problem Solving",
      "C#",
      "Software Design",
      ".NET Framework",
      "Software Development",
      "Visual Studio",
      "MSSQL",
      "Desktop Application Development",
    ],
    features: [
      "Project management for water-related projects",
      "Weekly progress tracking and report generation",
      "Daily water quality monitoring for 3 treatment plants",
      "Evaluation of 10 critical water quality parameters",
      "Resource allocation optimization",
      "Project delay analysis",
    ],
    screenshots: 7,
    screenshotBasePath: "/projects/freelance/kmc-water",
  },
  {
    title: "MASL Digana Expenditure System",
    description:
      "Desktop application for generating monthly expenditure reports for MASL Digana office.",
    fullDescription: `A desktop application to generate the monthly expenditure reports of Digana MASL office account section.

In this project, get daily updates about expenditures and analyze them to create monthly reports and export them as an MS Excel file for office work.

Technologies:
• C#
• .NET Framework
• GitHub
• Windows Form Applications`,
    year: "2021",
    association: "Self Employed (Freelance)",
    category: "Software (Desktop App)",
    technologies: ["C#", ".NET Framework", "Windows Forms", "GitHub"],
    skills: [
      "Problem Solving",
      "C#",
      "Software Design",
      "Software Development",
      "Visual Studio",
      "MSSQL",
      "Desktop Application Development",
    ],
    features: [
      "Daily expenditure tracking",
      "Monthly report generation",
      "Export reports to MS Excel",
      "Account section management",
    ],
    screenshots: 3,
    screenshotBasePath: "/projects/freelance/masl-digana",
    links: {
      github:
        "https://github.com/Isuranga-2001/MASL-Monthly-Capital-Expenditure-Statement",
    },
    note: "Project was discontinued. Source code shared with permission from the client.",
  },
  {
    title: "NeXCal",
    description:
      "Advanced calculator with floating point operations for binary, octal, decimal, and hexadecimal numbers.",
    fullDescription: `NeXCal is a calculator I developed to add some additional features that are not in Window's default calculator. This calculator can perform floating point operations for binary, octal, decimal, and hexadecimal numbers rather than basic calculations.

The specialty is the Windows default calculator can't perform these type of operations. Then users need to use online platforms to do floating point calculations. But there are no offline solutions for it. Therefore I developed this calculator to perform offline calculations according to my school ICT teacher's guidelines.

The main calculations that NexCal can perform:
• Basic arithmetic operations
• Unit conversion
• Number system conversion
• Arithmetic operations for binary, octal, decimal, and hexadecimal numbers

I released this application for three different platforms using different codebases:
1. As a desktop application -> Developed using .NET Framework 4.8
2. As a mobile application -> Developed using Xamarin.NET Framework
3. As a UWP (Universal Windows Platform) Application -> Developed using UWP application template`,
    year: "2019",
    association: "St. Sylvester's College",
    category: "Tool",
    technologies: ["C#", ".NET Framework 4.8", "Xamarin", "UWP", "WinForms"],
    skills: [
      "C#",
      "Xamarin",
      ".NET Framework",
      "WinForms",
      "Visual Studio",
      "Desktop Application Development",
    ],
    features: [
      "Basic arithmetic operations",
      "Unit conversion",
      "Number system conversion (Binary, Octal, Decimal, Hexadecimal)",
      "Floating point operations for all number systems",
      "Available on Desktop, Mobile, and UWP platforms",
      "Offline calculations",
    ],
    screenshots: 3,
    screenshotBasePath: "/projects/other/nexcal",
  },
  {
    title: "QuizDesigner",
    description:
      "Desktop application for organizing offline quiz competitions with up to three rounds and 30 questions per round.",
    fullDescription: `QuizDesigner is a desktop application that I developed for organizing offline quizzes in school events. This application can organize a quiz with up to three rounds which contain a maximum of 30 questions per round.

User can customize the number of rounds, questions, answers, and teams as they desire. Also, this application facilitates saving each quiz as a profile on the local machine. This application helped me to successfully complete quiz competitions in school.

QuizDesigner was used in the following events in St. Sylvester's College Kandy:
• Annual ICT Day Quiz Competition 2019
• Annual Science Day Quiz Competition 2018
• Annual Science Day Quiz Competition 2019
• Annual Astronomical Day Quiz Competition 2019
• Annual Technology Day Quiz Competition 2018
• Annual Technology Day Quiz Competition 2019

Technologies that used in this application:
• C# with .NET Framework
• StreamReader Library`,
    year: "2018-2019",
    association: "St. Sylvester's College",
    category: "Tool",
    technologies: ["C#", ".NET Framework", "StreamReader"],
    skills: [
      "Problem Solving",
      "C#",
      "Visual Studio",
      "Desktop Application Development",
    ],
    features: [
      "Support for up to three quiz rounds",
      "Maximum 30 questions per round",
      "Customizable rounds, questions, answers, and teams",
      "Save quizzes as profiles locally",
      "Used in multiple school competitions",
    ],
    screenshots: 3,
    screenshotBasePath: "/projects/other/quizdesigner",
  },
];

export const modalProjects: ProjectDetails[] = [
  ...openSourceProjects,
  ...otherProjects,
];

export const getProjectByTitle = (title: string): ProjectDetails | undefined =>
  modalProjects.find((project) => project.title === title);

export type EducationMilestoneProject = {
  title: string;
  context: string;
  actionType: "modal" | "route";
  href?: string;
  projectTitle?: string;
};

export const bscAssociatedProjects: EducationMilestoneProject[] = [
   {
    title: "Air Quality Monitoring System",
    context: "Level 01 Hardware Project",
    actionType: "modal",
    projectTitle: "Air Quality Monitoring System",
  },
  {
    title: "FirstStep (A Job Matching Platform)",
    context: "Level 02 Software Project",
    actionType: "route",
    href: "/projects/firststep",
  },
  {
    title: "ITW Computers (Microservices-based POS System)",
    context: "Enterprise Application Development (Level 03)",
    actionType: "route",
    href: "/projects/itw-computers",
  },
  {
    title: "University Course Advisor (An Expert System)",
    context:
      "Logic Programming and Artifical Cognitive Systems (Level 3)",
    actionType: "modal",
    projectTitle: "University Course Advisor",
  },
];

export const schoolAssociatedProjects: EducationMilestoneProject[] = [
  {
    title: "QuizDesigner",
    context: "School Project",
    actionType: "modal",
    projectTitle: "QuizDesigner",
  },
  {
    title: "NeXCal",
    context: "School Project",
    actionType: "modal",
    projectTitle: "NeXCal",
  },
];
