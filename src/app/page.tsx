import { Hero } from "@/components/home/Hero";
import { FeatureBanner } from "@/components/home/FeatureBanner";
import { MissionStatement } from "@/components/home/MissionStatement";
import { PrioritiesGrid } from "@/components/home/PrioritiesGrid";
import { IntroParagraph } from "@/components/home/IntroParagraph";
import { SignatureProjects } from "@/components/home/SignatureProjects";
import { PartnerSpotlight } from "@/components/home/PartnerSpotlight";
import { ImpactStats } from "@/components/home/ImpactStats";
import { NewsletterSignup } from "@/components/home/NewsletterSignup";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureBanner />
      <MissionStatement />
      <PrioritiesGrid />
      <IntroParagraph />
      <SignatureProjects />
      <PartnerSpotlight />
      <ImpactStats />
      <NewsletterSignup />
    </>
  );
}
