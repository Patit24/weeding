import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ChevronDown, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn, MotionSection, StaggerGroup, StaggerItem } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Kolkata Wedding Photography",
  description:
    "Get clear answers to common questions about Bengali wedding photography packages, booking timelines, destination shoots, gear, drone regulations, and delivery timelines.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Wedding Photography FAQs | স্মৃতিকুঠি The Wedding Tales",
    description:
      "Get clear answers to common questions about Bengali wedding photography packages, booking timelines, destination shoots, gear, drone regulations, and delivery timelines.",
    url: `${siteConfig.url}/faq`,
    images: [{ url: images.contact.src, width: 1200, height: 800, alt: "Sritikuthi Wedding Photography FAQs" }],
  },
};

const faqItems = [
  {
    category: "Booking & Pricing",
    questions: [
      {
        q: "How much does a wedding photographer cost in Kolkata?",
        a: "Our shift pricing starts at ₹6,000 for full-day candid photography or cinematography, and ₹3,000 for half-day morning rituals (like Dodhi Mangal or Gaye Holud). You can use our interactive live Rate Calculator on the website to build a customized estimate based on your specific functions, crew count, and photo albums.",
      },
      {
        q: "How far in advance should we reserve our wedding dates?",
        a: "We recommend reserving your dates as soon as your Shubho Vivah Lagno (auspicious dates) and venue are finalized. Peak winter dates (November to February) and auspicious Bengali marriage dates often book out 6 to 9 months in advance.",
      },
      {
        q: "What is your booking advance and payment schedule?",
        a: "We confirm dates with a standard 30% advance upon contract signing. 50% is due during the event week, and the remaining 20% balance is payable upon delivery of your raw photo previews and initial cinematic teasers.",
      },
    ],
  },
  {
    category: "Rituals & Coverage",
    questions: [
      {
        q: "What sacred Bengali wedding rituals do you cover?",
        a: "We provide end-to-end documentary coverage for every cultural ritual: Aiburobhat, Dodhi Mangal, Ganga Nimantran, Gaye Holud, Tatta presentation, Shubho Drishti, Saat Paak, Mala Badal, Kanya Sampradan, Yajna, Sindoor Daan, Bou Bhat, and Phool Shojja.",
      },
      {
        q: "What is Shubho Drishti and how do you photograph it?",
        a: "Shubho Drishti is the sacred first mutual glance where the bride removes auspicious Paan (betel leaves) to look at the groom while seated on a wooden Piri. We position two synchronized senior camera operators with prime lenses to capture the bride's and groom's genuine emotional expressions simultaneously.",
      },
      {
        q: "Do you offer Pre-Wedding photo and video shoots?",
        a: "Yes! We specialize in concept-driven pre-wedding sessions across Kolkata's iconic heritage ghats (Princep Ghat, Bagbazar), vintage Rajbaris (Bawali Rajbari, Rajkutir), Sonajhuri forest in Shantiniketan, and coastal beach destinations like Mandarmani and Puri.",
      },
    ],
  },
  {
    category: "Travel, Gear & Delivery",
    questions: [
      {
        q: "Do you travel for destination weddings outside Kolkata?",
        a: "Absolutely! We frequently travel across West Bengal (Durgapur, Siliguri, Howrah, Shantiniketan), Bihar (Patna, Gaya), Jharkhand (Ranchi, Jamshedpur), and all-India destination wedding spots (Udaipur, Goa, Darjeeling). Travel logistics are managed with transparent fixed-tier estimates.",
      },
      {
        q: "What camera equipment and backup gear do you bring?",
        a: "Our crew shoots with flagship full-frame Sony Alpha & FX cinema cameras (4K 10-bit color), ultra-fast G-Master prime lenses, wireless DJI microphones, Ronin gimbal stabilizers, and licensed 4K drones. Every operator carries dual-slot memory cards with instantaneous same-night SSD backups.",
      },
      {
        q: "What is your delivery timeline for edited photos, films, and albums?",
        a: "You receive a curated 30–50 photo sneak-peek highlight within 72 hours. Complete color-graded high-resolution digital galleries and 4K cinematic teaser reels are delivered within 3 to 4 weeks. Handcrafted Italian flush-mount heirloom albums are dispatched within 6 weeks of your final photo selection.",
      },
    ],
  },
];

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.flatMap((section) =>
      section.questions.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        eyebrow="Help & Knowledge Base"
        title="Everything you need to know about celebrating with us."
        intro="Clear, upfront answers on pricing, Bengali rituals, destination travel, gear, and album delivery timelines."
        image={images.contact}
        ctaText="Calculate Custom Package"
        ctaHref="/#rate-calculator"
      />

      <MotionSection className="py-20 lg:py-28 bg-[var(--soft-white)]">
        <div className="container-editorial max-w-4xl">
          <div className="space-y-16">
            {faqItems.map((sec, secIdx) => (
              <div key={secIdx} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-[var(--fine-border)] pb-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--crimson)]" />
                  <h2 className="serif text-2xl sm:text-3xl text-[var(--espresso)]">{sec.category}</h2>
                </div>

                <div className="space-y-4">
                  {sec.questions.map((item, qIdx) => (
                    <details
                      key={qIdx}
                      className="group rounded-2xl border border-[var(--fine-border)] bg-[var(--warm-ivory)] p-6 shadow-sm transition-all duration-300 open:border-[var(--gold-border)] open:shadow-md"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-4 text-base sm:text-lg font-semibold text-[var(--espresso)] list-none select-none">
                        <span>{item.q}</span>
                        <ChevronDown
                          size={18}
                          className="shrink-0 text-[var(--muted)] transition-transform duration-300 group-open:rotate-180 group-open:text-[var(--crimson)]"
                        />
                      </summary>
                      <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--charcoal)] border-t border-[var(--fine-border)] pt-4">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-[var(--gold-border)] bg-[var(--espresso)] p-8 text-[var(--warm-ivory)] text-center sm:text-left sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="serif text-2xl text-[var(--gold-light)]">Still have questions?</h3>
              <p className="mt-2 text-sm text-[rgba(247,243,236,0.8)]">
                Chat directly with founder Shiladitya Das for date availability and personalized advice.
              </p>
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                "Hello Shiladitya, I have a specific question about wedding photography."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 sm:mt-0 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-crimson-gradient px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-crimson-glow transition-all hover:brightness-110 shrink-0"
            >
              <MessageCircle size={15} />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </MotionSection>

      <CTASection />
    </>
  );
}
