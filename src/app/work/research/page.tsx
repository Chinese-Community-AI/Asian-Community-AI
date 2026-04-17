import { PageHero } from "@/components/layout/PageHero";
import { TextBlock } from "@/components/layout/TextBlock";
import { ProgramsGrid } from "@/components/layout/ProgramsGrid";
import { Section } from "@/components/layout/Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Research + Resources" };

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research + Resources"
        title="Data that informs movement strategy."
        lede="Our research team produces the largest datasets in the country on attitudes toward AAPIs, youth mental health, and community safety."
      />

      <Section tone="ink" padding="lg" id="staatus">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div className="max-w-2xl">
            <EyebrowLabel tone="cream">STAATUS Index 2026</EyebrowLabel>
            <h2 className="display-lg mt-4 text-cream">
              Six years of tracking America&rsquo;s attitudes toward AAPIs.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/85">
              Our flagship annual study surveys nearly 5,000 Americans on
              everything from media representation to workplace equity to
              perceptions of belonging.
            </p>
          </div>
          <Button href="#" variant="on-dark" showArrow>
            Download the Report
          </Button>
        </div>
      </Section>

      <TextBlock eyebrow="What We Study" heading="Three recurring studies.">
        <p>
          <strong>STAATUS Index.</strong> An annual national survey on
          attitudes toward Asian Americans, Native Hawaiians, and Pacific
          Islanders.
        </p>
        <p>
          <strong>Youth Mental Health Study.</strong> A mixed-methods study of
          young people aged 14&ndash;25 in the AANHPI community.
        </p>
        <p>
          <strong>City Safety Studies.</strong> Deep-dives in New York City and
          Seattle on the drivers of anti-AAPI violence.
        </p>
      </TextBlock>

      <ProgramsGrid
        eyebrow="Resources"
        heading="Toolkits and open datasets."
        programs={[
          {
            title: "AANHPI Toolkit",
            description:
              "A practitioner's guide for institutions working with AANHPI communities.",
          },
          {
            title: "AAPI History Hub",
            description:
              "320+ instructional resources for K\u201312 educators, created with 19 educational partners.",
          },
          {
            title: "AAPI Hate Tracker Dataset",
            description:
              "Aggregated and anonymized incident data, open for use by researchers and policymakers.",
          },
          {
            title: "STAATUS Index Archive",
            description:
              "Six years of longitudinal survey data on attitudes toward AAPIs.",
          },
        ]}
      />
    </>
  );
}
