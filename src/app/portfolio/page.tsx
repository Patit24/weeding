import type { Metadata } from "next";
import { images } from "@/data/images";
import { PageHero } from "@/components/sections/PageHero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Wedding, pre-wedding, film, event design, and corporate event stories by Sritikuthi The Wedding Tales.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Stories with texture, people, and place." intro="Browse Bengali weddings, films, pre-wedding sessions, private events, and design-led gatherings shaped by Sritikuthi." image={images.mosaicOne} />
      <section className="py-24">
        <div className="container-editorial">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
