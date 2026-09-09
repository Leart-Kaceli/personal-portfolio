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
              Student Developer · Software + Embedded Systems
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              I build systems that connect ideas, code, and real-world problems.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              I am a high school student interested in software, computing, electronics, and the systems that connect them. My projects range from full-stack web applications to Arduino-based hardware and embedded systems.
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
                  Main software project
                </dt>

                <dd className="mt-1 font-bold text-slate-950">
                  AP Path Planner
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-slate-500">
                  Hardware project
                </dt>

                <dd className="mt-1 font-bold text-slate-950">
                  Smart Room Controller
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-slate-500">
                  Current focus
                </dt>

                <dd className="mt-1 font-bold text-slate-950">
                  Software + embedded systems
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
                  current-projects.ts
                </span>
              </div>

              <div className="space-y-5 pt-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                    Current builds
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-slate-950">
                    Software + Hardware
                  </h2>
                </div>

                <p className="text-sm leading-7 text-slate-600">
                  I am continuing to improve AP Path Planner from real user feedback while expanding into embedded systems through an Arduino Smart Room Environmental Controller.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <HeroStat
                    label="Web"
                    value="Next.js"
                  />

                  <HeroStat
                    label="Cloud"
                    value="Firebase"
                  />

                  <HeroStat
                    label="Embedded"
                    value="Arduino"
                  />

                  <HeroStat
                    label="Hardware code"
                    value="C++"
                  />
                </div>

                <ButtonLink
                  href="/projects"
                  variant="secondary"
                >
                  Explore the Projects
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