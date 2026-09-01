import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Model Shoot & Fashion Portfolio",
  description: "High-fashion lookbooks, model comp cards, agency portfolios, and studio editorial photography in Kolkata.",
  alternates: { canonical: "/services/model-shoot" },
  openGraph: {
    title: "Model Shoot & Fashion Portfolio | স্মৃতিকুঠি The Wedding Tales",
    description: "High-fashion lookbooks, model comp cards, agency portfolios, and studio editorial photography in Kolkata.",
    url: `${siteConfig.url}/services/model-shoot`,
    images: [{ url: images.featuredPortrait.src, width: 1200, height: 800, alt: "Fashion & Model Shoot Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="model-shoot" />;
}
