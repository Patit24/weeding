import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Rice Ceremony (Annaprasan) Photography",
  description: "Traditional and tender photography coverage for your baby's first solid food rice ceremony milestone (Annaprasan) in Kolkata and West Bengal.",
  alternates: { canonical: "/services/rice-ceremony" },
  openGraph: {
    title: "Rice Ceremony (Annaprasan) Photography | স্মৃতিকুঠি The Wedding Tales",
    description: "Traditional and tender photography coverage for your baby's first solid food rice ceremony milestone (Annaprasan) in Kolkata and West Bengal.",
    url: `${siteConfig.url}/services/rice-ceremony`,
    images: [{ url: images.riceCeremony.src, width: 1200, height: 800, alt: "Rice Ceremony Photography Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="rice-ceremony" />;
}
