import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProject from "@/components/home/FeaturedProject";
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <FeaturedProject />

      <Skills />

      <AboutPreview />
    </main>
  );
}