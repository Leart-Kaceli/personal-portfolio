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
        "Languages used across web applications, embedded programming, and school programming projects.",

      skills: [
        "TypeScript",
        "JavaScript",
        "C++",
        "Java",
        "HTML",
        "CSS",
      ],
    },

    {
      title:
        "Web Development",

      description:
        "Tools and techniques used to build responsive, accessible, and full-stack web applications.",

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
        "Services used to manage user identity, cloud records, synchronization, and application data security.",

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
        "Tools used to verify application behavior, automate quality checks, and deploy production software.",

      skills: [
        "Vitest",
        "Playwright",
        "GitHub Actions",
        "Vercel",
        "Production Smoke Testing",
      ],
    },

    {
      title:
        "Hardware and Embedded Systems",

      description:
        "Skills developed while building physical computing projects with sensors, circuits, displays, and actuators.",

      skills: [
        "Arduino UNO R4 WiFi",
        "Arduino",
        "Embedded C++",
        "Analog Sensors",
        "16×2 LCD",
        "Breadboard Prototyping",
      ],
    },
  ];