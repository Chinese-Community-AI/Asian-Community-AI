import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Donate" };

const amounts = [25, 50, 100, 250, 500, 1000];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Invest in a safer, more equitable future for AAPIs."
        lede="Every dollar you give is multiplied across our Safety National Network, research programs, and narrative-change initiatives."
        tone="brick"
      />

      <Section tone="cream" padding="lg" containerSize="md">
        <div className="rounded-3xl bg-cream-50 p-8 ring-1 ring-ink/10 md:p-12">
          <EyebrowLabel>Make a Gift</EyebrowLabel>
          <h2 className="display-md mb-8 mt-4">Choose an amount.</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {amounts.map((amount) => (
              <button
                key={amount}
                type="button"
                className="rounded-pill border border-ink/20 bg-cream px-5 py-4 text-lg font-semibold text-ink transition-colors hover:border-brick hover:bg-brick hover:text-cream"
              >
                ${amount}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <input
              name="customAmount"
              type="number"
              placeholder="Other amount"
              aria-label="Other amount"
              className="w-full rounded-pill border border-ink/20 bg-cream px-5 py-4 text-base text-ink placeholder:text-ink-muted focus:border-ink focus:outline-none"
            />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#" variant="primary" showArrow className="flex-1 justify-center">
              Donate Now
            </Button>
            <Button href="#" variant="secondary" className="flex-1 justify-center">
              Give Monthly
            </Button>
          </div>
          <p className="mt-6 text-xs text-ink-muted">
            AsianCommunity.AI is a 501(c)(3) non-profit. Your contribution is
            tax-deductible to the extent provided by federal tax law. Donation
            processing is stubbed in this preview build.
          </p>
        </div>
      </Section>

      <Section tone="cream-50" padding="lg" containerSize="md">
        <EyebrowLabel>Other Ways to Give</EyebrowLabel>
        <h2 className="display-md mb-8 mt-4">
          Donor-advised funds, stock, and planned gifts.
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Donor-Advised Funds", desc: "Recommend a grant through your DAF sponsor." },
            { title: "Stock & Securities", desc: "Transfer appreciated securities to amplify your gift." },
            { title: "Planned Giving", desc: "Include AsianCommunity.AI in your long-term plans." },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-cream p-6 ring-1 ring-ink/10"
            >
              <h3 className="font-display text-xl leading-tight tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
