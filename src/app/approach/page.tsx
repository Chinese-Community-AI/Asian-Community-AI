import { PageHero } from "@/components/layout/PageHero";
import { TextBlock } from "@/components/layout/TextBlock";
import { PrioritiesGrid } from "@/components/home/PrioritiesGrid";
import { RelatedLinks } from "@/components/layout/RelatedLinks";

export const metadata = { title: "Our Approach" };

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Approach"
        title="How we deploy resources, research, and storytelling."
        lede="Our philanthropic strategy pairs field-level intelligence with top-down investment to create durable change for AAPIs."
      />
      <TextBlock eyebrow="Principles" heading="Three principles guide our work.">
        <p>
          <strong>Community-led.</strong> We invest where community leaders
          tell us the need is greatest&mdash;not where it&rsquo;s easiest to
          measure.
        </p>
        <p>
          <strong>Evidence-based.</strong> Every program we fund is paired with
          research, so we can learn what works and share it back with the
          field.
        </p>
        <p>
          <strong>Durable.</strong> We build infrastructure&mdash;networks,
          datasets, and talent pipelines&mdash;that will outlast any single
          grant cycle.
        </p>
      </TextBlock>
      <section id="strategy">
        <PrioritiesGrid />
      </section>
      <RelatedLinks
        heading="Keep exploring."
        items={[
          {
            label: "AAPI Giving Challenge",
            href: "/partners/giving-challenge",
            description: "Inspiring investment at the corporate and foundation level.",
          },
          {
            label: "Our Work",
            href: "/work",
            description: "See our programs across Safety, Belonging, and Prosperity.",
          },
          {
            label: "Impact Report",
            href: "/about/impact",
            description: "Read the full 2025 accounting.",
          },
        ]}
      />
    </>
  );
}
