import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { journalPosts } from "@/data/journal";
import { PageHero } from "@/components/sections/PageHero";
import { JournalGrid } from "@/components/sections/JournalGrid";
import { formatDate } from "@/lib/utils";
import { FadeIn, ImageReveal, MotionSection } from "@/components/ui/Motion";

import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Bengali Wedding Photography Guides | Rituals, Costs & Planning Kolkata",
  description:
    "Complete Bengali wedding planning & photography guides: Aiburobhat, Shubho Drishti, Saat Paak, Annaprashan photoshoot tips, and Kolkata wedding photographer price guides.",
  alternates: { canonical: "/journal" },
  openGraph: {
    title: "Bengali Wedding Photography Guides | Rituals, Costs & Planning Kolkata",
    description:
      "Complete Bengali wedding planning & photography guides: Aiburobhat, Shubho Drishti, Saat Paak, Annaprashan photoshoot tips, and Kolkata wedding photographer price guides.",
    url: `${siteConfig.url}/journal`,
    images: [{ url: images.intro.src, width: 1200, height: 800, alt: "Bengali Wedding Photography Guides Kolkata" }],
  },
};

export default function JournalPage() {
  const featured = journalPosts[0];
  return (
    <>
      <PageHero eyebrow="Journal" title="Notes for celebrations with feeling." intro="Practical, editorial guidance for couples, families, and hosts who want the planning to feel as considered as the day itself." image={images.intro} />
      <MotionSection className="py-24">
        <div className="container-editorial">
          <Link href={`/journal/${featured.slug}`} className="group grid items-center gap-10 border-b border-[var(--fine-border)] pb-14 lg:grid-cols-[1.1fr_0.9fr]">
            <ImageReveal className="relative block aspect-[16/10] w-full overflow-hidden">
              <Image src={featured.image.src} alt={featured.image.alt} fill sizes="60vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </ImageReveal>
            <FadeIn delay={0.12}>
              <span className="eyebrow">Featured · {featured.category} · {formatDate(featured.date)}</span>
              <span className="serif mt-5 block text-[clamp(3rem,6vw,6rem)] leading-[0.9] text-[var(--espresso)]">{featured.title}</span>
              <span className="mt-6 block leading-8 text-[var(--muted)]">{featured.excerpt}</span>
            </FadeIn>
          </Link>
          <div className="mt-14">
            <JournalGrid />
          </div>
        </div>
      </MotionSection>
      <MotionSection className="bg-[var(--sand)] py-20">
        <FadeIn className="container-editorial max-w-3xl text-center">
          <p className="eyebrow">Newsletter</p>
          <h2 className="serif mt-4 text-6xl text-[var(--espresso)]">A quieter note in your inbox.</h2>
          <p className="mt-5 text-[var(--muted)]">Occasional planning thoughts, no noise.</p>
        </FadeIn>
      </MotionSection>
    </>
  );
}
