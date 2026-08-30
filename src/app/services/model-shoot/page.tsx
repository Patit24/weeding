import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Model Shoot & Fashion Portfolio",
  description: "High-fashion lookbooks, model comp cards, agency portfolios, and studio editorial photography.",
};

export default function Page() {
  return <ServiceDetailPage slug="model-shoot" />;
}
