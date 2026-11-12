import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-alt">
        <Process />
      </div>
      <Services />
      <div className="section-alt">
        <Work />
      </div>
      <FAQ />
      <div className="section-alt">
        <Contact />
      </div>
    </>
  );
}
