import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

export const metadata = { title: "Careers" };

const openings = [
  {
    title: "Senior Program Officer, Safety",
    location: "New York, NY",
    team: "Programs",
  },
  {
    title: "Research Manager, STAATUS Index",
    location: "Remote (US)",
    team: "Research",
  },
  {
    title: "Narrative Change Producer",
    location: "Los Angeles, CA",
    team: "Narrative",
  },
  {
    title: "Partnerships Lead",
    location: "New York, NY",
    team: "Partnerships",
  },
  {
    title: "AI Engineer",
    location: "Remote (US)",
    team: "Product",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the future of AAPI community infrastructure with us."
        lede="We're hiring organizers, researchers, technologists, and creatives who want to turn their skills into measurable impact for AAPIs."
      />
      <Section tone="cream" padding="lg">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <EyebrowLabel>Open Roles</EyebrowLabel>
            <h2 className="display-md mt-4">Join the team.</h2>
          </div>
          <p className="max-w-sm text-sm text-ink-muted">
            We offer competitive salaries, excellent benefits, and a mission
            worth fighting for.
          </p>
        </div>
        <ul className="divide-y divide-ink/10 rounded-2xl bg-cream-50 ring-1 ring-ink/5">
          {openings.map((role) => (
            <li key={role.title}>
              <Link
                href="#"
                className="group flex flex-col gap-1 px-8 py-6 transition-colors hover:bg-cream sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-display text-xl leading-tight tracking-tight">
                    {role.title}
                  </p>
                  <p className="text-sm text-ink-muted">
                    {role.team} &middot; {role.location}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-brick">
                  Apply
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
