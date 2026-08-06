import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPreview() {
  return (
    <section className="border-t border-slate-200 bg-white py-20">
      <Container>
        <SectionHeading
          eyebrow="About me"
          title="Learning through complete software projects."
          description="The full About preview will be completed after the homepage foundation is finished."
        />
      </Container>
    </section>
  );
}