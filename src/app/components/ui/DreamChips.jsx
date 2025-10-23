import DreamChip from "./DreamChip";

export default function DreamChips({
  items = [],
  className = "",
  wrap = true,
}) {
  return (
    <div className={`flex ${wrap ? "flex-wrap" : ""} gap-3 ${className}`}>
      {items.map(({ label, href, onClick }, i) => (
        <DreamChip key={`${label}-${i}`} href={href} onClick={onClick}>
          {label}
        </DreamChip>
      ))}
    </div>
  );
}
