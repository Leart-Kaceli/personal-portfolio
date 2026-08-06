type TechnologyTagProps = {
  name: string;
};

export default function TechnologyTag({
  name,
}: TechnologyTagProps) {
  return (
    <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
      {name}
    </span>
  );
}