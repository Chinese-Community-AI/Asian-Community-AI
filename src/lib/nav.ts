export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  sections?: {
    title: string;
    links: NavLink[];
  }[];
  feature?: {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
  };
};

export const primaryNav: NavGroup[] = [
  {
    label: "About",
    href: "/about",
    sections: [
      {
        title: "About Us",
        links: [
          { label: "Overview", href: "/about" },
          { label: "Mission & Vision", href: "/about/mission" },
          { label: "Founding Story", href: "/about/story" },
          { label: "2025 Annual Impact Report", href: "/about/impact" },
        ],
      },
      {
        title: "Our Leadership",
        links: [
          { label: "Board & Staff", href: "/about/leadership" },
          { label: "Advisory Council", href: "/about/leadership#advisory" },
        ],
      },
      {
        title: "Join Us",
        links: [
          { label: "Careers", href: "/about/careers" },
          { label: "Contact", href: "/about/contact" },
        ],
      },
    ],
    feature: {
      eyebrow: "Mission",
      title: "Building belonging for 25M+ AAPIs",
      description:
        "Serving Asian American, Native Hawaiian, and Pacific Islander communities free from discrimination, slander, and violence.",
      href: "/about/mission",
    },
  },
  {
    label: "Our Approach",
    href: "/approach",
    sections: [
      {
        title: "Strategy",
        links: [
          { label: "Our Approach", href: "/approach" },
          { label: "Our Strategy", href: "/approach#strategy" },
        ],
      },
    ],
    feature: {
      eyebrow: "Giving Challenge",
      title: "AAPI Giving Challenge",
      description:
        "Inspiring organizations to raise the standard of investment in AAPIs everywhere.",
      href: "/partners/giving-challenge",
    },
  },
  {
    label: "Our Work",
    href: "/work",
    sections: [
      {
        title: "Overview",
        links: [
          { label: "Our Work", href: "/work" },
          { label: "Community Partners", href: "/partners" },
          { label: "STAATUS Index 2026", href: "/work/research#staatus" },
          { label: "Annual Impact Report", href: "/about/impact" },
        ],
      },
      {
        title: "Initiatives",
        links: [
          { label: "Safety", href: "/work/safety" },
          { label: "Belonging", href: "/work/belonging" },
          { label: "Prosperity", href: "/work/prosperity" },
          { label: "Research + Resources", href: "/work/research" },
        ],
      },
    ],
    feature: {
      eyebrow: "Explore",
      title: "Safety National Network",
      description:
        "Powering 56 grantee partners across 14 metropolitan areas to prevent anti-AAPI hate.",
      href: "/work/safety",
    },
  },
  {
    label: "Our Partners",
    href: "/partners",
    sections: [
      {
        title: "Partnership",
        links: [
          { label: "Overview", href: "/partners" },
          { label: "AAPI Giving Challenge", href: "/partners/giving-challenge" },
          { label: "All Partners", href: "/partners#all" },
        ],
      },
    ],
  },
  {
    label: "News",
    href: "/news",
    sections: [
      {
        title: "Updates",
        links: [
          { label: "News & Media", href: "/news" },
          { label: "Press Releases", href: "/news#press" },
          { label: "Newsletters", href: "/news#newsletters" },
          { label: "The Takeaway: Our Blog", href: "/news/blog" },
        ],
      },
    ],
    feature: {
      eyebrow: "The Takeaway",
      title: "Latest essays from the AAPI community",
      description:
        "Generational divides, cultural pride, and the full range of the Asian+American experience.",
      href: "/news/blog",
    },
  },
  {
    label: "Events",
    href: "/events",
  },
];

export const footerNav = [
  {
    title: "About",
    links: [
      { label: "Overview", href: "/about" },
      { label: "Our People", href: "/about/leadership" },
      { label: "Careers", href: "/about/careers" },
      { label: "Contact Us", href: "/about/contact" },
      { label: "Donate", href: "/donate" },
    ],
  },
  {
    title: "Our Approach",
    links: [
      { label: "Our Approach", href: "/approach" },
      { label: "Our Strategy", href: "/approach#strategy" },
    ],
  },
  {
    title: "Our Work",
    links: [
      { label: "Overview", href: "/work" },
      { label: "Community Partners", href: "/partners" },
      { label: "STAATUS Index 2026", href: "/work/research#staatus" },
      { label: "Annual Impact Report", href: "/about/impact" },
    ],
  },
  {
    title: "Initiatives",
    links: [
      { label: "Safety", href: "/work/safety" },
      { label: "Belonging", href: "/work/belonging" },
      { label: "Prosperity", href: "/work/prosperity" },
      { label: "Research + Resources", href: "/work/research" },
    ],
  },
  {
    title: "Our Partners",
    links: [
      { label: "Partnerships", href: "/partners" },
      { label: "AAPI Giving Challenge", href: "/partners/giving-challenge" },
      { label: "All Partners", href: "/partners#all" },
    ],
  },
  {
    title: "News",
    links: [
      { label: "News & Media", href: "/news" },
      { label: "Press Releases", href: "/news#press" },
      { label: "The Takeaway: Our Blog", href: "/news/blog" },
    ],
  },
];
