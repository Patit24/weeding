import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/sections/PageHero";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { FadeIn, ImageReveal, MotionSection, StaggerGroup, StaggerItem } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "Contact",
  description: "Enquire with স্মৃতিকুঠি_The Wedding Tales for wedding photography, cinematography, planning, drone coverage, live streaming, albums, and event management.",
};

export default function ContactPage() {
  const whatsappMessage = encodeURIComponent("Hello স্মৃতিকুঠি_The Wedding Tales, I would like to enquire about a celebration.");
  const faqs = [
    ["How far in advance should we book?", "For weddings, enquire as soon as your date is fixed. Popular winter and festive dates are best reserved early."],
    ["Do you travel?", `Yes. We serve ${siteConfig.locations.join(", ")}.`],
    ["How many photos do we receive?", "The final count depends on the package, number of events, and hours covered. Every delivered image is edited."],
    ["Can we customize packages?", "Yes. Packages are customized around hours, team size, drone, album, raw files, films, and delivery timeline."],
    ["What is the booking amount?", "Share your date and scope first. We will confirm availability, proposal, advance amount, and payment options."],
    ["Do you provide live streaming?", "Yes. Live streaming can be included for wedding rituals, reception, corporate events, and family celebrations."],
  ];
  return (
    <>
      <PageHero
        eyebrow="Direct Studio Booking"
        title="Begin with a thoughtful conversation."
        intro="Share your wedding date, venue, and vision. We will respond within 24 hours with custom packages, date availability, and tailored recommendations."
        image={images.contact}
        ctaText="Direct WhatsApp Chat"
        ctaHref={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`}
      />
      <MotionSection className="py-24">
        <div className="container-editorial grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <aside>
            <ImageReveal className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md"><Image src={images.featuredPortrait.src} alt={images.featuredPortrait.alt} fill sizes="420px" className="object-cover" /></ImageReveal>
            <FadeIn delay={0.12} className="mt-8 space-y-4 text-sm leading-7 text-[var(--muted)]">
              <p><strong className="text-[var(--charcoal)]">Email:</strong> {siteConfig.email}</p>
              <p><strong className="text-[var(--charcoal)]">Phone:</strong> {siteConfig.phone}</p>
              <p><strong className="text-[var(--charcoal)]">Office hours:</strong> {siteConfig.hours}</p>
              <p><strong className="text-[var(--charcoal)]">Studio:</strong> {siteConfig.address}</p>
              <p><strong className="text-[var(--charcoal)]">Service locations:</strong> {siteConfig.locations.join(", ")}.</p>
            </FadeIn>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`} className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[var(--espresso)] bg-[var(--espresso)] px-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--warm-ivory)] transition-colors hover:bg-[var(--charcoal)]">
                <MessageCircle size={17} /> WhatsApp
              </a>
              <a href={`tel:${siteConfig.primaryPhone}`} className="inline-flex min-h-12 items-center rounded-xl border border-[var(--fine-border)] px-5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:border-[var(--espresso)]">
                Call Now
              </a>
              <a href={siteConfig.googleMaps} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-xl border border-[var(--fine-border)] px-5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:border-[var(--espresso)]">
                Google Maps
              </a>
            </div>
          </aside>
          <FadeIn delay={0.16}>
            <h2 className="serif text-[clamp(3rem,6vw,6rem)] leading-none text-[var(--espresso)]">Tell us what you are planning.</h2>
            <p className="mb-8 mt-5 max-w-2xl leading-8 text-[var(--muted)]">The more context you share, the more useful our first response can be.</p>
            <ConsultationForm />
          </FadeIn>
        </div>
      </MotionSection>
      <MotionSection className="bg-[var(--sand)] py-20">
        <StaggerGroup className="container-editorial grid gap-8 md:grid-cols-3">
          {faqs.map(([question, answer]) => (
            <StaggerItem key={question} className="border-t border-[var(--fine-border)] pt-5">
              <h2 className="text-sm uppercase tracking-[0.16em]">{question}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{answer}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </MotionSection>
    </>
  );
}
