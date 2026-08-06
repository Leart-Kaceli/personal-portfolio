import Link from "next/link";

import Container from "@/components/ui/Container";

const navigationItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-3 font-bold text-slate-950"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm text-white shadow-sm">
              LK
            </span>

            <span className="hidden sm:inline">
              Leart Kaceli
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="flex items-center gap-1 sm:gap-2"
          >
            {navigationItems.map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 sm:px-4"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
}