export const hero = {
  eyebrow: "Asian + American",
  headline: "We're not caught between two worlds. We're creating a new one.",
  body: "AsianCommunity.AI honors our roots and uses modern tools\u2014research, storytelling, and AI\u2014to show the world who we are: fully, powerfully, and proudly Asian+American.",
  primaryCta: { label: "Get Started", href: "/about" },
  secondaryCta: { label: "Read the Blog", href: "/news/blog" },
};

export const featureBanner = {
  eyebrow: "STAATUS Index 2026",
  title:
    "Six years of uncovering attitudes toward Asian Americans, Native Hawaiians, and Pacific Islanders.",
  description:
    "Our annual study surveys nearly 5,000 Americans on the most pressing issues facing AANHPIs today.",
  cta: { label: "Learn More", href: "/work/research#staatus" },
};

export const mission = {
  eyebrow: "Our Mission",
  statement:
    "To serve the Asian American and Pacific Islander community in their pursuit of belonging and prosperity that is free from discrimination, slander, and violence.",
};

export type Priority = {
  id: string;
  title: string;
  description: string;
  href: string;
  accent: "brick" | "mustard" | "sage" | "ink";
};

export const priorities: Priority[] = [
  {
    id: "safety",
    title: "Safety",
    description:
      "Providing critical infrastructure, resources, and support to address anti-AAPI hate and build resilience in our community.",
    href: "/work/safety",
    accent: "brick",
  },
  {
    id: "belonging",
    title: "Belonging",
    description:
      "Ensuring AAPIs are seen in our full humanity on the biggest stages, in classrooms, and through authentic storytelling.",
    href: "/work/belonging",
    accent: "mustard",
  },
  {
    id: "prosperity",
    title: "Prosperity",
    description:
      "Channeling resources to AAPI organizations who have long been overlooked and disproportionately underfunded.",
    href: "/work/prosperity",
    accent: "sage",
  },
  {
    id: "research",
    title: "Research + Resources",
    description:
      "Leveraging data, AI, and research to inform impact and equip researchers, policymakers, advocates, and the public.",
    href: "/work/research",
    accent: "ink",
  },
];

export const introParagraph = {
  eyebrow: "Who We Serve",
  body: "AsianCommunity.AI promotes safety, fosters belonging, and advances prosperity for the 25 million AAPIs across the country. We do this by building safety in cities, advocating for the teaching of AAPI history in classrooms, advancing decision-makers and creatives in Hollywood and journalism, ensuring we are represented across every level of leadership, and conducting research that guides our communities.",
};

export type SignatureProject = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  image: string;
  tone: "dark" | "cream" | "brick" | "mustard";
};

export const signatureProjects: SignatureProject[] = [
  {
    id: "cities-nyc",
    eyebrow: "Cities: NYC",
    title: "Fostering economic opportunity in New York City.",
    description:
      "Advancing safety, economic opportunity, and cultural pride for NYC's nearly 2 million AAPI residents.",
    href: "/work/belonging#nyc",
    image:
      "https://images.unsplash.com/photo-1519121785383-3229633bb75b?auto=format&fit=crop&w=1200&q=80",
    tone: "brick",
  },
  {
    id: "takeaway",
    eyebrow: "The Takeaway Blog",
    title: "A destination for AANHPI stories, art, and news.",
    description:
      "Essays, interviews, and criticism from a new generation of Asian+American voices.",
    href: "/news/blog",
    image:
      "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=1200&q=80",
    tone: "cream",
  },
  {
    id: "cities-seattle",
    eyebrow: "Cities: Seattle",
    title: "One block, business, and life at a time.",
    description:
      "Advancing safety and cultural pride in Seattle's Chinatown\u2013International District.",
    href: "/work/belonging#seattle",
    image:
      "https://images.unsplash.com/photo-1502175353174-a7a93e8b06cf?auto=format&fit=crop&w=1200&q=80",
    tone: "dark",
  },
  {
    id: "asian-american-campaign",
    eyebrow: "Asian+American Campaign",
    title: "We're creating a new world.",
    description:
      "A nationwide campaign celebrating the identity, creativity, and power of Asian Americans.",
    href: "/about/story",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
    tone: "mustard",
  },
  {
    id: "reframing",
    eyebrow: "Narrative Change",
    title: "Reframing representation in Hollywood.",
    description:
      "A business case for more Asian and Asian American narratives in entertainment, built for storytellers and studios alike.",
    href: "/work/belonging",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80",
    tone: "dark",
  },
  {
    id: "tala",
    eyebrow: "TALA",
    title: "Thriving AANHPI Leadership Accelerator.",
    description:
      "Developing the next generation of AANHPI executives, creatives, and civic leaders.",
    href: "/work/prosperity",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    tone: "brick",
  },
  {
    id: "staatus",
    eyebrow: "STAATUS Index 2026",
    title: "The pressing issues AANHPIs face today.",
    description:
      "We surveyed 4,909 Americans to uncover attitudes toward the Asian American and Pacific Islander community.",
    href: "/work/research#staatus",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80",
    tone: "cream",
  },
  {
    id: "history-hub",
    eyebrow: "AAPI History Hub",
    title: "A vetted K\u201312 platform for AAPI history.",
    description:
      "Lesson plans, multimedia, and learning materials on Asian American and Pacific Islander history.",
    href: "/work/belonging#history",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    tone: "mustard",
  },
];

export type PartnerStory = {
  id: string;
  partner: string;
  year: string;
  headline: string;
  description: string;
  href: string;
  image: string;
};

export const partnerStories: PartnerStory[] = [
  {
    id: "zoom",
    partner: "Zoom",
    year: "2024",
    headline: "Pioneering AAPI support through employee initiatives and philanthropy.",
    description:
      "Amid a surge of anti-AAPI hate, Zoom's PACT employee resource group sparked a $5M, 5-year commitment through the AAPI Giving Challenge.",
    href: "/partners#zoom",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "kkr",
    partner: "KKR",
    year: "2023",
    headline: "Fostering inclusive work environments and supporting AAPI nonprofits.",
    description:
      "Annual ERG networking receptions convene NYC-based leaders and build stronger pipelines for AAPI professionals across industries.",
    href: "/partners#kkr",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mastercard",
    partner: "Mastercard",
    year: "2023",
    headline: "Lifting up AAPI small businesses.",
    description:
      "Advancing sustainable change in historically marginalized communities through investments in AAPI-owned enterprises.",
    href: "/partners#mastercard",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "bofa",
    partner: "Bank of America",
    year: "2023",
    headline: "Investing in Asian American communities.",
    description:
      "Supporting cultural heritage programs, community involvement, and professional development opportunities across the country.",
    href: "/partners#bofa",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "pg",
    partner: "Procter & Gamble",
    year: "2022",
    headline: "Elevating stories that embrace the AAPI experience.",
    description:
      "Representative storytelling that brings communities together and takes meaningful action for equality and inclusion.",
    href: "/partners#pg",
    image:
      "https://images.unsplash.com/photo-1525936274380-42d61b3d09b6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "walmart",
    partner: "Walmart.org",
    year: "2022",
    headline: "Addressing systemic racism.",
    description:
      "A $100M, 5-year commitment to racial equity, including support for projects that drive impact in the AAPI community.",
    href: "/partners#walmart",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
  },
];

export type ImpactStat = {
  id: string;
  figure: string;
  label: string;
  description: string;
};

export const impactStats: ImpactStat[] = [
  {
    id: "catalyzed",
    figure: "$2.8B",
    label: "in impact catalyzed",
    description:
      "Grants, diversity programs, supplier investments, and in-kind services mobilized by Giving Challenge partners over three years.",
  },
  {
    id: "population-served",
    figure: "50%",
    label: "of the AAPI population",
    description:
      "Served by the Anti-Hate National Network, powered by 56 grantee partners across 14 metros.",
  },
  {
    id: "trained",
    figure: "5,942",
    label: "individuals trained",
    description:
      "Across 169 public-safety trainings through the Anti-Hate National Network in the last year.",
  },
  {
    id: "orgs",
    figure: "113",
    label: "organizations funded",
    description:
      "Received grants, sponsorships, or donations directly from AsianCommunity.AI and its partners.",
  },
  {
    id: "storytellers",
    figure: "66",
    label: "rising storytellers",
    description:
      "Supported in entertainment and journalism through Narrative Change funding.",
  },
  {
    id: "surveyed",
    figure: "9,681",
    label: "people surveyed",
    description:
      "Across the STAATUS Index, Youth Mental Health Study, and City Safety Studies.",
  },
  {
    id: "community",
    figure: "24,613",
    label: "community members served",
    description:
      "Including 7,774 survivors and victims of hate, bias, and gender-based violence supported by our network.",
  },
  {
    id: "erg",
    figure: "37",
    label: "corporate ERG partners",
    description:
      "Companies joined the ERG Network to build lasting pipelines for AAPI leadership.",
  },
];

export const newsletter = {
  eyebrow: "Join the Movement",
  headline:
    "Combat anti-Asian hate. Build belonging and prosperity for AANHPIs nationwide.",
  body: "Sign up for our free newsletter for updates on our work, research, and the community stories we're telling together.",
};
