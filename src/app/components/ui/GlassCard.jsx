"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Dribbble,
  Youtube,
  Figma,
} from "lucide-react";

const ICON_MAP = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  dribbble: Dribbble,
  youtube: Youtube,
  figma: Figma,
};

export default function ProfileGlassCard({
  name = "Payme Risky",
  photo = "/heroPhotos.jpeg",
  socials = [
    { icon: Github, href: "https://github.com/RapzzKY24", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rapzvoid",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/paymerisky",
      label: "Instagram",
    },
  ],
  className = "",
  maxHeight = "clamp(420px, 70vh, 740px)",
}) {
  return (
    <div
      className={`relative w-full max-w-[560px] mx-auto ${className}`}
      aria-label="Profile card"
    >
      <div className="absolute -inset-4 rounded-[28px] blur-2xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,.25),rgba(56,189,248,.25),rgba(34,197,94,.15),transparent)]" />

      <div
        className="relative rounded-[24px] bg-white/5 backdrop-blur-xl ring-1 ring-white/15
                   shadow-[0_35px_80px_-30px_rgba(0,0,0,.6)] overflow-hidden"
        style={{ maxHeight }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-[24px]"
          style={{
            padding: 1,
            background:
              "linear-gradient(135deg,rgba(99,102,241,.35),rgba(56,189,248,.35))",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* photo */}
        <div
          className="relative w-full"
          style={{ height: `calc(${maxHeight} - 120px)` }}
        >
          <Image
            src={photo}
            alt={`${name} photo`}
            fill
            priority
            className="object-cover object-center"
            sizes="(min-width:1280px) 560px, 90vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-4 bg-linear-to-t from-black/40 to-transparent" />
        </div>

        {/* footer */}
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 sm:pt-6">
          <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
          <div className="mt-5 flex items-center justify-center gap-4 sm:gap-6">
            {socials.map(({ icon: Icon, type, href, label }, i) => {
              const IconComponent =
                Icon || (type ? ICON_MAP[type.toLowerCase()] : null);
              return (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full
                             ring-1 ring-white/15 bg-white/5 text-white/90 hover:bg-white/10
                             transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70"
                  aria-label={label}
                >
                  <IconComponent className="h-5 w-5 opacity-90 group-hover:opacity-100 transition" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
