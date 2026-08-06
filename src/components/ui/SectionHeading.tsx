type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignmentClasses =
    align === "center"
      ? "mx-auto text-center"
      : "";

  return (
    <div
      className={`max-w-3xl ${alignmentClasses}`}
    >
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}