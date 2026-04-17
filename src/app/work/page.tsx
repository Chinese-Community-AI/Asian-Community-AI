import { PageHero } from "@/components/layout/PageHero";
import { SignatureProjects } from "@/components/home/SignatureProjects";
import { PrioritiesGrid } from "@/components/home/PrioritiesGrid";
import { RelatedLinks } from "@/components/layout/RelatedLinks";

export const metadata = { title: "Our Work" };

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Programs and projects driving change across the AAPI community."
        lede="From safety infrastructure to narrative change, our work spans every lever of social change available to philanthropy today."
      />
      <PrioritiesGrid />
      <SignatureProjects />
      <RelatedLinks
        heading="Dive deeper."
        items={[
          { label: "Safety", href: "/work/safety" },
          { label: "Belonging", href: "/work/belonging" },
          { label: "Prosperity", href: "/work/prosperity" },
          { label: "Research + Resources", href: "/work/research" },
          { label: "Community Partners", href: "/partners" },
          { label: "Annual Impact Report", href: "/about/impact" },
        ]}
      />
    </>
  );
}
