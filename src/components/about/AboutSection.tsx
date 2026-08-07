import type {
  ReactNode,
} from "react";

type AboutSectionProps = {
  title: string;
  children: ReactNode;
};

export default function AboutSection({
  title,
  children,
}: AboutSectionProps) {
  return (
    <section className="border-t border-slate-200 pt-10 first:border-t-0 first:pt-0">
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>

      <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
        {children}
      </div>
    </section>
  );
}