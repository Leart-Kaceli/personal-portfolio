export type PortfolioProject = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  liveUrl: string;
  repositoryUrl: string;
  caseStudyUrl: string;
  status: string;
  featured: boolean;
  projectType: string;
  audience: string;
  stage: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: "ap-path-planner",

    title: "AP Path Planner",

    shortDescription:
      "A full-stack academic planning platform for AP students.",

    description:
      "AP Path Planner helps students manage courses, assignments, study sessions, grades, goals, calendars, and reminders in one application. After launching the project publicly, I began collecting real user feedback and shipping improvements based on how students interact with the platform.",

    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firestore Security Rules",
      "Playwright",
      "Tailwind CSS",
      "GitHub Actions",
      "Vercel",
    ],

    image:
      "/projects/ap-path-planner/dashboard.webp",

    imageAlt:
      "AP Path Planner dashboard with upcoming assignments, course progress, study information, and academic summary cards.",

    liveUrl:
      "https://ap-path-planner.vercel.app",

    repositoryUrl:
      "https://github.com/Leart-Kaceli/AP-Path-Planner",

    caseStudyUrl:
      "/projects/ap-path-planner",

    status:
      "Full-stack web application",

    featured: true,

    projectType:
      "Full-stack web app",

    audience:
      "AP students",

    stage:
      "Launched & iterating",
  },

  {
    slug: "smart-room-controller",

    title:
      "Smart Room Environmental Controller",

    shortDescription:
      "An Arduino-based environmental automation system combining sensors, control logic, and physical outputs.",

    description:
      "Built with an Arduino UNO R4 WiFi, the Smart Room Environmental Controller monitors temperature and ambient light and automatically responds using lighting and fan control. The project also uses a 16×2 LCD to display environmental and system information.",

    technologies: [
      "Arduino UNO R4 WiFi",
      "C++",
      "Embedded Systems",
      "Analog Sensors",
      "16×2 LCD",
      "Breadboard Prototyping",
    ],

    image:
      "/projects/smart-room-controller/hero.jpg",

    imageAlt:
      "Arduino UNO R4 WiFi Smart Room Environmental Controller assembled with sensors, breadboard components, LCD, and control hardware.",

    liveUrl: "",

    repositoryUrl:
      "https://github.com/Leart-Kaceli/smart-room-environment-controller",

    caseStudyUrl:
      "/projects/smart-room-controller",

    status:
      "Embedded systems project",

    featured: true,

    projectType:
      "Embedded system",

    audience:
      "Hardware learning project",

    stage:
      "Completed prototype",
  },
];