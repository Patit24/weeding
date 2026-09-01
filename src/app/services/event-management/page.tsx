import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Event Management & Production",
  description: "Premium corporate, private, and family event management with refined planning, stage production, and styling in Kolkata.",
  alternates: { canonical: "/services/event-management" },
  openGraph: {
    title: "Event Management & Production | স্মৃতিকুঠি The Wedding Tales",
    description: "Premium corporate, private, and family event management with refined planning, stage production, and styling in Kolkata.",
    url: `${siteConfig.url}/services/event-management`,
    images: [{ url: images.planning.src, width: 1200, height: 800, alt: "Event Management Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="event-management" />;
}
