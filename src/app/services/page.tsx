import type { Metadata } from "next";
import Image from "next/image";
import { overviewServices } from "@/data/services";
import { images } from "@/data/images";
import { allServiceNames } from "@/data/site";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FadeIn, ImageReveal, MotionSection, StaggerGroup, StaggerItem } from "@/components/ui/Motion";
import { RateCalculator } from "@/components/sections/RateCalculator";
import { GoogleReviews } from "@/components/sections/GoogleReviews";

export const metadata: Metadata = {
  title: "Services & Rate Calculator",
  description: "Wedding photography, wedding cinematography, pre-wedding shoots, engagement, Haldi, Mehendi, Sangeet, Reception, drone, live streaming, albums, and interactive rate calculator.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Planning, photographs, films, and events held with care." intro="Choose one focused service or calculate your customized wedding photography and film package with our live rate estimator." image={images.planning} />
      
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
      
      <MotionSection className="py-24">
        <div className="container-editorial space-y-16">
          {overviewServices.map((service, index) => (
            <article key={service.slug} className={`grid items-center gap-10 border-t border-[var(--fine-border)] pt-12 lg:grid-cols-[0.8fr_1.2fr] ${index % 2 ? "lg:grid-cols-[1.2fr_0.8fr]" : ""}`}>
              <ImageReveal className={`relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md ${index % 2 ? "lg:order-2" : ""}`}>
                <Image src={service.image.src} alt={service.image.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </ImageReveal>
              <FadeIn delay={0.12}>
                <p className="eyebrow">{service.eyebrow}</p>
                <h2 className="serif mt-4 text-[clamp(3rem,6vw,6rem)] leading-[0.9] text-[var(--espresso)]">{service.title}</h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">{service.description}</p>
                <p className="mt-5 text-sm italic text-[var(--muted)]">Custom proposals are created after understanding your celebration.</p>
                <StaggerGroup className="mt-7 grid gap-5 md:grid-cols-2" delay={0.08}>
                  <StaggerItem><h3 className="text-xs uppercase tracking-[0.18em]">Deliverables</h3><ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></StaggerItem>
                  <StaggerItem><h3 className="text-xs uppercase tracking-[0.18em]">Starting workflow</h3><ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">{service.process.map((item) => <li key={item}>{item}</li>)}</ul></StaggerItem>
                </StaggerGroup>
                <div className="mt-8 flex flex-wrap gap-5">
                  <ButtonLink href="/contact" variant="text">Enquire</ButtonLink>
                  {service.href !== "/contact" ? <ButtonLink href={service.href} variant="text">Details</ButtonLink> : null}
                </div>
              </FadeIn>
            </article>
          ))}
        </div>
      </MotionSection>

      {/* Google Business Profile Reviews on Services Page */}
      <GoogleReviews />
    </>
  );
}
