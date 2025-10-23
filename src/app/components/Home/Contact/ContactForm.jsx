"use client";

import { useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [sending, setSending] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name")?.toString().trim();
    const email = fd.get("email")?.toString().trim();
    const message = fd.get("message")?.toString().trim();

    if (!name || !email || !message) return alert("Isi semua field dulu ya.");
    setSending(true);

    const subject = encodeURIComponent(`New message from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:paymeriskiaulia@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => setSending(false), 800);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Name */}
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-indigo-200/90">
          Your Name
        </span>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-200/70" />
          <input
            name="name"
            required
            placeholder="Payme Risky"
            className="w-full rounded-lg bg-white/[0.04] ring-1 ring-white/10 px-9 py-3 text-white
                       placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-300/70"
          />
        </div>
      </label>

      {/* Email */}
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-indigo-200/90">
          Email
        </span>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-200/70" />
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-lg bg-white/[0.04] ring-1 ring-white/10 px-9 py-3 text-white
                       placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-300/70"
          />
        </div>
      </label>

      {/* Message */}
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-indigo-200/90">
          Message
        </span>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-indigo-200/70" />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="help me build a API"
            className="w-full rounded-lg bg-white/[0.04] ring-1 ring-white/10 pl-9 pr-3 py-3 text-white
                       placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-300/70"
          />
        </div>
      </label>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={sending}
          className="group relative inline-flex items-center justify-center px-5 py-3 rounded-md font-semibold text-white
                     bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500
                     shadow-lg shadow-indigo-600/30 ring-1 ring-white/10
                     transition-transform hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-md">
            <span className="absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-white/15 translate-x-[-120%] group-hover:translate-x-[220%] transition-transform duration-700 ease-out" />
          </span>
          {sending ? "Opening mail app…" : "Send Message"}
        </button>

        <a
          href="mailto:paymeriskiaulia@gmail.com"
          className="inline-flex items-center justify-center px-5 py-3 rounded-md font-semibold
                     text-indigo-200 ring-1 ring-white/10 hover:bg-white/5 transition"
        >
          Email Direct
        </a>
      </div>
    </form>
  );
}
