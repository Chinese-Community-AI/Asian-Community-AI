import { Container } from "./Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  tone?: "cream" | "ink" | "brick";
};

export function PageHero({ eyebrow, title, lede, tone = "cream" }: PageHeroProps) {
  const bg =
    tone === "ink"
      ? "bg-ink text-cream"
      : tone === "brick"
        ? "bg-brick text-cream"
        : "bg-cream text-ink";

  return (
    <section className={`${bg} relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28`}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[30rem] w-[30rem] rounded-full bg-brick/15 blur-3xl"
      />
      <Container size="lg" className="relative">
        <EyebrowLabel tone={tone === "cream" ? "brick" : "cream"}>
          {eyebrow}
        </EyebrowLabel>
        <h1 className="display-xl mt-6 max-w-5xl text-balance">{title}</h1>
        {lede && (
          <p
            className={`mt-8 max-w-2xl text-lg leading-relaxed md:text-xl ${
              tone === "cream" ? "text-ink-soft" : "text-cream/85"
            }`}
          >
            {lede}
          </p>
        )}
      </Container>
    </section>
  );
}
