import type {
  Metadata,
} from "next";

import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

export const metadata:
  Metadata = {
  title:
    "Contact",

  description:
    "Contact me by email or explore my work through GitHub and AP Path Planner.",
};

export default function ContactPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <PageHeader
          eyebrow="Contact"
          title="Let’s connect."
          description="I am interested in computer science, software development, education technology, and opportunities to continue learning through real projects."
        />
      </Container>
    </main>
  );
}