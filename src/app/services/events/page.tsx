import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Events & Private Celebrations",
  description: "Comprehensive photography and film coverage for birthdays, anniversaries, family milestones, and private galas in Kolkata.",
  alternates: { canonical: "/services/events" },
  openGraph: {
    title: "Events & Private Celebrations | স্মৃতিকুঠি The Wedding Tales",
    description: "Comprehensive photography and film coverage for birthdays, anniversaries, family milestones, and private galas in Kolkata.",
    url: `${siteConfig.url}/services/events`,
    images: [{ url: images.event.src, width: 1200, height: 800, alt: "Events & Celebrations Photography Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="events" />;
}
