import Image from "next/image";
import { notFound } from "next/navigation";
import { portfolioItems } from "@/data/portfolio";
import { services } from "@/data/services";
import { getWhatsAppUrl } from "@/data/site";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FadeIn, ImageReveal, MotionSection, StaggerGroup, StaggerItem } from "@/components/ui/Motion";

import { RateCalculator } from "@/components/sections/RateCalculator";
import { siteConfig } from "@/data/site";

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const related = portfolioItems.filter((item) => {
    if (slug === "pre-wedding") return item.category === "Pre-Weddings";
    if (slug === "wedding" || slug === "wedding-photography" || slug === "wedding-planning") return item.category === "Weddings";
    if (slug === "wedding-films") return item.category === "Films" || item.category === "Weddings";
    if (slug === "rice-ceremony") return item.category === "Rice Ceremonies" || item.category === "Event Design";
    if (slug === "events" || slug === "event-management") return item.category === "Event Design" || item.category === "Corporate Events";
    return true;
  }).slice(0, 6);

  const samplePhotos = [
    service.image,
    ...related.flatMap((item) => item.gallery),
  ].filter((img, idx, arr) => arr.findIndex((x) => x.src === img.src) === idx).slice(0, 6);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": ["LocalBusiness", "Photographer"],
          name: siteConfig.name,
          url: siteConfig.url,
          telephone: siteConfig.primaryPhone,
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.address,
            addressLocality: "Kolkata",
            addressRegion: "West Bengal",
            postalCode: "700040",
            addressCountry: "IN",
          },
        },
        areaServed: siteConfig.locations.map((l) => ({ "@type": "AdministrativeArea", name: l })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.title} Inclusions`,
          itemListElement: service.deliverables.map((d) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: d,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHero eyebrow={service.eyebrow} title={service.title} intro={service.description} image={service.image} />
      <Breadcrumbs items={[{ href: "/services", label: "Services" }, { href: service.href, label: service.title }]} />
      <MotionSection className="py-20">
        <div className="container-editorial grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <FadeIn className="text-sm leading-8 text-[var(--muted)]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--crimson)]">Who it is for</p>
            <p className="mt-4">Couples, families, and hosts looking for authentic Bengali storytelling, natural candid emotions, and heirloom visual artistry.</p>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[var(--crimson)]">Service Locations</p>
            <p className="mt-4">Kolkata, Durgapur, Siliguri, Howrah, Shantiniketan, Patna, Ranchi, and destination wedding venues pan-India.</p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h2 className="serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-[var(--espresso)]">What is included</h2>
            <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-2" delay={0.08}>
              {service.inclusions.map((item) => (
                <StaggerItem key={item} className="border-t border-[var(--fine-border)] pt-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[var(--espresso)]">
                  ✓ {item}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </FadeIn>
        </div>
      </MotionSection>
      <MotionSection className="bg-[var(--soft-white)] py-20">
        <div className="container-editorial">
          <FadeIn><h2 className="serif text-4xl sm:text-5xl lg:text-6xl text-[var(--espresso)]">Our Approach &amp; Process</h2></FadeIn>
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-4">
            {service.process.map((step, index) => (
              <StaggerItem key={step} className="border-t border-[var(--fine-border)] pt-5">
                <p className="serif text-5xl text-[var(--taupe)]">0{index + 1}</p>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-[var(--espresso)]">{step}</h3>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>
      <MotionSection className="py-20">
        <div className="container-editorial">
          <FadeIn><h2 className="serif text-4xl sm:text-5xl lg:text-6xl text-[var(--espresso)]">Sample gallery</h2></FadeIn>
          <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-3">
            {samplePhotos.map((image, index) => (
              <ImageReveal delay={index * 0.08} className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-sm" key={`${image.src}-${index}`}>
                <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </ImageReveal>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>
      <MotionSection className="bg-[var(--sand)] py-20">
        <div className="container-editorial grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="serif text-4xl sm:text-5xl text-[var(--espresso)]">Optional add-ons</h2>
            <ul className="mt-7 space-y-3 text-sm sm:text-base text-[var(--muted)]">
              {service.addOns.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--crimson)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h2 className="serif text-4xl sm:text-5xl text-[var(--espresso)]">Frequently Asked Questions</h2>
            <div className="mt-7 space-y-4">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-[var(--fine-border)] bg-[var(--warm-ivory)] p-5 shadow-xs">
                  <summary className="cursor-pointer text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[var(--espresso)]">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] border-t border-[var(--fine-border)] pt-3">{faq.answer}</p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </MotionSection>

      {/* Live Rate Calculator Integration */}
      <RateCalculator />

      <MotionSection className="py-20">
        <div className="container-editorial">
          <FadeIn><h2 className="serif text-4xl sm:text-5xl lg:text-6xl text-[var(--espresso)]">Featured client stories</h2></FadeIn>
          <StaggerGroup className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <StaggerItem key={item.slug}>
              <a href={`/portfolio/${item.slug}`} className="group block">
                <span className="relative block aspect-[16/10] overflow-hidden rounded-2xl shadow-sm">
                  <Image src={item.cover.src} alt={item.cover.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </span>
                <span className="mt-4 block text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{item.location}</span>
                <span className="serif mt-1 block text-2xl sm:text-3xl text-[var(--espresso)] group-hover:text-[var(--crimson)] transition-colors">{item.title}</span>
              </a>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <FadeIn delay={0.16}>
            <ButtonLink href={getWhatsAppUrl(`Hello Shiladitya, I would like to enquire about ${service.title} with স্মৃতিকুঠি The Wedding Tales.`)} className="mt-10">
              Enquire About {service.title} on WhatsApp
            </ButtonLink>
          </FadeIn>
        </div>
      </MotionSection>
      <CTASection />
    </>
  );
}
