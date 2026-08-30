import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Commercial & Product Photography",
  description: "High-impact advertising imagery, product packshots, e-commerce visuals, and promotional ad films.",
};

export default function Page() {
  return <ServiceDetailPage slug="commercial" />;
}
