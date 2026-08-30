import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Wedding Photography & Films",
  description: "Documentary-led luxury Bengali and destination wedding photography and cinematography in Kolkata and across India.",
};

export default function Page() {
  return <ServiceDetailPage slug="wedding" />;
}
