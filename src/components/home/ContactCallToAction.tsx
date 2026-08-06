import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";

export default function ContactCallToAction() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-white shadow-xl sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Contact
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Interested in my work or AP Path Planner?
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Explore the project case study, view my source code, or contact me about software development and learning opportunities.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <ButtonLink href="/contact">
              Contact Me
            </ButtonLink>

            <ButtonLink
              href="/projects"
              variant="secondary"
            >
              View Projects
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}