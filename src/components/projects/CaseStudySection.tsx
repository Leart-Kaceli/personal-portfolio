import type {
  ReactNode,
} from "react";

type CaseStudySectionProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export default function CaseStudySection({
  eyebrow,
  title,
  children,
}: CaseStudySectionProps) {
  return (
    <section className="border-t border-slate-200 pt-14 first:border-t-0 first:pt-0">
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>

      <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
        {children}
      </div>
    </section>
  );
}