import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Event Management in Kolkata | Corporate & Private Event Production",
  description:
    "Premium corporate conferences, luxury private galas, social gatherings, and celebration production with bespoke styling across Kolkata and West Bengal.",
  alternates: { canonical: "/services/event-management" },
  openGraph: {
    title: "Event Management in Kolkata | Corporate & Private Event Production",
    description:
      "Premium corporate conferences, luxury private galas, social gatherings, and celebration production with bespoke styling across Kolkata and West Bengal.",
    url: `${siteConfig.url}/services/event-management`,
    images: [{ url: images.planning.src, width: 1200, height: 800, alt: "Event Management in Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="event-management" />;
}
