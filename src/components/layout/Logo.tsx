import Link from "next/link";

type LogoProps = {
  tone?: "ink" | "cream";
};

export function Logo({ tone = "ink" }: LogoProps) {
  const color = tone === "ink" ? "text-ink" : "text-cream";
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 ${color} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brick`}
      aria-label="AsianCommunity.AI home"
    >
      <svg
        viewBox="0 0 40 40"
        aria-hidden
        className="h-8 w-8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="19" fill="var(--color-brick)" />
        <path
          d="M12 26 L20 10 L28 26 Z"
          fill="var(--color-cream)"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="22" r="2.25" fill="var(--color-mustard)" />
      </svg>
      <span className="font-display text-lg font-medium leading-none tracking-tight">
        AsianCommunity<span className="text-brick">.AI</span>
      </span>
    </Link>
  );
}
