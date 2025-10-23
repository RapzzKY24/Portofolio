import Link from "next/link";

export default function DreamChip({
  children,
  href,
  onClick,
  className = "",
  disabled = false,
}) {
  const base =
    "relative inline-flex items-center justify-center rounded-2xl px-4 py-2 " +
    "text-sm font-medium text-indigo-100/90 " +
    "border border-white/10 bg-white/[0.03] backdrop-blur " +
    "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] " +
    "transition hover:bg-white/[0.05] hover:border-white/15 focus:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-sky-300/60";

  const glow =
    "pointer-events-none absolute -bottom-[2px] left-1/2 h-[6px] w-[72%] -translate-x-1/2 " +
    "rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.65),rgba(99,102,241,0)_70%)] " +
    "opacity-40 blur-[6px] group-hover:opacity-70 transition-opacity";

  const content = (
    <>
      <span className="relative z-[1]">{children}</span>
      <span aria-hidden="true" className={glow} />
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={`group ${base} ${className}`}>
        {content}
      </Link>
    );
  }

  if (onClick && !disabled) {
    return (
      <button onClick={onClick} className={`group ${base} ${className}`}>
        {content}
      </button>
    );
  }

  return (
    <span className={`group ${base} ${className} opacity-70 cursor-default`}>
      {content}
    </span>
  );
}
