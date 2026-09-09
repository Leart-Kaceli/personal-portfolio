import Image from "next/image";

import TechnologyTag from "@/components/projects/TechnologyTag";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import {
  projects,
} from "@/data/projects";

export default function FeaturedProject() {
  const featuredProjects =
    projects.filter(
      (
        project,
      ) =>
        project.featured,
    );

  return (
    <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Featured projects"
          title="Building across software and hardware."
          description="My projects let me explore different parts of computing, from full-stack applications and production testing to sensors, circuits, and embedded control systems."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map(
            (
              project,
              index,
            ) => (
              <article
                key={project.slug}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm"
              >
                <div className="overflow-hidden border-b border-slate-200 bg-white">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1440}
                    height={900}
                    priority={
                      index === 0
                    }
                    className="h-auto w-full"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                    {project.status}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {project.shortDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies
                      .slice(
                        0,
                        5,
                      )
                      .map(
                        (
                          technology,
                        ) => (
                          <TechnologyTag
                            key={
                              technology
                            }
                            name={
                              technology
                            }
                          />
                        ),
                      )}
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <ButtonLink
                      href={
                        project.caseStudyUrl
                      }
                    >
                      Read Case Study
                    </ButtonLink>

                    {project.repositoryUrl ? (
                      <ButtonLink
                        href={
                          project.repositoryUrl
                        }
                        external
                        variant="secondary"
                      >
                        View Source Code
                      </ButtonLink>
                    ) : null}
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}