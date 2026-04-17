import { PageHero } from "@/components/layout/PageHero";
import { ImpactStats } from "@/components/home/ImpactStats";
import { TextBlock } from "@/components/layout/TextBlock";

export const metadata = { title: "Annual Impact Report" };

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="2025 Annual Impact Report"
        title="A year of community investment at scale."
        lede="How we deployed resources, convened partners, and built lasting infrastructure for the AAPI community over the past year."
      />
      <ImpactStats />
      <TextBlock eyebrow="Download" heading="Read the full report.">
        <p>
          Our full annual report includes financials, grantee spotlights, and a
          year-in-review across each of our four pillars. Available as a PDF or
          interactive summary.
        </p>
        <p>
          For questions or press inquiries related to the report, reach out to{" "}
          <a
            href="mailto:press@asiancommunity.ai"
            className="text-brick hover:text-ink"
          >
            press@asiancommunity.ai
          </a>
          .
        </p>
      </TextBlock>
    </>
  );
}
