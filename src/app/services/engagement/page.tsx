import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Engagement & Ring Ceremony",
  description: "Intimate and elegant engagement, ring exchange, and family Aashirbaad photography & cinematic films.",
};

export default function Page() {
  return <ServiceDetailPage slug="engagement" />;
}
