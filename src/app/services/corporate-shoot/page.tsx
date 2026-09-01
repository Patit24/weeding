import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Corporate Shoot & Brand Conferences",
  description: "Executive headshots, corporate summits, PR visual assets, and conference video production in Kolkata.",
  alternates: { canonical: "/services/corporate-shoot" },
  openGraph: {
    title: "Corporate Shoot & Brand Conferences | স্মৃতিকুঠি The Wedding Tales",
    description: "Executive headshots, corporate summits, PR visual assets, and conference video production in Kolkata.",
    url: `${siteConfig.url}/services/corporate-shoot`,
    images: [{ url: images.event.src, width: 1200, height: 800, alt: "Corporate Photography Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="corporate-shoot" />;
}
