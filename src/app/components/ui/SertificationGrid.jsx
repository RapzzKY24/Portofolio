import CertCard from "./SertCard";

export default function CertificationGrid({ items = [] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c, i) => (
        <CertCard key={`${c.title}-${i}`} cert={c} />
      ))}
    </div>
  );
}
