import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Fashion & Model Photoshoot Kolkata | Portfolio & Lookbook Photography",
  description:
    "Editorial fashion photography and model portfolio shoots in Kolkata. Comp cards, agency portfolios, designer lookbooks, and high-fashion studio sessions.",
  alternates: { canonical: "/services/model-shoot" },
  openGraph: {
    title: "Fashion & Model Photoshoot Kolkata | Portfolio & Lookbook Photography",
    description:
      "Editorial fashion photography and model portfolio shoots in Kolkata. Comp cards, agency portfolios, designer lookbooks, and high-fashion studio sessions.",
    url: `${siteConfig.url}/services/model-shoot`,
    images: [{ url: images.featuredPortrait.src, width: 1200, height: 800, alt: "Fashion & Model Photoshoot Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="model-shoot" />;
}
