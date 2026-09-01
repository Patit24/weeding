import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Pre-Wedding Shoot & Couple Films",
  description: "Creative, relaxed, and editorial pre-wedding photo and video sessions by Sritikuthi The Wedding Tales in Kolkata ghats, Rajbari, and outdoor locations.",
  alternates: { canonical: "/services/pre-wedding" },
  openGraph: {
    title: "Pre-Wedding Shoot & Couple Films | স্মৃতিকুঠি The Wedding Tales",
    description: "Creative, relaxed, and editorial pre-wedding photo and video sessions by Sritikuthi The Wedding Tales in Kolkata ghats, Rajbari, and outdoor locations.",
    url: `${siteConfig.url}/services/pre-wedding`,
    images: [{ url: images.mosaicTwo.src, width: 1200, height: 800, alt: "Pre-Wedding Shoot Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="pre-wedding" />;
}
