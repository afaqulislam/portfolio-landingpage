import About from "@/components/sections/about";
import Capabilities from "@/components/sections/capabilities";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Recognition from "@/components/sections/recognition";
import StackTicker from "@/components/sections/stack-ticker";
import Work from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <Hero />
      <StackTicker />
      <Work />
      <About />
      <Capabilities />
      <Experience />
      <Recognition />
      <Contact />
    </>
  );
}
