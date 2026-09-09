import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const approachItems = [
  {
    title:
      "Practical purpose",

    description:
      "I prefer projects that solve a real problem or help me understand how a system works.",
  },

  {
    title:
      "Complete process",

    description:
      "I work through planning, implementation, testing, debugging, documentation, and improvement.",
  },

  {
    title:
      "Learning across systems",

    description:
      "I enjoy understanding both the software people interact with and the hardware that lets code affect the physical world.",
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
              title="Learning by building complete systems."
              description="I am a high school student interested in software, computing, electronics, and engineering. I learn best by turning ideas into working projects."
            />

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              AP Path Planner introduced me to full-stack development, cloud data, security, testing, and production deployment. More recently, building an Arduino Smart Room Environmental Controller has introduced me to sensors, circuits, embedded C++, displays, and physical debugging.
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