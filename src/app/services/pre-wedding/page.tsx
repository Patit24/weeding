import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Pre-Wedding Shoot & Couple Films",
  description: "Creative, relaxed, and editorial pre-wedding photo and video sessions by Sritikuthi The Wedding Tales.",
};

export default function Page() {
  return <ServiceDetailPage slug="pre-wedding" />;
}
