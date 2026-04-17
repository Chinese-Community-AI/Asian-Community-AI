import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { EyebrowLabel } from "./EyebrowLabel";

export type CardTone = "dark" | "cream" | "brick" | "mustard";

const toneClasses: Record<CardTone, string> = {
  dark: "bg-ink text-cream",
  cream: "bg-cream-50 text-ink border border-ink/10",
  brick: "bg-brick text-cream",
  mustard: "bg-mustard text-ink",
};

type CardProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  href: string;
  image?: string;
  tone?: CardTone;
  aspect?: "square" | "portrait" | "landscape";
};

export function Card({
  eyebrow,
  title,
  description,
  href,
  image,
  tone = "cream",
  aspect = "landscape",
}: CardProps) {
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "portrait"
        ? "aspect-[3/4]"
        : "aspect-[4/3]";

  return (
    <Link
      href={href}
      className={`group relative flex flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1 ${toneClasses[tone]}`}
    >
      {image && (
        <div className={`relative w-full overflow-hidden ${aspectClass}`}>
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-6 md:p-7">
        {eyebrow && (
          <EyebrowLabel tone={tone === "cream" ? "brick" : "cream"}>
            {eyebrow}
          </EyebrowLabel>
        )}
        <h3 className="text-2xl leading-tight tracking-tight md:text-[1.7rem]">
          {title}
        </h3>
        {description && (
          <p
            className={`text-sm leading-relaxed ${
              tone === "cream" ? "text-ink-muted" : "opacity-85"
            }`}
          >
            {description}
          </p>
        )}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold uppercase tracking-[0.18em]">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
