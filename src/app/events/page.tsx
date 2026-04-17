import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Events" };

const events = [
  {
    date: "May 14\u201315, 2026",
    location: "New York, NY",
    title: "2026 AAPI Heritage Month Summit",
    description:
      "A two-day convening of 1,200+ community leaders, partners, and creatives from across the country.",
    cta: { label: "Register", href: "#" },
  },
  {
    date: "Jun 06, 2026",
    location: "Los Angeles, CA",
    title: "Reframing Representation Symposium",
    description:
      "A conversation with studio executives, showrunners, and journalists about the future of AAPI storytelling.",
    cta: { label: "Learn more", href: "#" },
  },
  {
    date: "Sep 18, 2026",
    location: "San Francisco, CA",
    title: "AAPI CEO Dinner",
    description:
      "An invitation-only gathering of AAPI executives to build peer community and strategize for the year ahead.",
    cta: { label: "Request invitation", href: "#" },
  },
  {
    date: "Oct 24, 2026",
    location: "Seattle, WA",
    title: "Cities: Seattle Community Night",
    description:
      "Celebrating the grantees, neighbors, and civic leaders shaping the Chinatown\u2013International District.",
    cta: { label: "Learn more", href: "#" },
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Bringing the AAPI community together, in person."
        lede="Our gatherings convene community organizers, corporate leaders, researchers, and creatives around shared commitments and a common vision."
      />
      <Section tone="cream" padding="lg">
        <EyebrowLabel>Upcoming</EyebrowLabel>
        <h2 className="display-md mb-10 mt-4">Join us this year.</h2>
        <ul className="flex flex-col gap-4">
          {events.map((event) => (
            <li
              key={event.title}
              className="flex flex-col justify-between gap-6 rounded-2xl bg-cream-50 p-8 ring-1 ring-ink/5 md:flex-row md:items-center"
            >
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.18em] text-brick">
                  {event.date} &middot; {event.location}
                </p>
                <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight md:text-3xl">
                  {event.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  {event.description}
                </p>
              </div>
              <Button href={event.cta.href} variant="primary" showArrow>
                {event.cta.label}
              </Button>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
