import { Container } from "./Container";

type SectionTone = "cream" | "ink" | "brick" | "mustard" | "cream-50";

const toneClasses: Record<SectionTone, string> = {
  cream: "bg-cream text-ink",
  "cream-50": "bg-cream-50 text-ink",
  ink: "bg-ink text-cream",
  brick: "bg-brick text-cream",
  mustard: "bg-mustard text-ink",
};

type SectionProps = {
  children: React.ReactNode;
  tone?: SectionTone;
  containerSize?: "sm" | "md" | "lg" | "xl";
  padding?: "sm" | "md" | "lg" | "xl";
  className?: string;
  id?: string;
};

const paddingClasses = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-28 md:py-40",
};

export function Section({
  children,
  tone = "cream",
  containerSize = "lg",
  padding = "lg",
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${toneClasses[tone]} ${paddingClasses[padding]} ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
