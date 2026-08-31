import type { Metadata } from "next";
import { images } from "@/data/images";
import { PageHero } from "@/components/sections/PageHero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { MotionSection } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Wedding, pre-wedding, film, event design, and corporate event stories by Sritikuthi The Wedding Tales.",
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
