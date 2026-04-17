import { PageHero } from "@/components/layout/PageHero";
import { TextBlock } from "@/components/layout/TextBlock";
import { ImpactStats } from "@/components/home/ImpactStats";
import { PartnerSpotlight } from "@/components/home/PartnerSpotlight";

export const metadata = { title: "AAPI Giving Challenge" };

export default function GivingChallengePage() {
  return (
    <>
      <PageHero
        eyebrow="AAPI Giving Challenge"
        title="Inspiring organizations to raise the standard of investment in AAPIs everywhere."
        lede="A coalition of corporate, foundation, and individual partners who have committed to deepen and sustain their investment in AAPI communities."
      />
      <TextBlock eyebrow="The Challenge" heading="Three years. $2.8 billion mobilized.">
        <p>
          Since 2021, the Giving Challenge has catalyzed $2.8 billion of
          support for AAPIs through direct grants, diversity investments,
          supplier programs, and in-kind contributions&mdash;reported by 77+
          partner organizations.
        </p>
        <p>
          Partners commit to multi-year investments, publish annual
          disclosures, and join a shared learning community that shares best
          practices across philanthropy, corporate citizenship, and community
          organizing.
        </p>
      </TextBlock>
      <PartnerSpotlight />
      <ImpactStats />
    </>
  );
}
