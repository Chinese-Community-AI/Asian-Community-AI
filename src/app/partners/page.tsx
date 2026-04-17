import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { PartnerSpotlight } from "@/components/home/PartnerSpotlight";
import { RelatedLinks } from "@/components/layout/RelatedLinks";

export const metadata = { title: "Our Partners" };

const partnerCategories = [
  {
    title: "Foundation Partners",
    partners: [
      "Ford Foundation",
      "MacArthur Foundation",
      "Robert Wood Johnson",
      "Kresge Foundation",
      "California Endowment",
      "Wallace Foundation",
    ],
  },
  {
    title: "Corporate Partners",
    partners: [
      "Zoom",
      "KKR",
      "Mastercard",
      "Bank of America",
      "Procter & Gamble",
      "Walmart.org",
      "Ralph Lauren",
      "Meta",
      "Google.org",
      "Accenture",
      "Disney",
      "Nike",
    ],
  },
  {
    title: "Community Partners",
    partners: [
      "AAPI Civic Engagement Fund",
      "Asian Americans Advancing Justice",
      "OCA",
      "NAPAWF",
      "SAALT",
      "Hana Center",
      "Apex for Youth",
      "LAAUNCH",
    ],
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Partners"
        title="The coalitions, funders, and companies making this work possible."
        lede="We partner with organizations across sectors to mobilize resources and talent at a scale the AAPI community has never seen."
      />
      <PartnerSpotlight />
      <Section tone="cream" padding="lg" id="all">
        <EyebrowLabel>All Partners</EyebrowLabel>
        <h2 className="display-md mb-12 mt-4">
          Hundreds of organizations. One shared commitment.
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          {partnerCategories.map((category) => (
            <div key={category.title}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">
                {category.title}
              </p>
              <ul className="flex flex-col gap-2 text-lg">
                {category.partners.map((p) => (
                  <li key={p} className="border-b border-ink/10 pb-2">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <RelatedLinks
        heading="Partner with us."
        items={[
          {
            label: "AAPI Giving Challenge",
            href: "/partners/giving-challenge",
            description: "Raise the standard of investment in AAPIs.",
          },
          {
            label: "ERG Network",
            href: "/work/prosperity",
            description: "Build lasting pipelines for AAPI leadership.",
          },
          {
            label: "Contact Partnerships",
            href: "/about/contact",
            description: "Get in touch with our partnerships team.",
          },
        ]}
      />
    </>
  );
}
