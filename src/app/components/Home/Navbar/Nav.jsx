"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import navLinks from "@/app/utils/NavLink";
import NavMobile from "./NavMobile";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 h-[12vh] z-[1100] bg-black/30 supports-[backdrop-filter]:bg-black/20backdrop-blur-md shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)]transition-colors">
      <nav className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full flex items-center justify-center">
            <div className="relative">
              <span className="absolute inset-0 rounded-full blur-md bg-gradient-to-tr from-indigo-600/50 via-sky-500/50 to-cyan-400/50" />
              <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500 ring-1 ring-white/20 shadow-lg shadow-indigo-600/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-white">
                  <path d="M8 4h2v16H8z" fill="currentColor" />
                  <path d="M10 4h4a5 5 0 010 10h-4z" fill="currentColor" />
                  <path
                    d="M12 7h2a2 2 0 010 4h-2z"
                    fill="#1e293b"
                    opacity="0.9"
                  />
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
            Payme Risky
          </h1>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.id}
              href={navLink.url}
              className="text-white/90 hover:text-white font-semibold transition"
            >
              {navLink.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="hidden lg:flex items-center">
          <Link
            href="mailto:payme@example.com"
            aria-label="Contact Me"
            className="group relative inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-white
               bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500
               shadow-lg shadow-indigo-600/30 ring-1 ring-white/10
               transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]
               focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70"
          >
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-md">
              <span className="absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-white/15 translate-x-[-120%] group-hover:translate-x-[220%] transition-transform duration-700 ease-out" />
            </span>
            <span className="absolute -inset-px rounded-md bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
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
              <span>Contact Me</span>
            </span>
          </Link>
        </div>

        {/* Burger */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 rounded-md ring-1 ring-white/10 text-white hover:ring-white/20 transition"
          aria-label="Open menu"
        >
          <GiHamburgerMenu className="w-7 h-7" />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <NavMobile open={open} onClose={() => setOpen(false)} />
    </header>
  );
};

export default Nav;
