import type { Metadata } from "next";
import Image from "next/image";
import { overviewServices } from "@/data/services";
import { images } from "@/data/images";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Services",
  description: "Wedding photography, films, planning, decor, coordination, corporate events, and private celebration management.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Planning, photographs, films, and events held with care." intro="Choose one focused service or bring us in as a creative and logistical partner across the full celebration." image={images.planning} />
      <section className="py-24">
        <div className="container-editorial space-y-16">
          {overviewServices.map((service, index) => (
            <article key={service.slug} className={`grid items-center gap-10 border-t border-[var(--fine-border)] pt-12 lg:grid-cols-[0.8fr_1.2fr] ${index % 2 ? "lg:grid-cols-[1.2fr_0.8fr]" : ""}`}>
              <div className={`relative aspect-[4/5] overflow-hidden ${index % 2 ? "lg:order-2" : ""}`}>
                <Image src={service.image.src} alt={service.image.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </div>
              <div>
                <p className="eyebrow">{service.eyebrow}</p>
                <h2 className="serif mt-4 text-[clamp(3rem,6vw,6rem)] leading-[0.9] text-[var(--espresso)]">{service.title}</h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">{service.description}</p>
                <p className="mt-5 text-sm italic text-[var(--muted)]">Custom proposals are created after understanding your celebration.</p>
                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <div><h3 className="text-xs uppercase tracking-[0.18em]">Deliverables</h3><ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <div><h3 className="text-xs uppercase tracking-[0.18em]">Starting workflow</h3><ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">{service.process.map((item) => <li key={item}>{item}</li>)}</ul></div>
                </div>
                <div className="mt-8 flex flex-wrap gap-5">
                  <ButtonLink href="/contact" variant="text">Enquire</ButtonLink>
                  {service.href !== "/contact" ? <ButtonLink href={service.href} variant="text">Details</ButtonLink> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
