import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { priorities } from "@/lib/content";
import { Section } from "@/components/layout/Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

const accentMap = {
  brick: "bg-brick text-cream hover:bg-brick-dark",
  mustard: "bg-mustard text-ink hover:bg-mustard-dark hover:text-cream",
  sage: "bg-sage text-cream hover:bg-ink",
  ink: "bg-ink text-cream hover:bg-brick",
} as const;

export function PrioritiesGrid() {
  return (
    <Section tone="cream" padding="lg">
      <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <EyebrowLabel>Our Priorities</EyebrowLabel>
          <h2 className="display-md mt-4 max-w-2xl">
            Four pillars for a safer, stronger AAPI future.
          </h2>
        </div>
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-ink hover:text-brick"
        >
          See All
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {priorities.map((p) => (
          <Link
            key={p.id}
            href={p.href}
            className={`group flex h-full flex-col justify-between gap-12 rounded-2xl p-8 transition-all duration-300 ${accentMap[p.accent]}`}
          >
            <div>
              <h3 className="font-display text-3xl leading-tight tracking-tight">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed opacity-90">
                {p.description}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
              Explore
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
