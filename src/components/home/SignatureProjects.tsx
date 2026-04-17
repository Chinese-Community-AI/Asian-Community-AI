import { signatureProjects } from "@/lib/content";
import { Section } from "@/components/layout/Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Card } from "@/components/ui/Card";

export function SignatureProjects() {
  return (
    <Section tone="cream" padding="lg">
      <div className="mb-12 flex flex-col gap-4 md:mb-16">
        <EyebrowLabel>Signature Projects</EyebrowLabel>
        <h2 className="display-lg max-w-3xl">
          Innovations we own, built to strengthen the national movement.
        </h2>
        <p className="max-w-2xl text-lg text-ink-muted">
          We identify gaps in AAPI infrastructure and fill them&mdash;with
          research, technology, storytelling, and community investment.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {signatureProjects.map((project) => (
          <Card
            key={project.id}
            eyebrow={project.eyebrow}
            title={project.title}
            description={project.description}
            href={project.href}
            image={project.image}
            tone={project.tone}
            aspect="portrait"
          />
        ))}
      </div>
    </Section>
  );
}
