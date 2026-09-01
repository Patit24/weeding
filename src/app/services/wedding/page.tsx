import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Best Bengali Wedding Photographer in Kolkata | Wedding Photography & 4K Films",
  description:
    "Award-winning documentary Bengali wedding photography and 4K cinematography in Kolkata, West Bengal, and destination venues across India. Capture sacred Shubho Drishti, Saat Paak, and Sindoor Daan.",
  alternates: { canonical: "/services/wedding" },
  openGraph: {
    title: "Best Bengali Wedding Photographer in Kolkata | Wedding Photography & 4K Films",
    description:
      "Award-winning documentary Bengali wedding photography and 4K cinematography in Kolkata, West Bengal, and destination venues across India. Capture sacred Shubho Drishti, Saat Paak, and Sindoor Daan.",
    url: `${siteConfig.url}/services/wedding`,
    images: [{ url: images.photography.src, width: 1200, height: 800, alt: "Best Bengali Wedding Photographer in Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="wedding" />;
}
