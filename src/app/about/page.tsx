import type {
  Metadata,
} from "next";

import AboutSection from "@/components/about/AboutSection";
import ApproachCard from "@/components/about/ApproachCard";
import Timeline from "@/components/about/Timeline";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

export const metadata:
  Metadata = {
  title:
    "About",

  description:
  "Learn about my background, software and embedded systems projects, AP Path Planner, Arduino work, technical growth, and future goals.",
};

const approachItems = [
  {
    number:
      "01",

    title:
      "Practical purpose",

    description:
      "I prefer projects that solve a real problem or make a difficult task easier.",
  },

  {
    number:
      "02",

    title:
      "Complete development process",

    description:
      "I try to work through planning, interface design, implementation, testing, debugging, deployment, and improvement.",
  },

  {
    number:
      "03",

    title:
      "Reliability",

    description:
      "I value software that behaves consistently, protects user data, and remains understandable to users.",
  },

  {
    number:
      "04",

    title:
      "Continuous learning",

    description:
      "I use each project to learn technologies and concepts that I have not used before.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="py-16 sm:py-24">
        <Container>
          <PageHeader
  eyebrow="About me"
  title="Learning through software, hardware, and complete technical projects."
  description="I am a high school student interested in computing, software development, electronics, and understanding how technology can solve practical problems."
/>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                My background
              </p>

              <p className="mt-4 max-w-sm text-lg leading-8 text-slate-600">
                I learn best by turning ideas into complete applications and working through the problems that appear along the way.
              </p>
            </aside>

            <div className="space-y-12">
              <AboutSection title="Introduction">
  <p>
    I am a high school student interested in computing, software development, electronics, and building technology that solves practical problems.
  </p>

  <p>
    I learn best by creating complete projects and working through the problems that appear when software or hardware has to function outside of a simple demonstration.
  </p>
</AboutSection>

              <AboutSection title="Why I enjoy programming">
                <p>
                  What interests me most about programming is the process of turning an unclear problem into a working system. A project begins as an idea, but completing it requires breaking that idea into smaller parts, making design decisions, debugging failures, and improving the result over time.
                </p>

                <p>
                  I enjoy that combination of creativity, logic, and problem-solving.
                </p>
              </AboutSection>

              <AboutSection title="Building AP Path Planner">
                <p>
                  My largest project so far is AP Path Planner, a full-stack planning application designed for AP students.
                </p>

                <p>
                  I created it to bring courses, assignments, study sessions, grades, goals, calendars, and reminders into one organized platform. I developed the application with Next.js, TypeScript, React, Firebase, Playwright, and other modern development tools.
                </p>

                <div className="pt-2">
                  <ButtonLink href="/projects/ap-path-planner">
                    Read the AP Path Planner Case Study
                  </ButtonLink>
                </div>
              </AboutSection>

              <AboutSection title="What the project taught me">
                <p>
                  Building AP Path Planner changed how I think about software development. I learned that a finished application needs much more than a working interface.
                </p>

                <p>
                  I had to manage authentication, protect private user data, write and test Firestore Security Rules, create automated browser tests, improve accessibility, handle deployment environments, and debug differences between local and production behavior.
                </p>
              </AboutSection>
              <AboutSection title="Exploring embedded systems">
  <p>
    More recently, I began exploring hardware and embedded systems through an Arduino UNO R4 WiFi Smart Room Environmental Controller.
  </p>

  <p>
    The project combines temperature and light sensing with automatic lighting, fan control, and an LCD interface. Building it introduced me to circuits, sensors, actuators, embedded C++, and a different style of debugging in which a problem can come from either the code or the physical hardware.
  </p>

  <div className="pt-2">
    <ButtonLink href="/projects/smart-room-controller">
      Read the Smart Room Case Study
    </ButtonLink>
  </div>
</AboutSection>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              How I work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              How I approach technical projects.
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              The habits I developed through AP Path Planner and my Arduino project now guide how I approach new technical work across software and hardware.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {approachItems.map(
              (item) => (
                <ApproachCard
                  key={item.number}
                  number={item.number}
                  title={item.title}
                  description={
                    item.description
                  }
                />
              ),
            )}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Development timeline
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Learning by building.
              </h2>

              <p className="mt-5 max-w-md text-base leading-8 text-slate-600">
                My development experience has grown through progressively larger projects and more complete technical responsibilities.
              </p>
            </div>

            <Timeline />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <AboutSection title="Academic interests">
  <p>
    I am especially interested in electrical engineering, computer engineering, computer science, and fields where software and hardware interact.
  </p>

  <p>
    I want to understand systems at a deeper level, from software architecture and data to electronics, embedded computing, sensors, and the physical hardware controlled by code.
  </p>
</AboutSection>

            <AboutSection title="Future direction">
  <p>
    I plan to continue improving AP Path Planner based on feedback from real students while building additional projects that expand my experience beyond web development.
  </p>

  <p>
    I am particularly interested in embedded systems, electronics, automation, education technology, and projects that connect software with real-world hardware.
  </p>

  <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
    <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
      Currently learning
    </p>

    <p className="mt-3 text-sm leading-7 text-slate-700">
      I am continuing to strengthen my software-development skills while learning more about circuits, microcontrollers, embedded systems, and electrical engineering.
    </p>
  </div>
</AboutSection>
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
                See how these ideas became working systems.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Explore my software and embedded systems projects, read the case studies, or contact me about my work.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
              <ButtonLink href="/projects">
                View Projects
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