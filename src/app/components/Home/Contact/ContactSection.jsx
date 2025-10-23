import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

const socials = [
  { Icon: Github, href: "https://github.com/RapzzKY24", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  {
    Icon: Instagram,
    href: "https://instagram.com/paymerisky",
    label: "Instagram",
  },
  { Icon: Mail, href: "paymeriskiaulia@gmail.com", label: "Email" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-16 scroll-mt-[12vh]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-[24rem] w-[24rem] rounded-full blur-3xl bg-gradient-to-tr from-indigo-600/20 via-sky-400/15 to-cyan-300/15" />
      </div>

      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* header */}
        <span className="inline-flex px-3 py-1 rounded-md text-xs font-semibold bg-white/[0.06] ring-1 ring-white/10 text-indigo-200/90">
          Contact
        </span>
        <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Let’s build something cool
        </h1>
        <p className="mt-2 text-sm md:text-base text-white/70 max-w-[70ch]">
          DM me on socials or drop a message
        </p>

        {/* grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* left: socials */}
          <div className="rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-6">
            <p className="text-sm font-semibold text-white/90">Find me on</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 ring-1 ring-white/10 bg-white/[0.03]
                             text-white/90 hover:bg-white/[0.06] transition"
                >
                  <Icon className="h-4 w-4 opacity-80 group-hover:opacity-100" />
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-4 text-white">
              <p className="text-[11px] uppercase tracking-wide text-indigo-200/80">
                Email
              </p>
              <a
                href="mailto:paymeriskiaulia@gmail.com"
                className="text-sm font-semibold hover:underline"
              >
                paymeriskiaulia@gmail.com
              </a>
            </div>
          </div>

          {/* right: form */}
          <div className="lg:col-span-2 rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
