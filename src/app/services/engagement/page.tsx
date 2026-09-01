import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Engagement Photoshoot Kolkata | Ring Ceremony & Aashirbaad Photography",
  description:
    "Intimate and elegant engagement ceremony photography and cinematic films in Kolkata. Ring exchange, family Aashirbaad blessings, and romantic couple portraits.",
  alternates: { canonical: "/services/engagement" },
  openGraph: {
    title: "Engagement Photoshoot Kolkata | Ring Ceremony & Aashirbaad Photography",
    description:
      "Intimate and elegant engagement ceremony photography and cinematic films in Kolkata. Ring exchange, family Aashirbaad blessings, and romantic couple portraits.",
    url: `${siteConfig.url}/services/engagement`,
    images: [{ url: images.featuredPortrait.src, width: 1200, height: 800, alt: "Engagement Photoshoot Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="engagement" />;
}
