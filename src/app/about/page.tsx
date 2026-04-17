import { PageHero } from "@/components/layout/PageHero";
import { TextBlock } from "@/components/layout/TextBlock";
import { RelatedLinks } from "@/components/layout/RelatedLinks";
import { ImpactStats } from "@/components/home/ImpactStats";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="An independent coalition serving 25 million AAPIs across America."
        lede="We innovate, convene, and fund the people and organizations building safety, belonging, and prosperity for Asian American, Native Hawaiian, and Pacific Islander communities."
      />
      <TextBlock eyebrow="Who We Are" heading="A new kind of AAPI institution.">
        <p>
          AsianCommunity.AI is a non-partisan initiative founded by community
          leaders, technologists, and philanthropists in response to the
          historic underinvestment facing AANHPI communities. We combine
          grassroots relationships with data, research, and AI-powered tools to
          move resources where they have the most impact.
        </p>
        <p>
          Our work is coordinated across four pillars&mdash;Safety, Belonging,
          Prosperity, and Research + Resources&mdash;and our partners range
          from neighborhood coalitions to the Fortune 500.
        </p>
      </TextBlock>
      <ImpactStats />
      <RelatedLinks
        eyebrow="Explore"
        heading="Learn more about how we work."
        items={[
          {
            label: "Mission & Vision",
            href: "/about/mission",
            description: "The long-term future we're building toward.",
          },
          {
            label: "Founding Story",
            href: "/about/story",
            description: "How AsianCommunity.AI came together.",
          },
          {
            label: "Leadership",
            href: "/about/leadership",
            description: "Our board, staff, and advisory council.",
          },
          {
            label: "Annual Impact Report",
            href: "/about/impact",
            description: "A full accounting of our last year.",
          },
          {
            label: "Careers",
            href: "/about/careers",
            description: "Help shape the next chapter of our work.",
          },
          {
            label: "Contact",
            href: "/about/contact",
            description: "Partner with us or say hello.",
          },
        ]}
      />
    </>
  );
}
