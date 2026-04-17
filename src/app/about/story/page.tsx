import { PageHero } from "@/components/layout/PageHero";
import { TextBlock } from "@/components/layout/TextBlock";

export const metadata = { title: "Founding Story" };

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Founding Story"
        title="Built in response to a historic moment."
        lede="AsianCommunity.AI was founded in the wake of a national surge in anti-Asian hate. We saw what community organizations needed, and we built the infrastructure to provide it."
      />
      <TextBlock eyebrow="2020" heading="A community under threat.">
        <p>
          In 2020, incidents of anti-AAPI hate spiked by more than 300%. Our
          founders&mdash;community organizers, technologists, and long-time
          AAPI advocates&mdash;realized that the sector lacked the coordinated
          infrastructure needed to respond.
        </p>
      </TextBlock>
      <TextBlock eyebrow="2021" heading="A coalition forms." tone="cream-50">
        <p>
          With seed support from corporate and philanthropic partners, we
          launched as an independent 501(c)(3) with a mandate to fund, convene,
          and innovate on behalf of the AAPI community.
        </p>
      </TextBlock>
      <TextBlock eyebrow="Today" heading="A new chapter for AAPI power.">
        <p>
          Five years later, our Safety National Network reaches half of the
          AAPI population. Our STAATUS Index is the largest annual survey of
          attitudes toward AAPIs. And our Narrative Change work is reshaping
          how our community appears in film, television, and journalism.
        </p>
      </TextBlock>
    </>
  );
}
