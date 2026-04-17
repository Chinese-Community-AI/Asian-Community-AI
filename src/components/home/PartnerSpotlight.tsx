"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { partnerStories } from "@/lib/content";
import { Section } from "@/components/layout/Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

export function PartnerSpotlight() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <Section tone="ink" padding="lg">
      <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <EyebrowLabel tone="cream">Unlocking Unprecedented Change</EyebrowLabel>
          <h2 className="display-lg mt-4 text-cream">
            Corporate partners shaping the next chapter for AAPIs.
          </h2>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous partner"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next partner"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 md:-mx-10 md:pl-10 md:pr-10 lg:-mx-14 lg:pl-14 lg:pr-14"
        style={{ scrollbarWidth: "none" }}
      >
        {partnerStories.map((story) => (
          <Link
            key={story.id}
            href={story.href}
            className="group relative flex min-w-[80%] snap-start overflow-hidden rounded-2xl bg-cream text-ink md:min-w-[48%] lg:min-w-[34%]"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={story.image}
                alt=""
                fill
                sizes="(max-width: 768px) 80vw, 34vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-cream md:p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-pill bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                  {story.partner}
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-cream/80">
                  {story.year}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-balance font-display text-2xl leading-tight md:text-3xl">
                  {story.headline}
                </h3>
                <p className="text-sm leading-relaxed text-cream/85">
                  {story.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
