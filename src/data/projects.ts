export type PortfolioProject = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  repositoryUrl: string;
};

export const projects:
  PortfolioProject[] = [
    {
      slug:
        "ap-path-planner",

      title:
        "AP Path Planner",

      description:
        "A full-stack academic planning platform that helps AP students manage courses, assignments, study sessions, grades, goals, calendars, and reminders.",

      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Firebase",
        "Playwright",
        "Tailwind CSS",
        "Vercel",
      ],

      image:
        "/projects/ap-path-planner/dashboard.webp",

      liveUrl:
        "",

      repositoryUrl:
        "",
    },
  ];