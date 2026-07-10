import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = { title: "Wedding Photography", description: "Documentary-led luxury wedding photography in Kolkata and destination weddings across India." };

export default function Page() {
  return <ServiceDetailPage slug="wedding-photography" />;
}
