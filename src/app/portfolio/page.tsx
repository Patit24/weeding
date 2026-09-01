import type { Metadata } from "next";
import { images } from "@/data/images";
import { PageHero } from "@/components/sections/PageHero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { MotionSection } from "@/components/ui/Motion";

import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio & Wedding Stories",
  description: "Browse authentic Bengali weddings, sacred Shubho Drishti rituals, pre-wedding couple films, and heirloom celebrations framed by Sritikuthi The Wedding Tales.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio & Wedding Stories | স্মৃতিকুঠি The Wedding Tales",
    description: "Browse authentic Bengali weddings, sacred Shubho Drishti rituals, pre-wedding couple films, and heirloom celebrations framed by Sritikuthi The Wedding Tales.",
    url: `${siteConfig.url}/portfolio`,
    images: [{ url: images.featuredPortrait.src, width: 1200, height: 800, alt: "Sritikuthi Wedding Photography Portfolio" }],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio & Archives"
        title="Stories with texture, people, and place."
        intro="Browse authentic Bengali weddings, sacred Shubho Drishti rituals, pre-wedding couple films, and heirloom celebrations framed by Sritikuthi."
        image={images.featuredPortrait}
        ctaText="Explore Celebrations"
        ctaHref="#portfolio-grid"
      />
      <MotionSection id="portfolio-grid" className="py-20 lg:py-28">
        <div className="container-editorial">
          <PortfolioGrid />
        </div>
      </MotionSection>
    </>
  );
}
