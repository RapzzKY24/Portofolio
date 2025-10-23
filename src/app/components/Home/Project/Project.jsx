import AutoCarousel from "./AutoCarousel";

export default function Project() {
  return (
    <section id="project" className="relative py-16 scroll-mt-[12vh]">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <span
          className="inline-flex px-3 py-1 rounded-md text-xs font-semibold
                         bg-white/[0.06] ring-1 ring-white/10 text-indigo-200/90"
        >
          Projects
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Stuff I’m building (soon)
        </h2>
        <p className="mt-2 text-sm md:text-base text-white/70 max-w-[70ch]">
          Currently placeholders,real projects dropping soon.
        </p>

        <div className="mt-8">
          <AutoCarousel />
        </div>
      </div>
    </section>
  );
}
