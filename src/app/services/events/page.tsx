import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Events & Private Celebrations",
  description: "Comprehensive photography and film coverage for birthdays, anniversaries, family milestones, and private galas.",
};

export default function Page() {
  return <ServiceDetailPage slug="events" />;
}
