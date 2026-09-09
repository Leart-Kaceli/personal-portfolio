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
  projects,
} from "@/data/projects";

import {
  smartRoomScreenshots,
} from "@/data/smartRoomScreenshots";

export const metadata:
  Metadata = {
  title:
    "Smart Room Environmental Controller",

  description:
    "A case study of an Arduino UNO R4 WiFi Smart Room Environmental Controller using sensors, automatic lighting, fan control, an LCD, and embedded C++.",
};

export default function SmartRoomControllerPage() {
  const project =
    projects.find(
      (
        currentProject,
      ) =>
        currentProject.slug ===
        "smart-room-controller",
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
              Hardware project case study
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              Smart Room Environmental Controller
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              An Arduino UNO R4 WiFi project that monitors room conditions and automatically controls lighting and airflow while displaying system information on a 16×2 LCD.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={
                  project.repositoryUrl
                }
                external
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

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <ProjectMetric
                label="Project type"
                value="Embedded system"
              />

              <ProjectMetric
                label="Controller"
                value="Arduino UNO R4 WiFi"
              />

              <ProjectMetric
                label="Language"
                value="C++"
              />

              <ProjectMetric
                label="Status"
                value="Completed prototype"
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
                This project was my introduction to combining software with physical electronics, sensors, displays, motors, and real-world debugging.
              </p>
            </aside>

            <div className="space-y-16">
              <CaseStudySection title="Why I built it">
                <p>
                  After spending most of my project time working on software, I wanted to understand how code interacts with physical hardware.
                </p>

                <p>
                  I built the Smart Room Environmental Controller as a hands-on introduction to embedded systems. Instead of only displaying information on a screen, the controller reads physical sensor values, makes decisions from those readings, and controls hardware in response.
                </p>
              </CaseStudySection>

              <CaseStudySection title="What the system does">
                <p>
                  The controller monitors room temperature and ambient light and uses those readings to automate parts of the room environment.
                </p>

                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Reads temperature from an environmental sensor.
                  </li>

                  <li>
                    Reads ambient light from a light sensor.
                  </li>

                  <li>
                    Activates lighting when the room is dark.
                  </li>

                  <li>
                    Activates a fan when the room temperature exceeds the configured threshold.
                  </li>

                  <li>
                    Displays environmental and system information on a 16×2 LCD.
                  </li>
                </ul>
              </CaseStudySection>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              System features
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Turning sensor readings into physical responses.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <HardwareFeature
              title="Environmental sensing"
              description="Reads temperature and ambient light values so the controller can understand the current room conditions."
            />

            <HardwareFeature
              title="Automatic lighting"
              description="Uses ambient light readings to determine when the lighting output should be activated."
            />

            <HardwareFeature
              title="Automatic fan control"
              description="Uses temperature readings to determine when the DC motor and fan should turn on."
            />

            <HardwareFeature
              title="LCD status display"
              description="Displays environmental and system information on a 16×2 character LCD."
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Hardware
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Building the physical system.
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              The prototype combines a microcontroller, sensors, outputs, and a breadboard circuit into one environmental-control system.
            </p>
          </div>

          <div className="mt-12">
            <ProjectGallery
              images={
                smartRoomScreenshots
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
                Architecture
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                How the controller works.
              </h2>

              <p className="mt-5 max-w-md text-base leading-8 text-slate-600">
                Sensor values flow into the Arduino, which applies control logic and updates the connected outputs.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950 p-6">
              <pre className="text-xs leading-7 text-slate-200 sm:text-sm">
{`Temperature Sensor ─┐
                     │
Light Sensor ────────┼──→ Arduino UNO R4 WiFi
                     │          │
                     │          ├──→ LED / Lighting
                     │          │
                     │          ├──→ DC Motor / Fan
                     │          │
                     │          └──→ 16×2 LCD`}
              </pre>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-24">
        <Container>
          <CaseStudySection
            eyebrow="Control logic"
            title="Responding to the room environment"
          >
            <p>
              The program repeatedly reads the connected sensors and stores the current environmental state.
            </p>

            <p>
              When ambient light falls below the configured threshold, the lighting output is activated. When the measured temperature exceeds its configured threshold, the fan output is activated.
            </p>

            <p>
              The LCD provides a local interface for viewing information from the controller while the system continues monitoring the sensors.
            </p>
          </CaseStudySection>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <CaseStudySection
            eyebrow="Components"
            title="Hardware used"
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Arduino UNO R4 WiFi",
                "Breadboard",
                "Temperature sensor",
                "Light sensor",
                "LED",
                "DC motor and fan",
                "Motor control transistor",
                "Protection diode",
                "16×2 LCD",
                "Pushbutton",
                "Resistors",
                "Jumper wires",
              ].map(
                (
                  component,
                ) => (
                  <div
                    key={
                      component
                    }
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700"
                  >
                    {component}
                  </div>
                ),
              )}
            </div>
          </CaseStudySection>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
        <Container>
          <CaseStudySection
            eyebrow="Debugging"
            title="Problems that required physical and software debugging"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <ChallengeCard
                title="LCD integration"
                description="Integrating the LCD required understanding the relationship between its power, register-select, enable, data, and contrast connections instead of treating the display as a single plug-in component."
              />

              <ChallengeCard
                title="Motor control"
                description="Driving a DC motor required a different approach from controlling an LED. The motor needed its own power path and transistor-based control rather than being powered directly from an Arduino output pin."
              />

              <ChallengeCard
                title="Breadboard constraints"
                description="Limited space and jumper-wire length made physical layout part of the engineering problem, requiring careful routing and component placement."
              />

              <ChallengeCard
                title="Finding the real cause"
                description="Correct Arduino code did not guarantee a working circuit. Debugging required checking wiring, shared ground connections, component orientation, power, and the software together."
              />
            </div>
          </CaseStudySection>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <CaseStudySection
            eyebrow="Reflection"
            title="What I learned"
          >
            <p>
              This project changed the way I think about debugging.
            </p>

            <p>
              With a web application, most problems can eventually be investigated through code, browser tools, logs, tests, or network requests. With hardware, the code can be correct while the system still fails because of wiring, power, component orientation, or a physical connection.
            </p>

            <p>
              Building the controller introduced me to the relationship between software and electronics and made me more interested in systems where code directly interacts with the physical world.
            </p>
          </CaseStudySection>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="rounded-3xl bg-slate-950 px-6 py-12 text-white shadow-xl sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
                Explore the build
              </p>

              <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                View the source code and project documentation.
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                The GitHub repository contains the Arduino source code, documentation, testing notes, and project images.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
              <ButtonLink
                href={
                  project.repositoryUrl
                }
                external
              >
                View Smart Room on GitHub
              </ButtonLink>

              <ButtonLink
                href="/projects"
                variant="secondary"
              >
                View All Projects
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

type HardwareFeatureProps = {
  title: string;
  description: string;
};

function HardwareFeature({
  title,
  description,
}: HardwareFeatureProps) {
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

type ChallengeCardProps = {
  title: string;
  description: string;
};

function ChallengeCard({
  title,
  description,
}: ChallengeCardProps) {
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