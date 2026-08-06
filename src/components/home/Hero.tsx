import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          High School Software Developer
        </p>

        <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
          I build software that solves
          real problems.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          The full homepage hero will be
          completed on Day 6.
        </p>
      </Container>
    </section>
  );
}