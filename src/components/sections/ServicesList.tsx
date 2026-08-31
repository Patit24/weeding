"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { overviewServices } from "@/data/services";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { useAvailabilityModal } from "@/components/ui/AvailabilityModal";
import { FadeIn, ImageReveal, MotionSection } from "@/components/ui/Motion";

export function ServicesList() {
  const { openModal } = useAvailabilityModal();

  return (
    <MotionSection className="py-16 lg:py-24">
      <div className="container-editorial space-y-20">
        {overviewServices.map((service, index) => (
          <article
            key={service.slug}
            className={`grid items-center gap-10 border-t border-[var(--fine-border)] pt-16 lg:grid-cols-[1.1fr_0.9fr] ${
              index % 2 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <ImageReveal className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-[var(--sand)] shadow-xl">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <span className="rounded-full bg-black/50 px-3.5 py-1 text-xs font-semibold backdrop-blur-md border border-white/20">
                  ✨ 0{index + 1} • {service.title.split("&")[0].trim()}
                </span>
                <span className="text-xs tracking-wider opacity-90 hidden sm:inline-block">Kolkata &amp; Destination</span>
              </div>
            </ImageReveal>

            <FadeIn delay={0.12} className="flex flex-col justify-center">
              <p className="eyebrow text-[var(--crimson)]">0{index + 1} • Bespoke Service</p>
              <h2 className="serif mt-2 text-3xl sm:text-4xl lg:text-5xl leading-[1.08] text-[var(--espresso)]">
                {service.title}
              </h2>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-dark)]">
                {service.eyebrow}
              </p>

              {/* Feature Tags / Deliverable Pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {service.deliverables.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--gold-border)] bg-[var(--soft-white)] px-3 py-1 text-[0.7rem] font-medium text-[var(--charcoal)] shadow-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm sm:text-base leading-7 text-[var(--muted)]">
                {service.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                {service.href !== "/contact" ? (
                  <ButtonLink href={service.href} variant="crimson">
                    Explore {service.title.split("&")[0].trim()}
                  </ButtonLink>
                ) : null}
                <button
                  type="button"
                  onClick={() => openModal(service.title)}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--fine-border)] bg-[var(--soft-white)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--espresso)] shadow-sm transition-all duration-300 hover:bg-[var(--crimson)] hover:text-white hover:border-[var(--crimson)] active:scale-95 cursor-pointer"
                >
                  <span>Check Availability</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </FadeIn>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}
