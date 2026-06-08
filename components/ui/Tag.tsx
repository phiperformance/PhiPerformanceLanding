interface TagProps {
  label: string;
  color?: "gold" | "blue" | "default";
}

export function Tag({ label, color = "default" }: TagProps) {
  const colorClasses = {
    gold: "border-gold text-gold",
    blue: "border-blue text-blue-muted",
    default: "border-cream/20 text-cream/60",
  }[color];

  return (
    <span
      className={`inline-block font-montserrat text-[10px] uppercase tracking-[0.2em] border px-3 py-1 ${colorClasses}`}
    >
      {label}
    </span>
  );
}
