import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Rice Ceremony (Annaprasan)",
  description: "Traditional and tender photography coverage for your baby's first solid food rice ceremony milestone in Kolkata.",
};

export default function Page() {
  return <ServiceDetailPage slug="rice-ceremony" />;
}
