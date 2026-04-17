import { PageHero } from "@/components/layout/PageHero";
import { TextBlock } from "@/components/layout/TextBlock";
import { MissionStatement } from "@/components/home/MissionStatement";

export const metadata = { title: "Mission & Vision" };

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission & Vision"
        title="Belonging and prosperity, free from discrimination and violence."
      />
      <MissionStatement />
      <TextBlock eyebrow="Our Vision" heading="A future we can all share.">
        <p>
          We envision an America where Asian Americans, Native Hawaiians, and
          Pacific Islanders live free from discrimination, slander, and
          violence; where our stories are told on our own terms; and where our
          economic, civic, and creative contributions are recognized at every
          level.
        </p>
        <p>
          To get there we invest at scale, build lasting infrastructure, and
          demand better from every sector that touches our communities&mdash;
          from policy and philanthropy to tech and entertainment.
        </p>
      </TextBlock>
    </>
  );
}
