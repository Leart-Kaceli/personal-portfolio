import type {
  Metadata,
} from "next";

import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

export const metadata:
  Metadata = {
  title:
    "AP Path Planner",

  description:
    "A case study of AP Path Planner, a full-stack academic planning platform built for AP students.",
};

export default function ApPathPlannerPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <PageHeader
          eyebrow="Case study"
          title="AP Path Planner"
          description="A full-stack academic planning platform that helps AP students organize courses, assignments, study sessions, grades, goals, calendars, and reminders."
        />
      </Container>
    </main>
  );
}