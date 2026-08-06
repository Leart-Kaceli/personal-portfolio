export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories:
  SkillCategory[] = [
    {
      title:
        "Languages",

      description:
        "Languages used to build interfaces, application logic, and school programming projects.",

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
        "Frontend Development",

      description:
        "Tools and techniques used to create responsive and accessible interfaces.",

      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Responsive Design",
        "Accessible UI",
      ],
    },

    {
      title:
        "Authentication and Data",

      description:
        "Services used to manage user identity, cloud records, synchronization, and data security.",

      skills: [
        "Firebase Authentication",
        "Cloud Firestore",
        "Firestore Security Rules",
        "Firebase Emulator Suite",
      ],
    },

    {
      title:
        "Testing and Deployment",

      description:
        "Tools used to verify application behavior and deploy reliable production builds.",

      skills: [
        "Vitest",
        "Playwright",
        "GitHub Actions",
        "Vercel",
        "Production Smoke Testing",
      ],
    },
  ];