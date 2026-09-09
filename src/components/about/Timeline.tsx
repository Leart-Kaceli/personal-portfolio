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
      "Expanded testing and deployment",

    description:
      "Added authentication, private cloud data, Firestore Security Rules, automated browser testing, accessibility checks, continuous integration, and production deployment.",
  },

  {
    year:
      "2026",

    title:
      "Launched and began iterating",

    description:
      "Shared AP Path Planner publicly, reached early users, collected feedback, and shipped course color-coding as a user-inspired improvement.",
  },

  {
    year:
      "2026",

    title:
      "Started building with hardware",

    description:
      "Completed an Arduino UNO R4 WiFi Smart Room Environmental Controller using sensors, a display, a DC motor, and embedded C++.",
  },

  {
    year:
      "Next",

    title:
      "Continue building across software and hardware",

    description:
      "Keep improving AP Path Planner while exploring embedded systems, electronics, and projects that connect software with the physical world.",
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