import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Wedding Photography & Films",
  description: "Documentary-led luxury Bengali and destination wedding photography and cinematography in Kolkata and across India.",
  alternates: { canonical: "/services/wedding" },
  openGraph: {
    title: "Wedding Photography & Films | স্মৃতিকুঠি The Wedding Tales",
    description: "Documentary-led luxury Bengali and destination wedding photography and cinematography in Kolkata and across India.",
    url: `${siteConfig.url}/services/wedding`,
    images: [{ url: images.photography.src, width: 1200, height: 800, alt: "Bengali Wedding Photography & Films Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="wedding" />;
}
