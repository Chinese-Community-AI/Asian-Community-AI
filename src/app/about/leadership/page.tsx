import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

export const metadata = { title: "Leadership" };

const board = [
  { name: "Jennifer Lin", role: "Board Chair" },
  { name: "Raj Patel", role: "Vice Chair" },
  { name: "Mei Tanaka", role: "Treasurer" },
  { name: "Daniel Kim", role: "Secretary" },
  { name: "Priya Desai", role: "Board Member" },
  { name: "Kai Nakamura", role: "Board Member" },
];

const staff = [
  { name: "Alexandra Cho", role: "Chief Executive" },
  { name: "Marcus Lee", role: "Chief Program Officer" },
  { name: "Sara Nguyen", role: "Head of Research" },
  { name: "Diego Santos", role: "Head of Narrative" },
];

const advisory = [
  { name: "Prof. Linda Lam", role: "AAPI Studies" },
  { name: "Kenji Watanabe", role: "Former Mayor" },
  { name: "Dr. Anjali Mehta", role: "Public Health" },
  { name: "Jasmine Park", role: "Film & TV" },
];

function PeopleGrid({
  people,
}: {
  people: { name: string; role: string }[];
}) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {people.map((p) => (
        <li
          key={p.name}
          className="flex flex-col gap-3 rounded-2xl bg-cream-50 p-6 ring-1 ring-ink/5"
        >
          <div
            aria-hidden
            className="aspect-square w-full rounded-xl bg-gradient-to-br from-brick/30 via-mustard/30 to-sage/30"
          />
          <div>
            <p className="font-display text-xl leading-tight tracking-tight">
              {p.name}
            </p>
            <p className="text-sm text-ink-muted">{p.role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The people guiding our work."
        lede="Our board, staff, and advisory council bring decades of experience in community organizing, research, philanthropy, and technology."
      />

      <Section tone="cream" padding="lg">
        <EyebrowLabel>Board of Directors</EyebrowLabel>
        <h2 className="display-md mb-10 mt-4">Board Members</h2>
        <PeopleGrid people={board} />
      </Section>

      <Section tone="cream-50" padding="lg">
        <EyebrowLabel>Staff</EyebrowLabel>
        <h2 className="display-md mb-10 mt-4">Leadership Team</h2>
        <PeopleGrid people={staff} />
      </Section>

      <Section tone="cream" padding="lg" id="advisory">
        <EyebrowLabel>Advisory</EyebrowLabel>
        <h2 className="display-md mb-10 mt-4">Advisory Council</h2>
        <PeopleGrid people={advisory} />
      </Section>
    </>
  );
}
