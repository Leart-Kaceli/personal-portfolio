type ApproachCardProps = {
  number: string;
  title: string;
  description: string;
};

export default function ApproachCard({
  number,
  title,
  description,
}: ApproachCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
          {number}
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-950">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}