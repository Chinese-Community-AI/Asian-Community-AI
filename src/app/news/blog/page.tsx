import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";

export const metadata = { title: "The Takeaway Blog" };

const posts = [
  {
    date: "Apr 14, 2026",
    category: "Culture",
    title:
      "\u2018BEEF\u2019 Creator Lee Sung Jin Explores Generational Divides and the Range of Asian Experiences in Season 2",
    excerpt:
      "A conversation on how the Emmy-winning series evolved, and why the messy, contradictory Asian American experience belongs on screen.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "Apr 03, 2026",
    category: "Research",
    title: "Five things we learned from the 2026 STAATUS Index",
    excerpt:
      "From media representation to workplace equity, this year's data shows real movement\u2014and persistent blind spots.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "Mar 22, 2026",
    category: "Community",
    title: "Inside Seattle's Chinatown-International District revival",
    excerpt:
      "Block by block, neighbors, business owners, and organizers are rewriting the future of one of America's most historic Asian American neighborhoods.",
    image:
      "https://images.unsplash.com/photo-1502175353174-a7a93e8b06cf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "Mar 08, 2026",
    category: "Mental Health",
    title: "Beyond the surface: young AAPIs and the mental health frontier",
    excerpt:
      "What a new mixed-methods study of AAPI youth aged 14\u201325 tells us about the care infrastructure we still need to build.",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "Feb 19, 2026",
    category: "Hollywood",
    title: "The business case for more Asian American stories on screen",
    excerpt:
      "Our Reframing Representation report finds that investing in AAPI narratives isn't just the right thing&mdash;it's the commercial one.",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "Feb 05, 2026",
    category: "Safety",
    title: "What two years of public safety training taught our network",
    excerpt:
      "169 trainings, 5,942 people, one emerging playbook for community-led de-escalation and response.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The Takeaway"
        title="Essays, interviews, and reporting on the AAPI experience."
        lede="A destination for AANHPI stories, art, and news from a new generation of writers, artists, and thinkers."
      />
      <Section tone="cream" padding="lg">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="flex flex-col">
              <Link
                href="#"
                className="group flex flex-col gap-5 rounded-2xl bg-cream-50 p-5 ring-1 ring-ink/5 transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3 px-2 pb-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-brick">
                    {post.category} &middot; {post.date}
                  </p>
                  <h3 className="font-display text-2xl leading-tight tracking-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                    Read
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
