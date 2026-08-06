import type {
  Metadata,
} from "next";

import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

export const metadata:
  Metadata = {
  title:
    "Projects",

  description:
    "Explore my software projects, including AP Path Planner.",
};

export default function ProjectsPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <PageHeader
          eyebrow="My work"
          title="Projects built to solve practical problems."
          description="My projects combine interface design, full-stack development, testing, security, accessibility, and production deployment."
        />
      </Container>
    </main>
  );
}