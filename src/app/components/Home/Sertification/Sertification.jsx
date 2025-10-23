import { certs } from "@/app/utils/CertData";
import CertificationGrid from "../../ui/SertificationGrid";

export default function SertificationSection() {
  return (
    <section id="certification" className="relative py-16 scroll-mt-[12vh]">
      {/* aura */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[26rem] w-[26rem] rounded-full blur-3xl bg-gradient-to-tr from-indigo-600/20 via-sky-400/15 to-cyan-300/15" />
      </div>

      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="mb-8">
          <span
            className="inline-flex px-3 py-1 rounded-md text-xs font-semibold
                           bg-white/[0.06] ring-1 ring-white/10 text-indigo-200/90"
          >
            Certification
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">
            My badges & proof of work
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/70 max-w-[70ch]">
            A few verified certificates — mostly from Dicoding. Click to view
            the credential.
          </p>
        </div>

        <CertificationGrid items={certs} />
      </div>
    </section>
  );
}
