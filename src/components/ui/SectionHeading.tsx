type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div>
      {eyebrow ? (
        <p>{eyebrow}</p>
      ) : null}

      <h2>
        {title}
      </h2>

      {description ? (
        <p>
          {description}
        </p>
      ) : null}
    </div>
  );
}