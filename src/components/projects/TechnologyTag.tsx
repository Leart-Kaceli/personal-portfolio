type TechnologyTagProps = {
  name: string;
};

export default function TechnologyTag({
  name,
}: TechnologyTagProps) {
  return (
    <span>
      {name}
    </span>
  );
}