import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = { title: "Wedding Planning", description: "Calm, thoughtful wedding planning, venue coordination, guest flow, and vendor management." };

export default function Page() {
  return <ServiceDetailPage slug="wedding-planning" />;
}
