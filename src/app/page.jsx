import Home from "./components/Home/Home";
import About from "./components/Home/About/About";

export default function Page() {
  return (
    <main>
      <section id="home" className="scroll-mt-[12vh]">
        <Home />
      </section>
      <div className="h-24 md:h-32" />
      <section id="about" className="scroll-mt-[12vh]">
        <About />
      </section>
    </main>
  );
}
