import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TechnologyTag from "@/components/projects/TechnologyTag";

import {
  skillCategories,
} from "@/data/skills";

export default function Skills() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Technical skills"
          title="Tools I use to build, test, and deploy software."
          description="My strongest experience comes from using these technologies in AP Path Planner and other programming projects."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map(
            (category) => (
              <SkillCard
                key={category.title}
                title={category.title}
                description={
                  category.description
                }
                skills={category.skills}
              />
            ),
          )}
        </div>
      </Container>
    </section>
  );
}

type SkillCardProps = {
  title: string;
  description: string;
  skills: string[];
};

function SkillCard({
  title,
  description,
  skills,
}: SkillCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-7">
      <h3 className="text-xl font-bold text-slate-950">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map(
          (skill) => (
            <TechnologyTag
              key={skill}
              name={skill}
            />
          ),
        )}
      </div>
    </article>
  );
}