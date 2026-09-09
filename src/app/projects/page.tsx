import type {
  Metadata,
} from "next";

import ProjectCard from "@/components/projects/ProjectCard";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

import {
  projects,
} from "@/data/projects";

export const metadata:
  Metadata = {
  title:
    "Projects",

  description:
    "Explore my full-stack software and embedded systems projects, including AP Path Planner and an Arduino Smart Room Environmental Controller.",
};

export default function ProjectsPage() {
  const featuredProjects =
    projects.filter(
      (
        project,
      ) =>
        project.featured,
    );

  return (
    <main>
      <section className="py-16 sm:py-24">
        <Container>
          <PageHeader
            eyebrow="My work"
            title="Projects built to solve problems and explore how systems work."
            description="My projects range from full-stack web applications to embedded systems, giving me experience with software architecture, testing, deployment, sensors, circuits, and hardware-software integration."
          />
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Featured work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Two projects, two different parts of computing.
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              AP Path Planner explores full-stack product development, cloud data, security, testing, deployment, and feedback-driven iteration. The Smart Room Environmental Controller extends that learning into embedded C++, sensors, circuits, displays, and physical outputs.
            </p>
          </div>

          <div className="space-y-10">
            {featuredProjects.map(
              (
                project,
                index,
              ) => (
                <ProjectCard
                  key={
                    project.slug
                  }
                  project={
                    project
                  }
                  priority={
                    index ===
                    0
                  }
                />
              ),
            )}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                What I value
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                I use projects to learn beyond the visible result.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Whether I am debugging a browser test or tracing a physical circuit, I try to understand why a system behaves the way it does instead of stopping when the first version works.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold text-slate-950">
                What I look for in a project
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>
                  A clear problem or learning goal
                </li>

                <li>
                  Meaningful technical challenges
                </li>

                <li>
                  A complete working version
                </li>

                <li>
                  Testing or structured verification
                </li>

                <li>
                  Clear documentation
                </li>

                <li>
                  Lessons that influence the next project
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="rounded-3xl bg-slate-950 px-6 py-12 text-white shadow-xl sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
                Explore further
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                Explore the software and hardware behind the projects.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Read the case studies for the architecture, implementation, debugging challenges, testing, and lessons behind each project.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
              <ButtonLink
                href="/projects/ap-path-planner"
              >
                AP Path Planner
              </ButtonLink>

              <ButtonLink
                href="/projects/smart-room-controller"
                variant="secondary"
              >
                Smart Room
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}