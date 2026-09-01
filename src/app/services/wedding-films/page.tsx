import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Wedding Cinematography Kolkata | 4K Bengali Wedding Films & Teasers",
  description:
    "Cinematic wedding films and 4K ceremony videos in Kolkata. Emotionally rich wedding cinema with live audio recording, Vedic chants, and drone cinematography.",
  alternates: { canonical: "/services/wedding-films" },
  openGraph: {
    title: "Wedding Cinematography Kolkata | 4K Bengali Wedding Films & Teasers",
    description:
      "Cinematic wedding films and 4K ceremony videos in Kolkata. Emotionally rich wedding cinema with live audio recording, Vedic chants, and drone cinematography.",
    url: `${siteConfig.url}/services/wedding-films`,
    images: [{ url: images.films.src, width: 1200, height: 800, alt: "Wedding Cinematography Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="wedding-films" />;
}
