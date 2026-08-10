import type {
  ReactNode,
} from "react";

type ContactMethodProps = {
  label: string;
  value: string;
  description: string;
  action: ReactNode;
};

export default function ContactMethod({
  label,
  value,
  description,
  action,
}: ContactMethodProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
        {label}
      </p>

      <h2 className="mt-3 break-words text-xl font-bold text-slate-950">
        {value}
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-6">
        {action}
      </div>
    </article>
  );
}