import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Corporate Event Photography Kolkata | Brand Shoots & Conferences",
  description:
    "High-end corporate event photography and video production in Kolkata. Business summits, executive headshots, awards galas, and PR brand visual assets.",
  alternates: { canonical: "/services/corporate-shoot" },
  openGraph: {
    title: "Corporate Event Photography Kolkata | Brand Shoots & Conferences",
    description:
      "High-end corporate event photography and video production in Kolkata. Business summits, executive headshots, awards galas, and PR brand visual assets.",
    url: `${siteConfig.url}/services/corporate-shoot`,
    images: [{ url: images.event.src, width: 1200, height: 800, alt: "Corporate Event Photography Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="corporate-shoot" />;
}
