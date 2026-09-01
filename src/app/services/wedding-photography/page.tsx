import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Documentary Wedding Photography",
  description: "Documentary-led luxury Bengali wedding photography in Kolkata and destination weddings across India. Authentic Shubho Drishti, Sindoor Daan, and candid emotions.",
  alternates: { canonical: "/services/wedding-photography" },
  openGraph: {
    title: "Documentary Wedding Photography | স্মৃতিকুঠি The Wedding Tales",
    description: "Documentary-led luxury Bengali wedding photography in Kolkata and destination weddings across India. Authentic Shubho Drishti, Sindoor Daan, and candid emotions.",
    url: `${siteConfig.url}/services/wedding-photography`,
    images: [{ url: images.mosaicOne.src, width: 1200, height: 800, alt: "Wedding Photography Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="wedding-photography" />;
}
