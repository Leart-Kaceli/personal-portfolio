import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedProject() {
  return (
    <section className="border-y border-slate-200 bg-white py-20">
      <Container>
        <SectionHeading
          eyebrow="Featured project"
          title="AP Path Planner"
          description="A full-stack academic planning platform designed for AP students."
        />
      </Container>
    </section>
  );
}