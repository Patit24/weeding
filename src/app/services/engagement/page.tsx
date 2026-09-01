import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Engagement & Ring Ceremony Photography",
  description: "Intimate and elegant engagement, ring exchange, and family Aashirbaad photography & cinematic films in Kolkata.",
  alternates: { canonical: "/services/engagement" },
  openGraph: {
    title: "Engagement & Ring Ceremony Photography | স্মৃতিকুঠি The Wedding Tales",
    description: "Intimate and elegant engagement, ring exchange, and family Aashirbaad photography & cinematic films in Kolkata.",
    url: `${siteConfig.url}/services/engagement`,
    images: [{ url: images.featuredPortrait.src, width: 1200, height: 800, alt: "Engagement Photography Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="engagement" />;
}
