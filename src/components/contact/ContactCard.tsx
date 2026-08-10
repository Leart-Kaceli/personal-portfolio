import type {
  ReactNode,
} from "react";

type ContactCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function ContactCard({
  eyebrow,
  title,
  description,
  children,
}: ContactCardProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>

      <p className="mt-4 text-base leading-8 text-slate-600">
        {description}
      </p>

      <div className="mt-8">
        {children}
      </div>
    </section>
  );
}