import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { introParagraph } from "@/lib/content";
import { Section } from "@/components/layout/Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

export function IntroParagraph() {
  return (
    <Section tone="cream-50" containerSize="lg" padding="lg">
      <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <EyebrowLabel>{introParagraph.eyebrow}</EyebrowLabel>
        </div>
        <div className="max-w-3xl">
          <p className="text-balance font-display text-2xl leading-snug text-ink md:text-3xl">
            {introParagraph.body}
          </p>
          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brick hover:text-ink"
          >
            About Us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
