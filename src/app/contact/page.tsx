import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/sections/PageHero";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Enquire with Sritikuthi The Wedding Tales for wedding photography, films, planning, and event management.",
};

export default function ContactPage() {
  const whatsappMessage = encodeURIComponent("Hello Sritikuthi The Wedding Tales, I would like to enquire about a celebration.");
  return (
    <>
      <PageHero eyebrow="Contact" title="Begin with a quiet conversation." intro="Share where you are in the planning process. We will respond with next steps, availability, and a thoughtful way forward." image={images.contact} />
      <section className="py-24">
        <div className="container-editorial grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <aside>
            <div className="relative aspect-[4/5] overflow-hidden"><Image src={images.featuredPortrait.src} alt={images.featuredPortrait.alt} fill sizes="420px" className="object-cover" /></div>
            <div className="mt-8 space-y-4 text-sm leading-7 text-[var(--muted)]">
              <p><strong className="text-[var(--charcoal)]">Email:</strong> {siteConfig.email}</p>
              <p><strong className="text-[var(--charcoal)]">Phone:</strong> {siteConfig.phone}</p>
              <p><strong className="text-[var(--charcoal)]">Office hours:</strong> Monday to Saturday, 10:00 AM to 6:00 PM IST</p>
              <p><strong className="text-[var(--charcoal)]">Service locations:</strong> Kolkata, India, and destination celebrations by request.</p>
            </div>
            <a href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`} className="mt-7 inline-flex min-h-12 items-center gap-2 border border-[var(--espresso)] px-5 text-xs font-semibold uppercase tracking-[0.18em]">
              <MessageCircle size={17} /> WhatsApp
            </a>
          </aside>
          <div>
            <h2 className="serif text-[clamp(3rem,6vw,6rem)] leading-none text-[var(--espresso)]">Tell us what you are planning.</h2>
            <p className="mb-8 mt-5 max-w-2xl leading-8 text-[var(--muted)]">The more context you share, the more useful our first response can be.</p>
            <ConsultationForm />
          </div>
        </div>
      </section>
      <section className="bg-[var(--sand)] py-20">
        <div className="container-editorial grid gap-8 md:grid-cols-3">
          {["Can we book only photography?", "Do you travel?", "How soon should we enquire?"].map((question) => (
            <div key={question} className="border-t border-[var(--fine-border)] pt-5">
              <h2 className="text-sm uppercase tracking-[0.16em]">{question}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">Yes. Share your date, location, and scope, and we will suggest the most suitable next step.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
