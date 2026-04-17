import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

type RelatedLinksProps = {
  eyebrow?: string;
  heading: string;
  items: { label: string; href: string; description?: string }[];
};

export function RelatedLinks({ eyebrow, heading, items }: RelatedLinksProps) {
  return (
    <Section tone="cream-50" padding="lg">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          {eyebrow && <EyebrowLabel>{eyebrow}</EyebrowLabel>}
          <h2 className="display-md mt-4 max-w-2xl">{heading}</h2>
        </div>
      </div>
      <ul className="grid gap-px overflow-hidden rounded-2xl bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.href} className="bg-cream-50">
            <Link
              href={item.href}
              className="group flex h-full flex-col gap-3 p-8 transition-colors hover:bg-cream"
            >
              <span className="inline-flex items-center justify-between">
                <span className="font-display text-2xl leading-tight tracking-tight">
                  {item.label}
                </span>
                <ArrowUpRight className="h-5 w-5 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brick" />
              </span>
              {item.description && (
                <p className="text-sm text-ink-muted">{item.description}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
