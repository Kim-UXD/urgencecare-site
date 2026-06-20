import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Audience } from "./components/Audience";
import { Steps } from "./components/Steps";
import { Vision } from "./components/Vision";
import { About } from "./components/About";
import { Team } from "./components/Team";
import { CtaFinal } from "./components/CtaFinal";
import { Footer } from "./components/Footer";
import { RevealOnScroll } from "./components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Audience />
        <Steps />
        <Vision />
        <About />
        <Team />
        <CtaFinal />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
