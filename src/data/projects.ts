export type PortfolioProject = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  repositoryUrl: string;
  caseStudyUrl: string;
  status: string;
};

export const projects:
  PortfolioProject[] = [
    {
      slug:
        "ap-path-planner",

      title:
        "AP Path Planner",

      description:
        "A full-stack academic planning platform for AP students.",

      longDescription:
        "AP Path Planner helps students manage courses, assignments, study sessions, grades, goals, calendars, and reminders in one application. The project includes authentication, private cloud data, automated testing, accessibility checks, and production deployment.",

      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Firebase",
        "Playwright",
        "Tailwind CSS",
        "GitHub Actions",
        "Vercel",
      ],

      image:
        "/projects/ap-path-planner/dashboard.webp",

      liveUrl:
        "",

      repositoryUrl:
        "https://github.com/Leart-Kaceli/AP-Path-Planner",

      caseStudyUrl:
        "/projects/ap-path-planner",

      status:
        "Deployed full-stack application",
    },
  ];