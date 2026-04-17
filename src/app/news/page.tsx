import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

export const metadata = { title: "News" };

const press = [
  {
    date: "Apr 12, 2026",
    title:
      "AsianCommunity.AI announces $25M expansion of Safety National Network",
    outlet: "Press Release",
  },
  {
    date: "Mar 28, 2026",
    title: "STAATUS Index 2026 finds record shift in perceptions of AAPIs",
    outlet: "Press Release",
  },
  {
    date: "Mar 04, 2026",
    title: "Zoom renews 5-year, $5M commitment through AAPI Giving Challenge",
    outlet: "Press Release",
  },
  {
    date: "Feb 14, 2026",
    title: "CEO Alexandra Cho joins White House AAPI Advisory Commission",
    outlet: "Press Release",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Media"
        title="The latest from AsianCommunity.AI."
        lede="Press releases, media mentions, and updates from across our programs and partners."
      />
      <Section tone="cream" padding="lg" id="press">
        <EyebrowLabel>Press Releases</EyebrowLabel>
        <h2 className="display-md mb-10 mt-4">Recent announcements.</h2>
        <ul className="divide-y divide-ink/10 rounded-2xl bg-cream-50 ring-1 ring-ink/5">
          {press.map((item) => (
            <li key={item.title}>
              <Link
                href="#"
                className="group flex flex-col gap-1 px-8 py-6 transition-colors hover:bg-cream"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">
                  {item.date} &middot; {item.outlet}
                </p>
                <p className="font-display text-xl leading-tight tracking-tight group-hover:text-brick">
                  {item.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="cream-50" padding="lg" id="newsletters">
        <EyebrowLabel>Newsletters</EyebrowLabel>
        <h2 className="display-md mb-6 mt-4 max-w-2xl">
          Subscribe to stay close to the work.
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
          Our monthly newsletter highlights research, grantee stories, and
          ways to get involved. Sign up via the footer form below.
        </p>
      </Section>
    </>
  );
}
