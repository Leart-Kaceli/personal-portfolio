import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TechnologyTag from "@/components/projects/TechnologyTag";

import {
  projects,
} from "@/data/projects";

export default function FeaturedProject() {
  const project =
    projects[0];

  return (
    <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Featured project"
          title="A full-stack platform built for AP students."
          description="AP Path Planner combines academic planning, private cloud data, automated testing, and production deployment in one complete project."
        />

        <div className="mt-12 grid gap-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div className="flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-8">
            <ProjectMockup />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              {project.status}
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              {project.title}
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {project.longDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map(
                (technology) => (
                  <TechnologyTag
                    key={technology}
                    name={technology}
                  />
                ),
              )}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={project.caseStudyUrl}
              >
                Read Case Study
              </ButtonLink>

              {project.repositoryUrl ? (
                <ButtonLink
                  href={project.repositoryUrl}
                  external
                  variant="secondary"
                >
                  View Source Code
                </ButtonLink>
              ) : null}

              {project.liveUrl ? (
                <ButtonLink
                  href={project.liveUrl}
                  external
                  variant="secondary"
                >
                  View Live Project
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProjectMockup() {
  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl border border-slate-200 bg-slate-950 p-4 shadow-xl">
        <div className="flex items-center gap-2 border-b border-slate-700 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>

        <div className="grid gap-3 pt-4 sm:grid-cols-2">
          <MockupCard
            label="Courses"
            value="5 active"
          />

          <MockupCard
            label="Assignments"
            value="8 upcoming"
          />

          <MockupCard
            label="Study goal"
            value="6h weekly"
          />

          <MockupCard
            label="Progress"
            value="On track"
          />
        </div>

        <div className="mt-3 rounded-xl bg-slate-900 p-4">
          <p className="text-xs font-semibold text-slate-400">
            Upcoming assignment
          </p>

          <p className="mt-2 font-bold text-white">
            AP Calculus BC Review
          </p>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-700">
            <div className="h-full w-3/4 rounded-full bg-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

type MockupCardProps = {
  label: string;
  value: string;
};

function MockupCard({
  label,
  value,
}: MockupCardProps) {
  return (
    <div className="rounded-xl bg-slate-900 p-4">
      <p className="text-xs font-medium text-slate-400">
        {label}
      </p>

      <p className="mt-2 font-bold text-white">
        {value}
      </p>
    </div>
  );
}