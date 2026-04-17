import { Section } from "./Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

type Program = {
  title: string;
  description: string;
};

type ProgramsGridProps = {
  eyebrow: string;
  heading: string;
  programs: Program[];
};

export function ProgramsGrid({ eyebrow, heading, programs }: ProgramsGridProps) {
  return (
    <Section tone="cream-50" padding="lg">
      <div className="mb-10 max-w-3xl">
        <EyebrowLabel>{eyebrow}</EyebrowLabel>
        <h2 className="display-md mt-4">{heading}</h2>
      </div>
      <ul className="grid gap-4 md:grid-cols-2">
        {programs.map((p) => (
          <li
            key={p.title}
            className="flex flex-col gap-3 rounded-2xl bg-cream p-8 ring-1 ring-ink/10"
          >
            <h3 className="font-display text-2xl leading-tight tracking-tight">
              {p.title}
            </h3>
            <p className="text-base leading-relaxed text-ink-muted">
              {p.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
