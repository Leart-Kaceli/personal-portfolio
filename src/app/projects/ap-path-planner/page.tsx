import type {
  Metadata,
} from "next";

import CaseStudySection from "@/components/projects/CaseStudySection";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectMetric from "@/components/projects/ProjectMetric";
import TechnologyTag from "@/components/projects/TechnologyTag";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";

import {
  apPathPlannerScreenshots,
} from "@/data/apPathPlannerScreenshots";

import {
  projects,
} from "@/data/projects";

export const metadata:
  Metadata = {
  title:
    "AP Path Planner",

  description:
    "A technical case study of AP Path Planner, a full-stack academic planning platform built with Next.js, TypeScript, Firebase, Playwright, and Vercel.",
};

export default function ApPathPlannerPage() {
  const project =
    projects.find(
      (
        currentProject,
      ) =>
        currentProject.slug ===
        "ap-path-planner",
    );

  if (!project) {
    return null;
  }

  return (
    <main>
      <section className="py-16 sm:py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Project case study
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              AP Path Planner
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              A full-stack academic planning platform designed to help AP students manage courses, assignments, study sessions, grades, goals, calendars, and reminders in one application.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {project.liveUrl ? (
                <ButtonLink
                  href={
                    project.liveUrl
                  }
                  external
                >
                  View Live Project
                </ButtonLink>
              ) : null}

              <ButtonLink
                href={
                  project.repositoryUrl
                }
                external
                variant="secondary"
              >
                View Source Code
              </ButtonLink>

              <ButtonLink
                href="/projects"
                variant="secondary"
              >
                Back to Projects
              </ButtonLink>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="mt-8 flex flex-wrap gap-2">
  {project.technologies.map(
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
              <ProjectMetric
                label="Project type"
                value="Full-stack web app"
              />

              <ProjectMetric
                label="Audience"
                value="AP students"
              />

              <ProjectMetric
                label="Primary stack"
                value="Next.js + Firebase"
              />

              <ProjectMetric
                label="Status"
                value="Deployed"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Project overview
              </p>

              <p className="mt-4 max-w-md text-lg leading-8 text-slate-600">
                AP Path Planner began as a student productivity idea and became a complete software-engineering project involving authentication, cloud data, security, testing, accessibility, deployment, and monitoring.
              </p>
            </aside>

            <div className="space-y-16">
              <CaseStudySection title="The problem">
                <p>
                  AP students often manage academic responsibilities through several disconnected systems. Assignments may exist in a school portal, study plans in a notebook, grades somewhere else, and reminders in a separate calendar.
                </p>

                <p>
                  When those responsibilities are separated, it becomes harder to understand priorities, track progress, and decide where study time should be focused.
                </p>

                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Which assignments need attention first?
                  </li>

                  <li>
                    How much study time is already scheduled?
                  </li>

                  <li>
                    Which courses need more focus?
                  </li>

                  <li>
                    Which deadlines and study sessions are coming next?
                  </li>
                </ul>
              </CaseStudySection>

              <CaseStudySection title="My solution">
                <p>
                  I designed AP Path Planner as one central workspace for academic planning.
                </p>

                <p>
                  Students can create an account, organize courses, add assignments, schedule study sessions, track grades, view calendar information, configure reminders, manage profile settings, and keep their information synchronized across sessions.
                </p>
              </CaseStudySection>

              <CaseStudySection title="Why I built it">
                <p>
                  I wanted to build something more complete than a front-end demo. AP Path Planner gave me the opportunity to work through the entire software-development process, from identifying a practical problem to testing and verifying a deployed application.
                </p>
              </CaseStudySection>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Product
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Key features.
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              The application combines several parts of academic planning that students often manage separately.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Authentication"
              description="Create an account, sign in, preserve authentication across sessions, sign out, and permanently delete the account."
            />

            <FeatureCard
              title="Course management"
              description="Add, edit, and delete AP courses while storing academic goals and course information."
            />

            <FeatureCard
              title="Assignment tracking"
              description="Create assignments with course associations, due dates, priorities, completion status, editing, and deletion."
            />

            <FeatureCard
              title="Study Planner"
              description="Schedule focused study sessions by course, topic, date, start time, and duration."
            />

            <FeatureCard
              title="Calendar"
              description="View assignments and planned study sessions together in calendar and agenda views."
            />

            <FeatureCard
              title="Grade tracking"
              description="Record grade entries and monitor academic performance by course and category."
            />

            <FeatureCard
              title="Profile and reminders"
              description="Manage study goals, appearance, reminders, browser notifications, and profile information."
            />

            <FeatureCard
              title="Themes"
              description="Choose between light, dark, and system-based appearance preferences."
            />

            <FeatureCard
              title="Data controls"
              description="Export application data, clear planning records while keeping the login, or permanently delete the account."
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Product walkthrough
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A look inside AP Path Planner.
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              These screenshots show the main user workflows, including the dashboard, courses, assignments, Study Planner, calendar, grades, and profile settings.
            </p>
          </div>

          <div className="mt-12">
            <ProjectGallery
              images={
                apPathPlannerScreenshots
              }
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Engineering
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Application architecture.
              </h2>

              <p className="mt-5 max-w-md text-base leading-8 text-slate-600">
                The project uses a client-focused architecture built around Next.js and Firebase.
              </p>
            </div>

            <div className="space-y-6">
              <ArchitectureStep
                number="01"
                title="Next.js and React"
                description="Render the interface, forms, navigation, dashboards, calendars, settings, metadata, loading states, and error handling."
              />

              <ArchitectureStep
                number="02"
                title="Firebase Authentication"
                description="Identifies the current user and provides the UID used to associate private application data with the correct account."
              />

              <ArchitectureStep
                number="03"
                title="Cloud Firestore"
                description="Stores user-specific courses, assignments, study sessions, grades, profile settings, and other planning information."
              />

              <ArchitectureStep
                number="04"
                title="Firestore Security Rules"
                description="Validate ownership and data structure independently from the user interface."
              />

              <ArchitectureStep
                number="05"
                title="Testing and deployment"
                description="Vitest, Firebase emulators, Playwright, GitHub Actions, and Vercel verify behavior from isolated logic through deployed production pages."
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-24">
        <Container>
          <div className="space-y-16">
            <CaseStudySection
              eyebrow="Data"
              title="Authentication, privacy, and data organization"
            >
              <p>
                Firebase Authentication manages user identity. The application uses the authenticated user’s UID when reading and writing private records.
              </p>

              <p>
                User information is organized beneath the authenticated account so that course, assignment, grade, study-session, and profile records remain connected to the correct user.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950 p-6">
                <pre className="text-sm leading-7 text-slate-200">
{`users/{userId}
├── courses/{courseId}
├── assignments/{assignmentId}
├── studySessions/{sessionId}
├── grades/{gradeId}
└── settings and profile data`}
                </pre>
              </div>
            </CaseStudySection>

            <CaseStudySection
              eyebrow="Security"
              title="Firestore Security Rules"
            >
              <p>
                Authentication alone does not secure the database. Firestore Security Rules independently verify whether each request should be allowed.
              </p>

              <ul className="list-disc space-y-2 pl-5">
                <li>
                  The user must be authenticated.
                </li>

                <li>
                  The authenticated UID must match the user-data path.
                </li>

                <li>
                  Users cannot read or write another user’s private records.
                </li>

                <li>
                  Invalid document values can be rejected before they are stored.
                </li>

                <li>
                  Signed-out requests cannot access private planning data.
                </li>
              </ul>

              <p>
                I used automated Rules tests with the Firebase Emulator Suite to verify allowed and denied database operations before deployment.
              </p>
            </CaseStudySection>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <CaseStudySection
            eyebrow="Reliability"
            title="Testing strategy"
          >
            <p>
              I used several kinds of automated testing because each level identifies a different class of failure.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <TestingCard
                title="Vitest"
                description="Checks utility functions and isolated application behavior while producing coverage reports."
              />

              <TestingCard
                title="Firestore Rules tests"
                description="Verify allowed and denied database operations against the Firestore emulator."
              />

              <TestingCard
                title="Authenticated Playwright"
                description="Uses an emulator test user and saved browser authentication state to verify private workflows such as courses and assignments."
              />

              <TestingCard
                title="Accessibility testing"
                description="Detects serious issues such as insufficient contrast and missing accessible labels."
              />

              <TestingCard
                title="Production-build testing"
                description="Builds and starts the application in production mode before browser checks are run."
              />

              <TestingCard
                title="Deployed smoke tests"
                description="Run against real Vercel deployments to confirm the live site, metadata, navigation, headers, and basic performance."
              />
            </div>
          </CaseStudySection>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
        <Container>
          <CaseStudySection
            eyebrow="Engineering challenges"
            title="Problems that required deeper debugging"
          >
            <ChallengeBlock
              title="Authenticated browser testing"
              description="Playwright tests needed a predictable Firebase emulator user, saved authentication state, matching UIDs, clean Firestore data, correct emulator ports, and controlled test execution. Several visible assignment failures were actually caused by identity, setup-data, or Security Rules problems."
            />

            <ChallengeBlock
              title="Persistence and synchronization"
              description="A record could appear immediately in the interface before a cloud write was fully confirmed. I learned to distinguish optimistic local state, cached data, pending Firestore writes, emulator data, and confirmed persisted data."
            />

            <ChallengeBlock
              title="Deployment environments"
              description="Local development, Firebase emulator testing, production builds, Vercel Preview, and Vercel Production could expose different problems. Deployed tests initially reached a Vercel access page rather than AP Path Planner, which produced misleading failures until I added deployment-identity checks and automation bypass configuration."
            />

            <ChallengeBlock
              title="Accessibility"
              description="Automated accessibility checks found issues such as insufficient text contrast that looked acceptable visually. I learned to measure accessibility instead of relying only on appearance."
            />
          </CaseStudySection>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <CaseStudySection
              eyebrow="Reflection"
              title="What I learned"
            >
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  Authentication and database ownership must agree.
                </li>

                <li>
                  Security Rules need their own tests.
                </li>

                <li>
                  Browser tests need controlled setup and cleanup.
                </li>

                <li>
                  Development and production environments can behave differently.
                </li>

                <li>
                  Accessibility requires deliberate testing.
                </li>

                <li>
                  Debugging improves when I focus on the earliest real cause rather than later symptoms.
                </li>

                <li>
                  A project becomes stronger when it is documented, tested, deployed, and improved based on feedback.
                </li>
              </ul>
            </CaseStudySection>

            <CaseStudySection
              eyebrow="Next"
              title="Future improvements"
            >
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  Better first-use onboarding
                </li>

                <li>
                  Google Calendar integration
                </li>

                <li>
                  Recurring assignments and study sessions
                </li>

                <li>
                  AI-assisted study planning
                </li>

                <li>
                  Improved scheduled notifications
                </li>

                <li>
                  Continued mobile improvements
                </li>

                <li>
                  More real student testing and feedback
                </li>
              </ul>
            </CaseStudySection>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="rounded-3xl bg-slate-950 px-6 py-12 text-white shadow-xl sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
                Project conclusion
              </p>

              <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                From an idea to a tested, deployed application.
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                AP Path Planner is the first project in which I worked through nearly the entire software-development process, from identifying the problem to securing the data, testing realistic workflows, debugging deployment issues, and verifying a production application.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
              {project.liveUrl ? (
                <ButtonLink
                  href={
                    project.liveUrl
                  }
                  external
                >
                  Try AP Path Planner
                </ButtonLink>
              ) : null}

              <ButtonLink
                href={
                  project.repositoryUrl
                }
                external
                variant="secondary"
              >
                View Source Code
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
};

function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-950">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>
    </article>
  );
}

type ArchitectureStepProps = {
  number: string;
  title: string;
  description: string;
};

function ArchitectureStep({
  number,
  title,
  description,
}: ArchitectureStepProps) {
  return (
    <article className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
        {number}
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-950">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          {description}
        </p>
      </div>
    </article>
  );
}

type TestingCardProps = {
  title: string;
  description: string;
};

function TestingCard({
  title,
  description,
}: TestingCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-950">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>
    </article>
  );
}

type ChallengeBlockProps = {
  title: string;
  description: string;
};

function ChallengeBlock({
  title,
  description,
}: ChallengeBlockProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-950">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}