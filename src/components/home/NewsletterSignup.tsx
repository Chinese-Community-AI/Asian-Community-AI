"use client";

import { newsletter } from "@/lib/content";
import { Section } from "@/components/layout/Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

export function NewsletterSignup() {
  return (
    <Section tone="brick" padding="lg">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <EyebrowLabel tone="cream">{newsletter.eyebrow}</EyebrowLabel>
          <h2 className="display-lg mt-6 text-cream">{newsletter.headline}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
            {newsletter.body}
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4 rounded-2xl bg-cream p-6 md:p-8"
          aria-label="Newsletter signup"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              name="firstName"
              aria-label="First name"
              placeholder="First name"
              className="rounded-pill border border-ink/20 bg-cream-50 px-5 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-ink focus:outline-none"
            />
            <input
              name="lastName"
              aria-label="Last name"
              placeholder="Last name"
              className="rounded-pill border border-ink/20 bg-cream-50 px-5 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-ink focus:outline-none"
            />
          </div>
          <input
            name="email"
            type="email"
            required
            aria-label="Email address"
            placeholder="Email address"
            className="rounded-pill border border-ink/20 bg-cream-50 px-5 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-ink focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-pill bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brick-dark"
          >
            Join the Movement
          </button>
          <p className="text-xs text-ink-muted">
            By subscribing you agree to our Privacy Policy.
          </p>
        </form>
      </div>
    </Section>
  );
}
