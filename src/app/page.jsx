import About from "./components/Home/About/About";
import ContactSection from "./components/Home/Contact/ContactSection";
import Home from "./components/Home/Home";
import Project from "./components/Home/Project/Project";
import SertificationSection from "./components/Home/Sertification/Sertification";

export default function Page() {
  return (
    <main className="w-full">
      <section id="home" className="scroll-mt-[12vh] w-full">
        <Home />
      </section>

      <div className="h-20 md:h-24 lg:h-28" />

      <section id="about" className="scroll-mt-[12vh] w-full">
        <About />
      </section>

      <div className="h-20 md:h-24 lg:h-28" />

      <section id="sertification" className="scroll-mt-[12vh] w-full">
        <SertificationSection />
      </section>

      <section id="projects" className="scroll-mt-[12vh] w-full">
        <Project />
      </section>

      <section id="contact" className="scroll-mt-[12vh] w-full">
        <ContactSection />
      </section>
    </main>
  );
}
