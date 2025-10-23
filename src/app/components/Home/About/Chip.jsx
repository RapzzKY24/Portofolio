export default function Chip({ children, className = "" }) {
  return (
    <span
      className={`rounded-xl px-4 py-2 text-sm text-indigo-100/90
                  bg-white/[0.04] ring-1 ring-white/10 hover:bg-white/[0.06]
                  transition ${className}`}
    >
      {children}
    </span>
  );
}
