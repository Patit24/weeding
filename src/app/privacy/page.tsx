import type { Metadata } from "next";
import { FadeIn, MotionSection } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for Sritikuthi The Wedding Tales.",
};

export default function PrivacyPage() {
  return (
    <MotionSection className="container-editorial py-36">
      <FadeIn>
        <p className="eyebrow">Privacy</p>
        <h1 className="serif mt-5 text-[clamp(4rem,9vw,8rem)] leading-none text-[var(--espresso)]">Privacy Policy</h1>
      </FadeIn>
      <FadeIn delay={0.12} className="prose-luxury mt-10 max-w-3xl text-lg">
        <p>Sritikuthi The Wedding Tales uses enquiry details only to respond to prospective clients, prepare proposals, and coordinate requested services.</p>
        <p>We do not sell personal information. Form submissions are currently handled by a mock endpoint and can be connected to Resend or a CRM later.</p>
        <p>Client galleries, contracts, and event information should be managed through secure production tools before launch. Replace placeholder business details before publishing.</p>
      </FadeIn>
    </MotionSection>
  );
}
