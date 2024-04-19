import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Opening from "@/components/home/Opening";
import ParticlesBackrgound from "@/components/home/ParticlesBackrgound";

import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Opening />

      <Services />
      <Contact />
      <ParticlesBackrgound />
    </>
  );
}
