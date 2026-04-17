import { hero } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-12 md:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 hidden h-[40rem] w-[40rem] rounded-full bg-brick/15 blur-3xl md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 hidden h-96 w-96 rounded-full bg-mustard/25 blur-3xl md:block"
      />

      <Container size="xl" className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-end">
          <div className="flex flex-col gap-8">
            <EyebrowLabel>{hero.eyebrow}</EyebrowLabel>
            <h1 className="display-xl max-w-5xl text-balance">
              {hero.headline}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
              {hero.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={hero.primaryCta.href} variant="primary" showArrow>
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="hidden items-end justify-end lg:flex">
            <div className="relative flex h-80 w-80 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-brick" />
              <div className="absolute inset-4 rounded-full border border-cream/20" />
              <p className="relative z-10 px-10 text-center font-display text-4xl leading-tight text-cream">
                Together We Build.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-ink/15 pt-8 text-xs uppercase tracking-[0.2em] text-ink-muted md:mt-24">
          <span>Safety</span>
          <span aria-hidden>&middot;</span>
          <span>Belonging</span>
          <span aria-hidden>&middot;</span>
          <span>Prosperity</span>
          <span aria-hidden>&middot;</span>
          <span>Research + Resources</span>
        </div>
      </Container>
    </section>
  );
}
