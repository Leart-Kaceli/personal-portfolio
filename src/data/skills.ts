export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories:
  SkillCategory[] = [
    {
      title:
        "Languages",

      skills: [
        "TypeScript",
        "JavaScript",
        "Java",
        "HTML",
        "CSS",
      ],
    },

    {
      title:
        "Frontend",

      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },

    {
      title:
        "Backend and Data",

      skills: [
        "Firebase Authentication",
        "Cloud Firestore",
        "Firestore Security Rules",
      ],
    },

    {
      title:
        "Testing and Deployment",

      skills: [
        "Vitest",
        "Playwright",
        "GitHub Actions",
        "Vercel",
      ],
    },
  ];