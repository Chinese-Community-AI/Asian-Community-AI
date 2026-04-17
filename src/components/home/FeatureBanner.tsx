import { featureBanner } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Container } from "@/components/layout/Container";

export function FeatureBanner() {
  return (
    <section className="bg-cream pb-20 md:pb-32">
      <Container size="xl">
        <div className="relative overflow-hidden rounded-3xl bg-ink text-cream">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brick/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-mustard/20 blur-3xl"
          />

          <div className="relative grid gap-10 p-10 md:grid-cols-[1fr_auto] md:items-end md:p-16">
            <div className="max-w-3xl">
              <EyebrowLabel tone="cream">{featureBanner.eyebrow}</EyebrowLabel>
              <h2 className="mt-6 text-balance font-display text-4xl leading-tight md:text-5xl">
                {featureBanner.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
                {featureBanner.description}
              </p>
            </div>
            <div className="md:pb-1">
              <Button
                href={featureBanner.cta.href}
                variant="on-dark"
                showArrow
              >
                {featureBanner.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
