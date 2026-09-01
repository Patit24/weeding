import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Wedding Planning & Vendor Coordination",
  description: "End-to-end wedding planning, vendor management, styling, and day-of coordination across Kolkata and destination wedding venues.",
  alternates: { canonical: "/services/wedding-planning" },
  openGraph: {
    title: "Wedding Planning & Vendor Coordination | স্মৃতিকুঠি The Wedding Tales",
    description: "End-to-end wedding planning, vendor management, styling, and day-of coordination across Kolkata and destination wedding venues.",
    url: `${siteConfig.url}/services/wedding-planning`,
    images: [{ url: images.planning.src, width: 1200, height: 800, alt: "Wedding Planning Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="wedding-planning" />;
}
