import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "on-dark";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brick text-cream hover:bg-brick-dark focus-visible:outline-brick-dark",
  secondary:
    "bg-transparent text-ink border border-ink/25 hover:bg-ink hover:text-cream focus-visible:outline-ink",
  ghost:
    "bg-transparent text-ink hover:text-brick focus-visible:outline-brick underline-offset-4 hover:underline px-0",
  "on-dark":
    "bg-cream text-ink hover:bg-mustard focus-visible:outline-cream",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  showArrow = false,
  className = "",
}: ButtonProps) {
  const isExternal = href.startsWith("http");
  const base =
    "inline-flex items-center gap-2 rounded-pill px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4";
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        {showArrow && <ArrowUpRight className="h-4 w-4" />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {showArrow && <ArrowUpRight className="h-4 w-4" />}
    </Link>
  );
}
