import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = { title: "Wedding Films", description: "Cinematic wedding films with real sound, atmosphere, and emotional pacing." };

export default function Page() {
  return <ServiceDetailPage slug="wedding-films" />;
}
