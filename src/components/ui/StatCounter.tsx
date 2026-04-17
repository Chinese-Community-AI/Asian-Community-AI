type StatCounterProps = {
  figure: string;
  label: string;
  description: string;
};

export function StatCounter({ figure, label, description }: StatCounterProps) {
  return (
    <div className="flex flex-col gap-3 border-t border-ink/15 pt-6">
      <div className="display-lg text-brick">{figure}</div>
      <div className="font-semibold text-ink">{label}</div>
      <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
    </div>
  );
}
