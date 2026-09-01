import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Cinematic 4K Wedding Films",
  description: "Emotionally rich 4K cinematic wedding films and chaptered ceremony features with authentic sound recording, Vedic chants, and licensed scores.",
  alternates: { canonical: "/services/wedding-films" },
  openGraph: {
    title: "Cinematic 4K Wedding Films | স্মৃতিকুঠি The Wedding Tales",
    description: "Emotionally rich 4K cinematic wedding films and chaptered ceremony features with authentic sound recording, Vedic chants, and licensed scores.",
    url: `${siteConfig.url}/services/wedding-films`,
    images: [{ url: images.films.src, width: 1200, height: 800, alt: "4K Cinematic Wedding Films Kolkata" }],
  },
};

export default function Page() {
  return <ServiceDetailPage slug="wedding-films" />;
}
