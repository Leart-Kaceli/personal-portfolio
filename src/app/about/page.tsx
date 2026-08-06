import type {
  Metadata,
} from "next";

import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";

export const metadata:
  Metadata = {
  title:
    "About",

  description:
    "Learn about my background, software-development experience, technical interests, and future goals.",
};

export default function AboutPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <PageHeader
          eyebrow="About me"
          title="Building practical software and learning through complete projects."
          description="This page will explain my background, interest in computer science, development experience, and future goals."
        />
      </Container>
    </main>
  );
}