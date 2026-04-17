import { Section } from "./Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

type TextBlockProps = {
  eyebrow?: string;
  heading?: string;
  children: React.ReactNode;
  tone?: "cream" | "cream-50" | "ink" | "brick" | "mustard";
};

export function TextBlock({
  eyebrow,
  heading,
  children,
  tone = "cream",
}: TextBlockProps) {
  return (
    <Section tone={tone} containerSize="md" padding="lg">
      <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
        {(eyebrow || heading) && (
          <div className="lg:sticky lg:top-28 lg:self-start">
            {eyebrow && (
              <EyebrowLabel tone={tone === "ink" || tone === "brick" ? "cream" : "brick"}>
                {eyebrow}
              </EyebrowLabel>
            )}
            {heading && (
              <h2 className="display-md mt-4 max-w-sm text-balance">{heading}</h2>
            )}
          </div>
        )}
        <div className="flex max-w-2xl flex-col gap-5 text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </Section>
  );
}
