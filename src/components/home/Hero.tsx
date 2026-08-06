import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_55%)]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              High School Software Developer
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              I build software that solves real problems.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              I am a high school student interested in computer science and software engineering. I build full-stack applications that solve practical problems, especially tools related to education and student productivity.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/projects">
                View My Projects
              </ButtonLink>

              <ButtonLink
                href="https://github.com/Leart-Kaceli"
                external
                variant="secondary"
                ariaLabel="View Leart Kaceli's GitHub profile"
              >
                View GitHub
              </ButtonLink>
            </div>

            <dl className="mt-10 grid max-w-2xl gap-5 border-t border-slate-200 pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-sm font-medium text-slate-500">
                  Main project
                </dt>

                <dd className="mt-1 font-bold text-slate-950">
                  AP Path Planner
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-slate-500">
                  Primary stack
                </dt>

                <dd className="mt-1 font-bold text-slate-950">
                  Next.js + Firebase
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-slate-500">
                  Current focus
                </dt>

                <dd className="mt-1 font-bold text-slate-950">
                  Full-stack development
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:justify-self-end">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />

                <span className="ml-3 text-xs font-medium text-slate-500">
                  current-project.ts
                </span>
              </div>

              <div className="space-y-5 pt-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                    Featured build
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-slate-950">
                    AP Path Planner
                  </h2>
                </div>

                <p className="text-sm leading-7 text-slate-600">
                  A full-stack academic planning platform that helps students manage courses, assignments, study sessions, grades, calendars, goals, and reminders.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <HeroStat
                    label="Frontend"
                    value="Next.js"
                  />

                  <HeroStat
                    label="Language"
                    value="TypeScript"
                  />

                  <HeroStat
                    label="Database"
                    value="Firestore"
                  />

                  <HeroStat
                    label="Testing"
                    value="Playwright"
                  />
                </div>

                <ButtonLink
                  href="/projects/ap-path-planner"
                  variant="secondary"
                >
                  Read the Case Study
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

type HeroStatProps = {
  label: string;
  value: string;
};

function HeroStat({
  label,
  value,
}: HeroStatProps) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <p className="text-xs font-medium text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold text-slate-950">
        {value}
      </p>
    </div>
  );
}