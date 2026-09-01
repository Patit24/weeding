import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Wedding Photography Kolkata | Documentary Bengali Wedding Photographer",
  description:
    "Top-rated luxury wedding photography in Kolkata. We capture authentic Bengali wedding moments—Shubho Drishti, Saat Paak, Sindoor Daan, and candid emotions with artistic mastery.",
  alternates: { canonical: "/services/wedding-photography" },
  openGraph: {
    title: "Wedding Photography Kolkata | Documentary Bengali Wedding Photographer",
    description:
      "Top-rated luxury wedding photography in Kolkata. We capture authentic Bengali wedding moments—Shubho Drishti, Saat Paak, Sindoor Daan, and candid emotions with artistic mastery.",
    url: `${siteConfig.url}/services/wedding-photography`,
    images: [{ url: images.mosaicOne.src, width: 1200, height: 800, alt: "Wedding Photography Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="wedding-photography" />;
}
