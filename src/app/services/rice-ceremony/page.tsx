import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Annaprashan Photoshoot Kolkata | Rice Ceremony (Mukhe Bhaat) Photography",
  description:
    "Cherish your baby's first rice eating ceremony with authentic Annaprasan (Mukhe Bhaat) photography in Kolkata. Tender family blessings, destiny tray moments, and heirloom albums.",
  alternates: { canonical: "/services/rice-ceremony" },
  openGraph: {
    title: "Annaprashan Photoshoot Kolkata | Rice Ceremony (Mukhe Bhaat) Photography",
    description:
      "Cherish your baby's first rice eating ceremony with authentic Annaprasan (Mukhe Bhaat) photography in Kolkata. Tender family blessings, destiny tray moments, and heirloom albums.",
    url: `${siteConfig.url}/services/rice-ceremony`,
    images: [{ url: images.riceCeremony.src, width: 1200, height: 800, alt: "Annaprashan Photoshoot Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="rice-ceremony" />;
}
