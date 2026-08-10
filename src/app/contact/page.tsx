import type {
  Metadata,
} from "next";

import ContactCard from "@/components/contact/ContactCard";
import ContactMethod from "@/components/contact/ContactMethod";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

export const metadata:
  Metadata = {
  title:
    "Contact",

  description:
    "Contact me by email, view my work on GitHub, or explore AP Path Planner.",
};

const publicEmail =
  "leart.kaceli@gmail.com";

const githubUrl =
  "https://github.com/Leart-Kaceli";

const apPathPlannerUrl =
  "/projects/ap-path-planner";

export default function ContactPage() {
  return (
    <main>
      <section className="py-16 sm:py-24">
        <Container>
          <PageHeader
            eyebrow="Contact"
            title="Let’s connect."
            description="I am interested in computer science, software development, education technology, and opportunities to continue learning through real projects."
          />
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <ContactMethod
              label="Email"
              value={publicEmail}
              description="The best way to contact me directly about my projects, technical work, or learning opportunities."
              action={
                <ButtonLink
                  href={`mailto:${publicEmail}`}
                  external
                >
                  Email Me
                </ButtonLink>
              }
            />

            <ContactMethod
              label="GitHub"
              value="Leart-Kaceli"
              description="View my public repositories, source code, project history, and ongoing software work."
              action={
                <ButtonLink
                  href={githubUrl}
                  external
                  variant="secondary"
                >
                  View GitHub
                </ButtonLink>
              }
            />

            <ContactMethod
              label="Featured Project"
              value="AP Path Planner"
              description="Read the technical case study for my largest full-stack software project."
              action={
                <ButtonLink
                  href={apPathPlannerUrl}
                  variant="secondary"
                >
                  View AP Path Planner
                </ButtonLink>
              }
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <ContactCard
              eyebrow="What I’m interested in"
              title="Software, computing, and opportunities to learn."
              description="I am especially interested in conversations and opportunities related to software engineering, computer science, education technology, and building useful products."
            >
              <ul className="grid gap-4 text-sm leading-7 text-slate-600 sm:grid-cols-2">
                <li className="rounded-xl bg-slate-50 p-4">
                  Software development
                </li>

                <li className="rounded-xl bg-slate-50 p-4">
                  Computer science
                </li>

                <li className="rounded-xl bg-slate-50 p-4">
                  Education technology
                </li>

                <li className="rounded-xl bg-slate-50 p-4">
                  Student productivity tools
                </li>

                <li className="rounded-xl bg-slate-50 p-4">
                  Technical mentorship
                </li>

                <li className="rounded-xl bg-slate-50 p-4">
                  Learning opportunities
                </li>
              </ul>
            </ContactCard>

            <ContactCard
              eyebrow="Response"
              title="What to include in a message."
              description="A short message with context makes it easier for me to understand why you are reaching out."
            >
              <ul className="list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>
                  Your name
                </li>

                <li>
                  Why you are reaching out
                </li>

                <li>
                  Which project or topic you are referring to
                </li>

                <li>
                  Any important timing or deadline
                </li>
              </ul>
            </ContactCard>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="rounded-3xl bg-slate-950 px-6 py-12 text-white shadow-xl sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
                Explore my work
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                Prefer to start with the code?
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                View my projects, read the AP Path Planner case study, or explore my repositories on GitHub.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
              <ButtonLink href="/projects">
                View Projects
              </ButtonLink>

              <ButtonLink
                href={githubUrl}
                external
                variant="secondary"
              >
                GitHub
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}