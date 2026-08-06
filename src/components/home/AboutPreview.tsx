import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const approachItems = [
  {
    title:
      "Practical purpose",

    description:
      "I prefer projects that solve a real problem or make a difficult task easier.",
  },

  {
    title:
      "Complete process",

    description:
      "I work through planning, interface design, implementation, testing, debugging, deployment, and improvement.",
  },

  {
    title:
      "Reliability",

    description:
      "I value software that behaves consistently, protects user data, and remains understandable to users.",
  },
];

export default function AboutPreview() {
  return (
    <section className="border-t border-slate-200 bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="About me"
              title="Learning through complete software projects."
              description="I am a high school student interested in computer science and software engineering. I enjoy building full-stack applications and learning through real development challenges."
            />

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Building AP Path Planner taught me that software development involves much more than creating an interface. I also had to think about database structure, user privacy, authentication, accessibility, automated testing, deployment, and long-term reliability.
            </p>

            <div className="mt-8">
              <ButtonLink
                href="/about"
                variant="secondary"
              >
                More About Me
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4">
            {approachItems.map(
              (
                item,
                index,
              ) => (
                <ApproachCard
                  key={item.title}
                  number={
                    index + 1
                  }
                  title={item.title}
                  description={
                    item.description
                  }
                />
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

type ApproachCardProps = {
  number: number;
  title: string;
  description: string;
};

function ApproachCard({
  number,
  title,
  description,
}: ApproachCardProps) {
  return (
    <article className="flex gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
        {number}
      </div>

      <div>
        <h3 className="text-lg font-bold text-slate-950">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          {description}
        </p>
      </div>
    </article>
  );
}