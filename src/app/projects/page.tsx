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
    "Explore my software projects, including AP Path Planner, a full-stack academic planning platform built with Next.js, TypeScript, Firebase, and Playwright.",
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
            title="Projects built to solve practical problems."
            description="I use projects to learn the full development process, from planning and interface design to authentication, testing, security, accessibility, and production deployment."
          />
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Featured project
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              My most complete software project.
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              AP Path Planner combines front-end development, authentication, private cloud data, database security, automated testing, accessibility, continuous integration, and production deployment.
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
                More work
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Additional projects will be added when they reach the same standard.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                I would rather document a smaller number of complete projects than fill this portfolio with unfinished demos. Future projects will be added after they are tested, documented, and ready to show publicly.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold text-slate-950">
                What I look for in a portfolio project
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <li>
                  A clear problem or purpose
                </li>

                <li>
                  Meaningful technical challenges
                </li>

                <li>
                  A complete working version
                </li>

                <li>
                  Testing and reliability
                </li>

                <li>
                  Clear documentation
                </li>

                <li>
                  Something I can continue improving
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
                Want to see how AP Path Planner was built?
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Read the case study for the architecture, testing strategy, technical challenges, and lessons behind the project.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
              <ButtonLink
                href="/projects/ap-path-planner"
              >
                Read Case Study
              </ButtonLink>

              <ButtonLink
                href="/contact"
                variant="secondary"
              >
                Contact Me
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}