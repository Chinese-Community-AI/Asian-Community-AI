import { mission } from "@/lib/content";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Section } from "@/components/layout/Section";

export function MissionStatement() {
  return (
    <Section tone="cream" containerSize="md" padding="lg">
      <div className="flex flex-col items-center gap-8 text-center">
        <EyebrowLabel>{mission.eyebrow}</EyebrowLabel>
        <blockquote className="display-lg max-w-4xl text-balance">
          &ldquo;{mission.statement}&rdquo;
        </blockquote>
      </div>
    </Section>
  );
}
