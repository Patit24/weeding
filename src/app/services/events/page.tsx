import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Event & Birthday Photoshoot in Kolkata | Private Celebrations & Galas",
  description:
    "Professional event photography and videography in Kolkata for milestone birthdays, anniversaries, family get-togethers, and private banquets.",
  alternates: { canonical: "/services/events" },
  openGraph: {
    title: "Event & Birthday Photoshoot in Kolkata | Private Celebrations & Galas",
    description:
      "Professional event photography and videography in Kolkata for milestone birthdays, anniversaries, family get-togethers, and private banquets.",
    url: `${siteConfig.url}/services/events`,
    images: [{ url: images.event.src, width: 1200, height: 800, alt: "Event & Birthday Photoshoot in Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="events" />;
}
