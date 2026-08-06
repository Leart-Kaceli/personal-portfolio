import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Technical skills"
          title="Tools I use to build, test, and deploy software."
          description="The complete skills section will be built on Day 6."
        />
      </Container>
    </section>
  );
}