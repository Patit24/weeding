import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = { title: "Event Management", description: "Premium corporate, private, and family event management with refined planning and styling." };

export default function Page() {
  return <ServiceDetailPage slug="event-management" />;
}
