export default function ExperienceItem({ role, org, time, className = "" }) {
  return (
    <div
      className={`relative rounded-2xl p-[1px] bg-gradient-to-br
                  from-indigo-700/30 via-sky-600/20 to-transparent ${className}`}
    >
      <div className="rounded-2xl bg-[#0b1220]/70 backdrop-blur-xl ring-1 ring-white/10 px-5 py-4 md:px-6 md:py-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white">
            {role}
          </h3>
          <p className="text-sm text-indigo-200/80">{org}</p>
        </div>
        <div className="text-sm md:text-base font-semibold text-indigo-200/90">
          {time}
        </div>
      </div>
    </div>
  );
}
