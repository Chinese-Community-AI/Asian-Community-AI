import Link from "next/link";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { footerNav } from "@/lib/nav";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { FooterNewsletter } from "./FooterNewsletter";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="border-b border-cream/10">
        <Container size="lg" className="py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mustard">
                Stay Informed
              </p>
              <h2 className="mt-4 max-w-xl text-3xl leading-tight tracking-tight md:text-4xl">
                Sign up for our newsletter to receive the latest news,
                announcements, and stories from the AAPI community.
              </h2>
            </div>
            <FooterNewsletter />
          </div>
        </Container>
      </div>

      <Container size="lg" className="py-14">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-6">
            <Logo tone="cream" />
            <p className="max-w-sm text-sm text-cream/70">
              AsianCommunity.AI is an independent non-partisan initiative
              building belonging and prosperity for the Asian American, Native
              Hawaiian, and Pacific Islander community.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {footerNav.map((group) => (
              <div key={group.title}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-mustard">
                  {group.title}
                </p>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-cream/85 transition-colors hover:text-cream"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/60 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} AsianCommunity.AI. An independent
            501(c)(3) non-profit initiative. Contributions are tax-deductible to
            the extent provided by applicable federal tax laws.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-cream">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-cream">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
