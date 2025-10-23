"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import navLinks from "@/app/utils/NavLink";

export default function NavMobile({ open, onClose }) {
  const closeBtnRef = useRef(null);

  // lock scroll + focus + ESC
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <button
        aria-hidden={!open}
        aria-label="Close menu overlay"
        onClick={onClose}
        className={`fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-in panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-[1010] h-screen w-[78%] max-w-sm
          bg-gradient-to-b from-[#0b1220]/95 via-[#0b1526]/95 to-[#0a0f1c]/95
          backdrop-blur-xl border-l border-white/10 shadow-2xl
          transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            {/* Logo chip */}
            <div className="relative">
              <span className="absolute inset-0 rounded-full blur-md bg-gradient-to-tr from-indigo-500/30 via-sky-400/25 to-cyan-400/20" />
              <div className="relative h-9 w-9 rounded-full bg-gradient-to-br from-[#1e2a44] via-[#1b2740] to-[#15304a] ring-1 ring-white/20 shadow-lg shadow-indigo-600/20 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                >
                  <path d="M8 4h2v16H8z" fill="currentColor" />
                  <path d="M10 4h4a5 5 0 010 10h-4z" fill="currentColor" />
                  <path
                    d="M12 7h2a2 2 0 010 4h-2z"
                    fill="#0b1220"
                    opacity="0.9"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold leading-none">
                Payme Risky
              </span>
              <span className="text-xs text-indigo-200/80 leading-none mt-1">
                Backend enjoyer
              </span>
            </div>
          </div>

          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="rounded-md p-2 ring-1 ring-white/10 hover:ring-white/20 text-white/90 hover:text-white transition"
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-2 px-5 py-6">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              onClick={onClose}
              className="group rounded-lg px-3 py-3 text-white/90 hover:text-white
                         hover:bg-white/[0.04] ring-1 ring-transparent hover:ring-white/10
                         transition flex items-center justify-between"
            >
              <span className="text-base font-semibold">{item.label}</span>
              <svg
                className="h-4 w-4 opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 transition"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="mt-auto px-5 py-6 border-t border-white/5">
          <Link
            href="mailto:payme@example.com"
            onClick={onClose}
            className="group relative inline-flex w-full items-center justify-center gap-2 rounded-md
                       px-4 py-3 font-semibold text-white
                       bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500
                       shadow-lg shadow-indigo-600/30 ring-1 ring-white/15
                       transition-transform hover:scale-[1.01] active:scale-95"
          >
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-md">
              <span className="absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-white/15 translate-x-[-120%] group-hover:translate-x-[220%] transition-transform duration-700 ease-out" />
            </span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            Contact Me
          </Link>
        </div>
      </div>
    </>
  );
}
