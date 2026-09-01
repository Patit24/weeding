import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Navigation, MapPin, Phone } from "lucide-react";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/sections/PageHero";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { GoogleMapSection } from "@/components/sections/GoogleMapSection";
import { FadeIn, ImageReveal, MotionSection, StaggerGroup, StaggerItem } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "Book Wedding Photographer in Kolkata | Contact & Date Availability",
  description:
    "Check wedding dates availability with স্মৃতিকুঠি The Wedding Tales. Studio located near Malancha Cinema, Tollygunge, Kolkata 700040. Fast WhatsApp booking and custom quote.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book Wedding Photographer in Kolkata | Contact & Date Availability",
    description:
      "Check wedding dates availability with স্মৃতিকুঠি The Wedding Tales. Studio located near Malancha Cinema, Tollygunge, Kolkata 700040. Fast WhatsApp booking and custom quote.",
    url: `${siteConfig.url}/contact`,
    images: [{ url: images.contact.src, width: 1200, height: 800, alt: "Book Wedding Photographer in Kolkata" }],
  },
};

export default function ContactPage() {
  const whatsappMessage = encodeURIComponent("Hello স্মৃতিকুঠি_The Wedding Tales, I would like to enquire about a celebration.");
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${siteConfig.name}, ${siteConfig.address}`
  )}`;

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
            <ImageReveal className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-md"><Image src={images.featuredPortrait.src} alt={images.featuredPortrait.alt} fill sizes="420px" className="object-cover" /></ImageReveal>
            <FadeIn delay={0.12} className="mt-8 space-y-4 text-sm leading-7 text-[var(--muted)]">
              <p><strong className="text-[var(--charcoal)]">Email:</strong> {siteConfig.email}</p>
              <p><strong className="text-[var(--charcoal)]">Phone:</strong> {siteConfig.phone}</p>
              <p><strong className="text-[var(--charcoal)]">Office hours:</strong> {siteConfig.hours}</p>
              <p><strong className="text-[var(--charcoal)]">Studio:</strong> {siteConfig.address}</p>
              <p><strong className="text-[var(--charcoal)]">Service locations:</strong> {siteConfig.locations.join(", ")}.</p>
            </FadeIn>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#1F0E0B] px-5 text-xs font-bold uppercase tracking-[0.18em] !text-white shadow-md transition-all hover:bg-[#381B15] hover:scale-105 active:scale-95"
              >
                <MessageCircle size={17} className="text-[#25D366]" />
                <span className="!text-white">WhatsApp</span>
              </a>
              <a
                href={`tel:${siteConfig.primaryPhone}`}
                className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[var(--espresso)] bg-white px-5 text-xs font-bold uppercase tracking-[0.18em] !text-[var(--espresso)] shadow-xs transition-all hover:bg-[var(--warm-ivory)] hover:scale-105 active:scale-95"
              >
                <Phone size={15} className="text-[var(--crimson)]" />
                <span className="!text-[var(--espresso)]">Call Now</span>
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-crimson-gradient px-5 text-xs font-bold uppercase tracking-[0.18em] !text-white shadow-crimson-glow transition-all hover:scale-105 active:scale-95"
              >
                <Navigation size={15} className="!text-white" />
                <span className="!text-white">Get Directions</span>
              </a>
              <a
                href={siteConfig.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[var(--gold-border)] bg-white px-5 text-xs font-bold uppercase tracking-[0.18em] !text-[var(--espresso)] shadow-xs transition-all hover:bg-[var(--warm-ivory)] hover:border-[var(--espresso)] hover:scale-105 active:scale-95"
              >
                <MapPin size={15} className="text-[#EA4335]" />
                <span className="!text-[var(--espresso)]">Google Maps</span>
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
      <GoogleMapSection variant="contact" />
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
