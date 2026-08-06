import Link from "next/link";

import Container from "@/components/ui/Container";

const currentYear =
  new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-950 text-slate-300">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-lg font-bold text-white">
              Leart Kaceli
            </p>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
              High school software developer
              building practical full-stack
              applications with Next.js,
              TypeScript, React, Firebase, and
              modern testing tools.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold"
          >
            <Link
              href="/about"
              className="transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/projects"
              className="transition hover:text-white"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-white"
            >
              Contact
            </Link>

            <a
              href="https://github.com/Leart-Kaceli"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Leart Kaceli.
          </p>

          <p>
            Built with Next.js and TypeScript.
          </p>
        </div>
      </Container>
    </footer>
  );
}