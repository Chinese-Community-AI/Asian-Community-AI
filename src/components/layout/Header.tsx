"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { primaryNav } from "@/lib/nav";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || openGroup
          ? "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_rgba(26,26,26,0.08)]"
          : "bg-cream"
      }`}
      onMouseLeave={() => setOpenGroup(null)}
    >
      <div className="mx-auto flex w-full max-w-[88rem] items-center justify-between gap-6 px-6 py-5 md:px-10 lg:px-14">
        <Logo />

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
          {primaryNav.map((group) => {
            const hasMenu = !!group.sections;
            const isOpen = openGroup === group.label;
            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => hasMenu && setOpenGroup(group.label)}
              >
                {hasMenu ? (
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 rounded-pill px-3 py-2 text-sm font-medium transition-colors ${
                      isOpen ? "text-brick" : "text-ink hover:text-brick"
                    }`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onFocus={() => setOpenGroup(group.label)}
                  >
                    {group.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={group.href}
                    className="inline-flex items-center rounded-pill px-3 py-2 text-sm font-medium text-ink transition-colors hover:text-brick"
                  >
                    {group.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/donate"
            className="inline-flex items-center gap-1.5 rounded-pill bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-brick"
          >
            Donate
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-ink lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Desktop mega menu */}
      {openGroup &&
        (() => {
          const group = primaryNav.find((g) => g.label === openGroup);
          if (!group?.sections) return null;
          return (
            <div
              className="hidden border-t border-ink/10 bg-cream lg:block"
              onMouseEnter={() => setOpenGroup(group.label)}
            >
              <div className="mx-auto grid w-full max-w-[88rem] gap-12 px-6 py-10 md:px-10 lg:grid-cols-[1.4fr_1fr] lg:px-14">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {group.sections.map((section) => (
                    <div key={section.title}>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                        {section.title}
                      </p>
                      <ul className="space-y-2">
                        {section.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="text-base text-ink transition-colors hover:text-brick"
                              onClick={() => setOpenGroup(null)}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {group.feature && (
                  <Link
                    href={group.feature.href}
                    className="group flex flex-col justify-between rounded-2xl bg-ink p-8 text-cream transition-transform hover:-translate-y-0.5"
                    onClick={() => setOpenGroup(null)}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mustard">
                      {group.feature.eyebrow}
                    </p>
                    <div className="mt-6 flex flex-col gap-3">
                      <h4 className="text-2xl leading-tight tracking-tight">
                        {group.feature.title}
                      </h4>
                      <p className="text-sm opacity-80">
                        {group.feature.description}
                      </p>
                    </div>
                    <span className="mt-8 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                )}
              </div>
            </div>
          );
        })()}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[73px] z-40 h-[calc(100vh-73px)] overflow-y-auto bg-cream lg:hidden">
          <nav className="flex flex-col gap-8 px-6 py-10">
            {primaryNav.map((group) => (
              <div key={group.label} className="border-b border-ink/10 pb-6">
                <Link
                  href={group.href}
                  className="block text-2xl font-medium tracking-tight text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {group.label}
                </Link>
                {group.sections && (
                  <ul className="mt-4 flex flex-col gap-2">
                    {group.sections.flatMap((section) =>
                      section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="block text-base text-ink-muted transition-colors hover:text-brick"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      )),
                    )}
                  </ul>
                )}
              </div>
            ))}
            <Link
              href="/donate"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-pill bg-ink px-6 py-4 text-sm font-semibold text-cream"
              onClick={() => setMobileOpen(false)}
            >
              Donate
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
