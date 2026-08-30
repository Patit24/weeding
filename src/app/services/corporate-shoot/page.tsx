import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Corporate Shoot & Brand Conferences",
  description: "Executive headshots, corporate summits, PR visual assets, and conference video production.",
};

export default function Page() {
  return <ServiceDetailPage slug="corporate-shoot" />;
}
