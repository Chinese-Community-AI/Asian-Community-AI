import { PageHero } from "@/components/layout/PageHero";
import { TextBlock } from "@/components/layout/TextBlock";
import { ProgramsGrid } from "@/components/layout/ProgramsGrid";

export const metadata = { title: "Belonging" };

export default function BelongingPage() {
  return (
    <>
      <PageHero
        eyebrow="Belonging"
        title="Telling our stories, on our own terms."
        lede="From classrooms to the silver screen, we invest in the narrative infrastructure that lets AAPIs be seen in our full humanity."
      />
      <TextBlock eyebrow="Approach" heading="Representation as infrastructure.">
        <p>
          Belonging isn&rsquo;t a feeling&mdash;it&rsquo;s a function of whether our
          stories, history, and culture are visible in the places that matter.
          We treat narrative change like infrastructure, funding the curricula,
          creators, and convenings that move the culture.
        </p>
      </TextBlock>
      <ProgramsGrid
        eyebrow="Programs"
        heading="Initiatives we lead."
        programs={[
          {
            title: "AAPI History Hub",
            description:
              "A vetted K\u201312 platform with 320+ lesson plans and multimedia resources on Asian American and Pacific Islander history.",
          },
          {
            title: "Fighting to Belong!",
            description:
              "A middle-school comic book series telling AAPI history in an accessible, compelling way.",
          },
          {
            title: "TAAF Cities: NYC",
            description:
              "Fostering economic opportunity, safety, and cultural pride for NYC's nearly 2 million AAPI residents.",
          },
          {
            title: "TAAF Cities: Seattle",
            description:
              "Advancing safety and cultural pride in Seattle's Chinatown\u2013International District\u2014one block at a time.",
          },
          {
            title: "Narrative Change Fellowships",
            description:
              "Supporting 66 rising storytellers in entertainment and journalism each year.",
          },
          {
            title: "Reframing Representation",
            description:
              "A business case for more Asian and Asian American narratives in Hollywood, built for studios and creators alike.",
          },
        ]}
      />
    </>
  );
}
