const timelineItems = [
  {
    year:
      "2025",

    title:
      "Growing programming skills",

    description:
      "Strengthened my programming foundation through Java, web development, and increasingly complex technical projects.",
  },

  {
    year:
      "2026",

    title:
      "Built AP Path Planner",

    description:
      "Designed and developed a full-stack academic planning application for AP students.",
  },

  {
    year:
      "2026",

    title:
      "Added authentication and cloud data",

    description:
      "Implemented Firebase Authentication, Cloud Firestore, per-user data, and Firestore Security Rules.",
  },

  {
    year:
      "2026",

    title:
      "Expanded testing and reliability",

    description:
      "Added unit tests, Firestore Rules tests, browser testing, accessibility checks, emulator testing, and deployed smoke tests.",
  },

  {
    year:
      "2026",

    title:
      "Production deployment",

    description:
      "Deployed the application through Vercel and worked through production configuration, monitoring, and deployment verification.",
  },

  {
    year:
      "Next",

    title:
      "Continue building",

    description:
      "Improve AP Path Planner based on real user feedback while developing additional software projects.",
  },
];

export default function Timeline() {
  return (
    <ol className="relative border-l border-slate-200 pl-8">
      {timelineItems.map(
        (
          item,
          index,
        ) => (
          <li
            key={`${item.year}-${item.title}`}
            className={
              index ===
              timelineItems.length - 1
                ? ""
                : "pb-10"
            }
          >
            <span
              aria-hidden="true"
              className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full border-4 border-white bg-blue-600"
            />

            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
              {item.year}
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-950">
              {item.title}
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              {item.description}
            </p>
          </li>
        ),
      )}
    </ol>
  );
}