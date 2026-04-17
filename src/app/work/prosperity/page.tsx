import { PageHero } from "@/components/layout/PageHero";
import { TextBlock } from "@/components/layout/TextBlock";
import { ProgramsGrid } from "@/components/layout/ProgramsGrid";

export const metadata = { title: "Prosperity" };

export default function ProsperityPage() {
  return (
    <>
      <PageHero
        eyebrow="Prosperity"
        title="Moving capital into long-overlooked AAPI organizations."
        lede="Less than 1% of philanthropic dollars go to AAPI-focused nonprofits. We're changing that."
      />
      <TextBlock eyebrow="Approach" heading="Flexible capital, deep trust.">
        <p>
          We provide multi-year general operating support, leadership
          development, and back-office infrastructure to AAPI organizations
          that have been historically underfunded. Our goal is to let leaders
          focus on their mission instead of the next grant application.
        </p>
      </TextBlock>
      <ProgramsGrid
        eyebrow="Programs"
        heading="What we fund."
        programs={[
          {
            title: "TALA: Thriving AANHPI Leadership Accelerator",
            description:
              "Developing the next generation of AANHPI executives, creatives, and civic leaders through cohort-based programs.",
          },
          {
            title: "General Operating Grants",
            description:
              "113 organizations received multi-year unrestricted grants from AsianCommunity.AI and its partners in the past year.",
          },
          {
            title: "ERG Network",
            description:
              "37 corporate Employee Resource Groups convened to build lasting pipelines for AAPI leadership.",
          },
          {
            title: "AAPI Giving Challenge",
            description:
              "A coalition of corporates, foundations, and individuals that has catalyzed $2.8B of investment in AAPIs over three years.",
          },
        ]}
      />
    </>
  );
}
