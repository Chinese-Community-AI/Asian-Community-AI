import { impactStats } from "@/lib/content";
import { Section } from "@/components/layout/Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { StatCounter } from "@/components/ui/StatCounter";

export function ImpactStats() {
  return (
    <Section tone="cream-50" padding="lg">
      <div className="mb-12 max-w-2xl md:mb-16">
        <EyebrowLabel>Impact by the Numbers</EyebrowLabel>
        <h2 className="display-lg mt-4">
          What community investment looks like when done at scale.
        </h2>
      </div>
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {impactStats.map((stat) => (
          <StatCounter
            key={stat.id}
            figure={stat.figure}
            label={stat.label}
            description={stat.description}
          />
        ))}
      </div>
    </Section>
  );
}
