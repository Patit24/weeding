import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Pre Wedding Shoot in Kolkata | Cinematic Couple Photoshoot & Locations",
  description:
    "Best pre-wedding photography and 4K couple films in Kolkata. Shot at Princep Ghat, Bawali Rajbari, Victoria Memorial, Shantiniketan, and coastal beach destinations.",
  alternates: { canonical: "/services/pre-wedding" },
  openGraph: {
    title: "Pre Wedding Shoot in Kolkata | Cinematic Couple Photoshoot & Locations",
    description:
      "Best pre-wedding photography and 4K couple films in Kolkata. Shot at Princep Ghat, Bawali Rajbari, Victoria Memorial, Shantiniketan, and coastal beach destinations.",
    url: `${siteConfig.url}/services/pre-wedding`,
    images: [{ url: images.mosaicTwo.src, width: 1200, height: 800, alt: "Pre Wedding Shoot in Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="pre-wedding" />;
}
