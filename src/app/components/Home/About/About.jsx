import React from "react";
import BoxText from "../../BoxText";
import DreamChips from "../../ui/DreamChips";
import { experience, skills, stats } from "@/app/utils/AboutData";

export default function About() {
  return (
    <section id="about" className="relative py-16 scroll-mt-[12vh]">
      {/* aura bg */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[26rem] w-[26rem] rounded-full blur-3xl bg-gradient-to-tr from-indigo-600/20 via-sky-400/15 to-cyan-300/15" />
        <div className="absolute bottom-0 right-0 h-[20rem] w-[20rem] rounded-full blur-[100px] bg-gradient-to-tr from-cyan-400/15 via-indigo-500/10 to-transparent" />
      </div>

      {/* ===== Section Header ===== */}
      <div className="w-[90%] md:w-[80%] mx-auto mb-8 md:mb-10">
        <BoxText>About Me</BoxText>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Get to know{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
            Payme Risky
          </span>
        </h2>
        <p className="mt-2 text-sm md:text-base text-white/70 max-w-[70ch]">
          A quick snapshot of my focus, stack, and experience.
        </p>
      </div>

      {/* ===== Content Grid ===== */}
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT */}
        <div className="rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-6 md:p-7">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Backend Developer — clean APIs, calm deploys
          </h3>
          <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed">
            I’m an IT undergrad at Telkom University Jakarta into web
            development and technology-driven problem solving. I work with{" "}
            <strong>Laravel</strong> & <strong>Node/Express</strong> on{" "}
            <strong>PostgreSQL</strong>, containerized with{" "}
            <strong>Docker</strong>. I care about DX, tidy tests, and
            predictable APIs that don’t break under pressure.
          </p>

          <DreamChips
            items={skills.map((s) => ({ label: s }))}
            className="mt-5"
          />

          <div className="mt-6 grid grid-cols-3 gap-3">
            {stats.map(({ k, v }) => (
              <div
                key={k}
                className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 px-4 py-3 text-white"
              >
                <p className="text-[11px] uppercase tracking-wide text-indigo-200/80">
                  {k}
                </p>
                <p className="text-base sm:text-lg font-semibold">{v}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:paymeriskiaulia@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-white
                         bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500 shadow-lg shadow-indigo-600/30
                         ring-1 ring-white/10 transition-transform hover:scale-[1.01]"
            >
              Contact
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold
                         text-indigo-200 ring-1 ring-white/10 hover:bg-white/5 transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-6 md:p-7">
          <BoxText>About Me</BoxText>
          <h3 className="text-2xl sm:text-3xl mt-3 font-bold text-white">
            Everything About My Work
          </h3>
          <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed">
            I enjoy turning vague product ideas into stable services with clean
            interfaces, just-enough docs, and deployments that stay boring on
            purpose.
          </p>

          <div className="mt-6 space-y-3">
            {experience.map((e) => (
              <div
                key={`${e.role}-${e.time}`}
                className="flex items-center justify-between rounded-xl px-4 py-3 bg-white/[0.04] ring-1 ring-white/10 text-white"
              >
                <div>
                  <p className="text-sm sm:text-base font-semibold">{e.role}</p>
                  <p className="text-xs text-indigo-200/80">{e.org}</p>
                </div>
                <span className="text-xs sm:text-sm font-medium text-indigo-200/90">
                  {e.time}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 px-4 py-3 text-white">
              <p className="text-[11px] uppercase tracking-wide text-indigo-200/80">
                Location
              </p>
              <p className="text-sm font-semibold">Jakarta, ID</p>
            </div>
            <div className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 px-4 py-3 text-white">
              <p className="text-[11px] uppercase tracking-wide text-indigo-200/80">
                Languages
              </p>
              <p className="text-sm font-semibold">ID / EN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
