type EyebrowLabelProps = {
  children: React.ReactNode;
  tone?: "brick" | "cream" | "ink";
  className?: string;
};

export function EyebrowLabel({
  children,
  tone = "brick",
  className = "",
}: EyebrowLabelProps) {
  const tones = {
    brick: "text-brick",
    cream: "text-cream",
    ink: "text-ink",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${tones[tone]} ${className}`}
    >
      <span aria-hidden className="inline-block h-px w-6 bg-current opacity-60" />
      {children}
    </span>
  );
}
