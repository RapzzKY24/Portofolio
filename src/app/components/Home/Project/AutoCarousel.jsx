"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const slides = [
  { title: "Coming Soon", sub: "Laravel Web Library Management With Laravel" },
  { title: "Coming Soon", sub: "API Mini E-Commerce With Hapi JS + Postgres" },
  { title: "Coming Soon", sub: "API Rented Cars With Express JS + Postgres" },
  { title: "Coming Soon", sub: "Web POS Coffe Shop With PHP Native" },
];

export default function AutoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 -left-10 h-[22rem] w-[22rem] rounded-full blur-3xl bg-gradient-to-tr from-indigo-600/20 via-sky-400/15 to-cyan-300/15" />
      </div>

      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex -ml-4">
          {slides.map((s, i) => (
            <div
              key={i}
              className="embla__slide min-w-0 flex-[0_0_85%] md:flex-[0_0_55%] lg:flex-[0_0_40%] pl-4"
            >
              <div className="h-[260px] sm:h-[320px] md:h-[360px] rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-6 flex flex-col items-start justify-end relative overflow-hidden">
                <div
                  className="absolute inset-px rounded-[1rem] pointer-events-none"
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
                <span className="absolute top-6 left-6 text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 ring-1 ring-white/10 text-indigo-200/90">
                  Project
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-sm">
                  {s.title}
                </h3>
                <p className="mt-2 text-white/75 text-sm md:text-base">
                  {s.sub}
                </p>

                <div className="mt-4 flex gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/85 ring-1 ring-white/10">
                    Soon
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/85 ring-1 ring-white/10">
                    Private
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition
              ${
                selectedIndex === i
                  ? "bg-white/90"
                  : "bg-white/25 hover:bg-white/40"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
