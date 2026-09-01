import type { Metadata } from "next";
import { images } from "@/data/images";
import { PageHero } from "@/components/sections/PageHero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { MotionSection } from "@/components/ui/Motion";

import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Bengali Wedding Photography Portfolio Kolkata | Real Weddings & Films",
  description:
    "Explore our wedding photography and 4K film portfolio in Kolkata. Authentic Bengali weddings, sacred Shubho Drishti, Sindoor Daan, intimate pre-weddings, and destination celebrations.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Bengali Wedding Photography Portfolio Kolkata | Real Weddings & Films",
    description:
      "Explore our wedding photography and 4K film portfolio in Kolkata. Authentic Bengali weddings, sacred Shubho Drishti, Sindoor Daan, intimate pre-weddings, and destination celebrations.",
    url: `${siteConfig.url}/portfolio`,
    images: [{ url: images.featuredPortrait.src, width: 1200, height: 800, alt: "Bengali Wedding Photography Portfolio Kolkata" }],
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
