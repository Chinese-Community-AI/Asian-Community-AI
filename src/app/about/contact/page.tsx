import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build together."
        lede="Press inquiries, partnership opportunities, and community introductions all welcome. We aim to respond within two business days."
      />
      <Section tone="cream" padding="lg" containerSize="md">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="display-md">Get in touch.</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              For general inquiries:{" "}
              <a
                href="mailto:hello@asiancommunity.ai"
                className="text-brick hover:text-ink"
              >
                hello@asiancommunity.ai
              </a>
            </p>
            <p className="mt-2 text-lg leading-relaxed text-ink-muted">
              Press:{" "}
              <a
                href="mailto:press@asiancommunity.ai"
                className="text-brick hover:text-ink"
              >
                press@asiancommunity.ai
              </a>
            </p>
            <p className="mt-2 text-lg leading-relaxed text-ink-muted">
              Partnerships:{" "}
              <a
                href="mailto:partners@asiancommunity.ai"
                className="text-brick hover:text-ink"
              >
                partners@asiancommunity.ai
              </a>
            </p>
          </div>
          <form className="flex flex-col gap-4 rounded-2xl bg-cream-50 p-6 ring-1 ring-ink/5 md:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                name="name"
                aria-label="Full name"
                placeholder="Full name"
                className="rounded-pill border border-ink/20 bg-cream px-5 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-ink focus:outline-none"
              />
              <input
                name="org"
                aria-label="Organization"
                placeholder="Organization"
                className="rounded-pill border border-ink/20 bg-cream px-5 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-ink focus:outline-none"
              />
            </div>
            <input
              name="email"
              type="email"
              aria-label="Email"
              placeholder="Email address"
              className="rounded-pill border border-ink/20 bg-cream px-5 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-ink focus:outline-none"
            />
            <textarea
              name="message"
              aria-label="Message"
              placeholder="Tell us a bit about what you're working on..."
              rows={6}
              className="rounded-2xl border border-ink/20 bg-cream px-5 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-ink focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-pill bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brick"
            >
              Send message
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
