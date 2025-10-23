"use client";

import Image from "next/image";
import Link from "next/link";

const ACCENTS = {
  indigo: "from-indigo-500/70",
  cyan: "from-cyan-400/70",
  emerald: "from-emerald-400/70",
  pink: "from-pink-500/70",
  amber: "from-amber-400/70",
};

export default function CertCard({ cert }) {
  const { title, issuer, date, image, href, accent = "indigo" } = cert;

  return (
    <div className="group relative">
      <div
        className={`absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 blur
                       transition-opacity bg-gradient-to-br ${ACCENTS[accent]} to-transparent`}
      />
      <div className="relative rounded-2xl bg-white/[0.04] ring-1 ring-white/10 backdrop-blur-xl overflow-hidden">
        <div className="relative aspect-[4/3]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width:768px) 100vw, 400px"
            className="object-cover"
            priority={false}
          />
        </div>

        {/* body */}
        <div className="p-4">
          <h3 className="text-white font-semibold leading-tight">{title}</h3>
          <p className="mt-1 text-xs text-indigo-200/80">
            {issuer} • {date}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <Link
              href={href ?? "#"}
              target="_blank"
              className="text-sm font-medium text-indigo-200 hover:text-white transition"
            >
              View Credential →
            </Link>
            <span className="inline-flex h-2 w-2 rounded-full bg-white/40" />
          </div>
        </div>
      </div>
    </div>
  );
}
