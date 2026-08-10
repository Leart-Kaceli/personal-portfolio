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
};

export const projects:
  PortfolioProject[] = [
    {
      slug:
        "ap-path-planner",

      title:
        "AP Path Planner",

      shortDescription:
        "A full-stack academic planning platform for AP students.",

      description:
        "AP Path Planner helps students manage courses, assignments, study sessions, grades, goals, calendars, and reminders in one application. The project includes authentication, private cloud data, Firestore Security Rules, automated testing, accessibility checks, and production deployment.",

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
        "Deployed full-stack application",

      featured:
        true,
    },
  ];