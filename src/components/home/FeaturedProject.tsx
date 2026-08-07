import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TechnologyTag from "@/components/projects/TechnologyTag";
import Image from "next/image";

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
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
  <Image
    src={project.image}
    alt="AP Path Planner dashboard with upcoming assignments, course progress, study information, and summary cards."
    width={1440}
    height={900}
    className="h-full w-full object-cover"
    priority
  />
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
