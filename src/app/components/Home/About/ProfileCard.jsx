"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Dribbble, Youtube, Figma } from "lucide-react";

const ICONS = {
  github: Github,
  dribbble: Dribbble,
  youtube: Youtube,
  figma: Figma,
};

export default function ProfileCard({
  name = "Payme Risky",
  subtitle = "Backend Developer | Web Developer",
  photo = "/heroPhotos.jpeg",
  socials = [],
  ctaHref = "paymeriskiaulia@gmail.com",
  ctaText = "Connect Me",
  className = "",
}) {
  return (
    <div className={`relative ${className}`}>
      {/* outer glow */}
      <div className="absolute -inset-3 rounded-[28px] blur-2xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,.25),rgba(56,189,248,.25),transparent)]" />
      <div className="relative overflow-hidden rounded-[24px] bg-white/[0.05] backdrop-blur-xl ring-1 ring-white/15 shadow-[0_35px_80px_-30px_rgba(0,0,0,.6)]">
        <div className="relative">
          <Image
            src={photo}
            alt={name}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="px-6 py-4 text-center">
          <h4 className="text-2xl md:text-3xl font-extrabold text-white">
            Hello, I am {name}
          </h4>
          <p className="text-xs tracking-[0.18em] text-indigo-200/80 mt-1">
            {subtitle}
          </p>
        </div>

        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="px-6 py-5 flex items-center justify-center gap-4 md:gap-6">
          {socials.map(({ type, href, label }, idx) => {
            const Icon = ICONS[type] ?? Github;
            return (
              <Link
                key={idx}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full
                           bg-white/[0.04] ring-1 ring-white/10 text-white/90
                           hover:bg-white/[0.07] transition"
              >
                <Icon className="h-5 w-5 opacity-90 group-hover:opacity-100" />
              </Link>
            );
          })}
        </div>

        <div className="px-6 pb-6">
          <Link
            href={ctaHref}
            className="block w-full rounded-xl text-center font-semibold text-white px-4 py-3
                       bg-[linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02))]
                       ring-1 ring-white/15 hover:bg-white/10 transition
                       shadow-[inset_0_-10px_30px_-20px_rgba(255,255,255,.35)]"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
}
