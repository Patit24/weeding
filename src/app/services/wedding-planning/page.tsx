import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Wedding Planning in Kolkata | Luxury Event Coordination & Styling",
  description:
    "Bespoke Bengali and destination wedding planning in Kolkata. Venue booking, guest coordination, traditional vendor management, and luxury decor styling.",
  alternates: { canonical: "/services/wedding-planning" },
  openGraph: {
    title: "Wedding Planning in Kolkata | Luxury Event Coordination & Styling",
    description:
      "Bespoke Bengali and destination wedding planning in Kolkata. Venue booking, guest coordination, traditional vendor management, and luxury decor styling.",
    url: `${siteConfig.url}/services/wedding-planning`,
    images: [{ url: images.planning.src, width: 1200, height: 800, alt: "Wedding Planning in Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="wedding-planning" />;
}
