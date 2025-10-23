import { chips, experience, socials, intro } from "@/app/utils/AboutData";
import Chip from "./Chip";
import ExperienceItem from "./ExperienceItem";
import ProfileCard from "./ProfileCard";

export default function AboutSection() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-tr from-indigo-600/20 via-sky-400/15 to-cyan-300/15" />
        <div className="absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full blur-[100px] bg-gradient-to-tr from-cyan-400/15 via-indigo-500/10 to-transparent" />
      </div>

      <div className="w-[90%] md:w-[85%] xl:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_520px] gap-10 xl:gap-12">
        {/* LEFT */}
        <div>
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-[70ch]">
            {intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {chips.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>

          <div className="mt-8 md:mt-10 space-y-4">
            {experience.map((e, i) => (
              <ExperienceItem key={`${e.role}-${i}`} {...e} />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <ProfileCard
          name="Payme Risky"
          subtitle="Backend Developer | Web Developer"
          photo="/aboutFoto.jpeg"
          socials={socials}
          ctaHref="paymeriskiaulia@gmail.com"
          className="mx-auto"
        />
      </div>
    </section>
  );
}
