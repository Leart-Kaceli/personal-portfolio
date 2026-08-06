import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonLinkProps) {
  const baseClasses =
    "inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200";

  const variantClasses = {
    primary:
      "bg-blue-600 text-white shadow-sm hover:bg-blue-700",
    secondary:
      "border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50",
    text:
      "px-0 text-blue-700 hover:text-blue-800 hover:underline",
  };

  const className =
    `${baseClasses} ${variantClasses[variant]}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
    >
      {children}
    </Link>
  );
}