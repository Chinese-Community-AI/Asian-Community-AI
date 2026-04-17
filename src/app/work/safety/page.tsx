import { PageHero } from "@/components/layout/PageHero";
import { TextBlock } from "@/components/layout/TextBlock";
import { ProgramsGrid } from "@/components/layout/ProgramsGrid";
import { ImpactStats } from "@/components/home/ImpactStats";

export const metadata = { title: "Safety" };

export default function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Safety"
        title="Preventing anti-AAPI hate and building lasting community resilience."
        lede="We fund the first-responder networks, training programs, and data infrastructure that AAPIs need to be safe in their own neighborhoods."
      />
      <TextBlock eyebrow="Approach" heading="A national network, locally rooted.">
        <p>
          Our Anti-Hate National Network partners with 56 community-based
          organizations across 14 metropolitan areas. Together, these partners
          serve more than half of the U.S. AAPI population.
        </p>
        <p>
          We pair those grants with trainings, a multilingual hate-incident
          tracker, and research studies in our highest-need cities.
        </p>
      </TextBlock>
      <ProgramsGrid
        eyebrow="Programs"
        heading="What we fund."
        programs={[
          {
            title: "Anti-Hate National Network",
            description:
              "General operating support for 56 grantee partners providing victim services, bystander training, and community-building.",
          },
          {
            title: "Public Safety Trainings",
            description:
              "169 trainings delivered in the past year, equipping 5,942 residents, business owners, and frontline workers.",
          },
          {
            title: "AAPI Hate Tracker",
            description:
              "A multilingual, 11-language incident reporting platform built to capture the true scope of anti-AAPI hate.",
          },
          {
            title: "City Safety Studies",
            description:
              "Deep-dive research in New York City and Seattle to identify drivers of anti-AAPI violence and what prevents it.",
          },
        ]}
      />
      <ImpactStats />
    </>
  );
}
