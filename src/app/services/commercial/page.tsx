import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Commercial & Product Photography in Kolkata | E-Commerce Shoots",
  description:
    "High-impact advertising imagery, product packshots, e-commerce catalog photography, and promotional commercial ad films in Kolkata.",
  alternates: { canonical: "/services/commercial" },
  openGraph: {
    title: "Commercial & Product Photography in Kolkata | E-Commerce Shoots",
    description:
      "High-impact advertising imagery, product packshots, e-commerce catalog photography, and promotional commercial ad films in Kolkata.",
    url: `${siteConfig.url}/services/commercial`,
    images: [{ url: images.event.src, width: 1200, height: 800, alt: "Commercial & Product Photography in Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="commercial" />;
}
