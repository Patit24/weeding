import type { Metadata } from "next";
import { images } from "@/data/images";
import { allServiceNames } from "@/data/site";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn, MotionSection, StaggerGroup, StaggerItem } from "@/components/ui/Motion";
import { RateCalculator } from "@/components/sections/RateCalculator";
import { ServicesList } from "@/components/sections/ServicesList";
import { GoogleReviews } from "@/components/sections/GoogleReviews";

export const metadata: Metadata = {
  title: "Services & Rate Calculator",
  description: "Wedding photography, wedding cinematography, pre-wedding shoots, engagement, Haldi, Mehendi, Sangeet, Reception, drone, live streaming, albums, and interactive rate calculator.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & Pricing"
        title="Planning, photographs, films, and events held with care."
        intro="Choose one focused service or calculate your customized wedding photography and film package with our live rate estimator."
        image={images.photography}
        ctaText="Calculate My Package"
        ctaHref="#rate-calculator"
      />
      
      {/* Interactive Rate Calculator */}
      <RateCalculator />

      <MotionSection className="bg-[var(--soft-white)] py-20">
        <div className="container-editorial grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn>
            <p className="eyebrow">Complete Coverage</p>
            <h2 className="serif mt-4 text-[clamp(3rem,6vw,6rem)] leading-[0.9] text-[var(--espresso)]">From rituals to reception, built as one story.</h2>
          </FadeIn>
          <StaggerGroup className="grid gap-3 text-sm uppercase tracking-[0.14em] text-[var(--muted)] sm:grid-cols-2">
            {allServiceNames.map((service) => (
              <StaggerItem key={service} className="border-t border-[var(--fine-border)] pt-3">{service}</StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>
      
      {/* Services List with Date Picker Availability Modals */}
      <ServicesList />

      {/* Google Business Profile Reviews on Services Page */}
      <GoogleReviews />
    </>
  );
}
