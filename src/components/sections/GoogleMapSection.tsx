"use client";

import { MapPin, Navigation, Clock, Phone, MessageCircle, ExternalLink, Compass, Car, Train } from "lucide-react";
import { siteConfig } from "@/data/site";
import { FadeIn, MotionSection } from "@/components/ui/Motion";

interface GoogleMapSectionProps {
  variant?: "home" | "contact";
  className?: string;
}

export function GoogleMapSection({ variant = "home", className = "" }: GoogleMapSectionProps) {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${siteConfig.name}, ${siteConfig.address}`
  )}`;

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    "Tollygunge Malancha Cinema, Neheru Colony, Kolkata 700040"
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <MotionSection
      id="studio-location"
      className={`relative overflow-hidden border-t border-[var(--fine-border)] bg-[var(--soft-white)] py-20 lg:py-28 text-[var(--espresso)] ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[rgba(212,175,55,0.12)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-[rgba(139,30,30,0.08)] blur-3xl" />

      <div className="container-editorial relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[var(--fine-border)]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold-border)] bg-[var(--warm-ivory)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[var(--crimson)] shadow-xs">
              <Compass size={14} className="text-[#D4AF37]" />
              <span>Studio &amp; Consultation Lounge</span>
            </div>
            <h2 className="serif mt-4 text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.96] text-[var(--espresso)]">
              {variant === "contact" ? "Visit Our Kolkata Studio" : "Find Our Studio & Get Directions"}
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[var(--muted)] leading-relaxed">
              We welcome couples and families for coffee, heirloom album previews, and relaxed wedding consultations at our Tollygunge studio.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-crimson-gradient px-6 text-xs font-bold uppercase tracking-[0.18em] !text-white shadow-crimson-glow transition-all hover:scale-105 active:scale-95"
            >
              <Navigation size={14} />
              <span>Get Directions</span>
            </a>
            <a
              href={siteConfig.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--espresso)] bg-[var(--warm-ivory)] px-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--espresso)] hover:bg-[var(--espresso)] hover:text-white transition-colors"
            >
              <ExternalLink size={13} />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>

        {/* Main Grid: Interactive Map + Info Cards */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Interactive Google Map Frame */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            <div className="relative h-full min-h-[380px] sm:min-h-[460px] w-full overflow-hidden rounded-3xl border border-[var(--gold-border)] bg-[var(--sand)] shadow-xl">
              <iframe
                title="Sritikuthi The Wedding Tales Studio Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full object-cover"
              />

              {/* Floating Top-Left Verified Studio Pin Card */}
              <div className="absolute top-4 left-4 z-10 max-w-[260px] sm:max-w-xs rounded-2xl border border-white/60 bg-white/90 p-3.5 shadow-lg backdrop-blur-md">
                <div className="flex items-start gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-crimson-gradient text-white shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[var(--espresso)] leading-tight">
                      স্মৃতিকুঠি The Wedding Tales
                    </h4>
                    <p className="text-[0.68rem] text-[var(--muted)] mt-0.5 leading-snug">
                      Tollygunge Malancha Cinema, Kolkata 700040
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Navigation Shortcut Button */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--espresso)]/90 hover:bg-[var(--espresso)] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-md transition-transform hover:scale-105"
                >
                  <Navigation size={13} className="text-[#D4AF37]" />
                  <span>Start GPS Route</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Guide & Contact Details */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between space-y-6">
            {/* Studio Address Card */}
            <div className="rounded-3xl border border-[var(--gold-border)] bg-[var(--warm-ivory)] p-6 sm:p-7 shadow-md">
              <h3 className="serif text-2xl font-bold text-[var(--espresso)] flex items-center gap-2">
                <MapPin size={20} className="text-[var(--crimson)]" />
                <span>Studio Address</span>
              </h3>

              <p className="mt-3 text-sm font-semibold text-[var(--charcoal)] leading-relaxed">
                {siteConfig.address}
              </p>

              <div className="mt-4 pt-4 border-t border-[var(--fine-border)] space-y-3 text-xs text-[var(--muted)]">
                <div className="flex items-start gap-2.5">
                  <Train size={15} className="text-[var(--espresso)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--charcoal)]">Nearest Metro:</strong> Mahanayak Uttam Kumar (Tollygunge Metro) · 5-7 mins away
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Car size={15} className="text-[var(--espresso)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--charcoal)]">Landmark:</strong> Near Malancha Cinema Hall, Tollygunge Neheru Colony
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock size={15} className="text-[var(--espresso)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--charcoal)]">Visiting Hours:</strong> {siteConfig.hours}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Connect & Consultation Card */}
            <div className="rounded-3xl border border-[var(--gold-border)] bg-[var(--warm-ivory)] p-6 sm:p-7 shadow-md flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[var(--crimson)] block">
                  Connect With Shiladitya
                </span>
                <h4 className="serif text-xl font-bold text-[var(--espresso)] mt-1">
                  Schedule an In-Studio Visit
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                  Prefer to meet in person to review physical fine-art albums and discuss photography timelines? Call or message us before visiting.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--fine-border)] grid grid-cols-2 gap-3">
                <a
                  href={`tel:${siteConfig.primaryPhone}`}
                  className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-[var(--fine-border)] bg-white px-3 text-xs font-bold uppercase tracking-wider text-[var(--espresso)] hover:border-[var(--crimson)] hover:text-[var(--crimson)] transition-colors shadow-xs"
                >
                  <Phone size={13} />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                    "Hello Shiladitya, I would like to visit the Sritikuthi Studio for a wedding consultation. Please share the convenient time."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] px-3 text-xs font-bold uppercase tracking-wider text-white transition-colors shadow-sm"
                >
                  <MessageCircle size={13} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
