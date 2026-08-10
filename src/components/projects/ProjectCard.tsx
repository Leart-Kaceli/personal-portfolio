import ProjectScreenshot from "@/components/projects/ProjectScreenshot";
import TechnologyTag from "@/components/projects/TechnologyTag";
import ButtonLink from "@/components/ui/ButtonLink";

import type {
  PortfolioProject,
} from "@/data/projects";

type ProjectCardProps = {
  project: PortfolioProject;
  priority?: boolean;
};

export default function ProjectCard({
  project,
  priority = false,
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <ProjectScreenshot
        src={project.image}
        alt={project.imageAlt}
        priority={priority}
      />

      <div className="p-6 sm:p-8 lg:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
          {project.status}
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {project.title}
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
          {project.description}
        </p>

        <dl className="mt-6 grid gap-4 border-y border-slate-200 py-6 sm:grid-cols-3">
  <div>
    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
      Project type
    </dt>

    <dd className="mt-2 font-bold text-slate-950">
      Full-stack web app
    </dd>
  </div>

  <div>
    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
      Primary audience
    </dt>

    <dd className="mt-2 font-bold text-slate-950">
      AP students
    </dd>
  </div>

  <div>
    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
      Current stage
    </dt>

    <dd className="mt-2 font-bold text-slate-950">
      Deployed
    </dd>
  </div>
</dl>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map(
            (
              technology,
            ) => (
              <TechnologyTag
                key={technology}
                name={technology}
              />
            ),
          )}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink
            href={
              project.caseStudyUrl
            }
          >
            Read Case Study
          </ButtonLink>

          {project.liveUrl ? (
            <ButtonLink
              href={
                project.liveUrl
              }
              external
              variant="secondary"
            >
              View Live Project
            </ButtonLink>
          ) : null}

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
  );
}