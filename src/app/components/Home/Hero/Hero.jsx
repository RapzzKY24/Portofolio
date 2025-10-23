import React from "react";
import SplitText from "../../SplitText/SplitText";
import techStack from "@/app/utils/TechStack";
import ProfileGlassCard from "../../ui/GlassCard";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-12vh)] flex items-center justify-center py-12 md:py-16"
    >
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 md:space-y-8">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-indigo-300/80">
            Hi, I’m
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <SplitText
              text="Payme Risky"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce
              triggerOnHover={false}
              respectReducedMotion
            />
          </h1>

          <p className="text-sm md:text-base text-indigo-200/85 font-semibold">
            Junior Backend Developer <span className="mx-2">•</span> Telkom
            University Jakarta
          </p>

          <p className="text-white/80 text-sm md:text-base max-w-[65ch]">
            Focused on <strong>Laravel &amp; Node/Express</strong>, working with{" "}
            <strong>PostgreSQL</strong>, <strong>Docker</strong>, and clean
            architecture. I care about great DX, tidy tests, and predictable
            APIs.
          </p>

          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span
                key={t}
                className="text-xs md:text-sm px-3 py-1 rounded-full bg-white/5 text-white/90 ring-1 ring-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/cv.pdf"
              download
              aria-label="Download my CV"
              className="group relative inline-flex items-center justify-center px-5 py-3 rounded-md font-semibold text-white
                         bg-linear-to-br from-indigo-600 via-indigo-500 to-sky-500
                         shadow-lg shadow-indigo-600/30 ring-1 ring-white/10
                         transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70"
            >
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-white/15 translate-x-[-120%] group-hover:translate-x-[220%] transition-transform duration-700 ease-out" />
              </span>
              {/* download icon */}
              <svg
                className="h-5 w-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 3v12m0 0-4-4m4 4 4-4" />
                <path d="M5 21h14" />
              </svg>
              Download CV
            </a>

            <Link
              href="/project"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md font-semibold
                         text-indigo-200 ring-1 ring-white/10 hover:bg-white/5 transition focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-sky-300/70"
            >
              Lihat Project
              <span className="sr-only"> Go to projects section</span>
            </Link>
          </div>
        </div>

        <div className="hidden xl:block self-center">
          {/* RIGHT CONTENT */}
          <ProfileGlassCard
            name="Payme Risky"
            photo="/heroPhotos.jpeg"
            maxHeight="clamp(420px, 68vh, 680px)"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
