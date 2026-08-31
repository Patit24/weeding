import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { navLinks, serviceLinks, siteConfig } from "@/data/site";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-royal-espresso py-20 text-[var(--warm-ivory)] border-t border-[var(--gold-border)]">
      <div className="container-editorial grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1.2fr]">
        <div>
          <Link href="/" className="group inline-flex flex-col items-start" aria-label="Sritikuthi The Wedding Tales">
            <div className="relative h-16 sm:h-20 w-48 sm:w-56 rounded-2xl bg-[rgba(255,255,255,0.92)] p-2 shadow-gold-glow backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
              <Image src="/brand-logo.png" alt="স্মৃতিকুঠি The Wedding Tales official logo" fill className="object-contain p-1" />
            </div>
            <span className="serif mt-4 text-3xl font-bold tracking-wide text-[var(--gold)]">স্মৃতিকুঠি</span>
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-[rgba(247,243,236,0.85)]">The Wedding Tales</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[rgba(247,243,236,0.78)]">
            {siteConfig.tagline}. Authentic Bengali wedding storytelling, cinematic couple films, traditional rituals, drone cinematography, and heirloom albums crafted with artistic devotion.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold-border)] bg-[rgba(237,182,0,0.12)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">
            ✨ Handcrafted Moments • Kolkata
          </p>
        </div>
        <div>
          <h2 className="eyebrow text-[var(--gold)]">Navigate</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="text-[rgba(247,243,236,0.82)] transition-colors duration-200 hover:text-[var(--gold-light)] hover:translate-x-0.5 inline-block" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow text-[var(--gold)]">Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link className="text-[rgba(247,243,236,0.82)] transition-colors duration-200 hover:text-[var(--gold-light)] hover:translate-x-0.5 inline-block" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow text-[var(--gold)]">Stay Close</h2>
          <div className="mt-5 space-y-3 text-sm text-[rgba(247,243,236,0.82)]">
            <p className="flex items-center gap-3"><Mail size={16} className="text-[var(--gold)]" aria-hidden="true" /> {siteConfig.email}</p>
            <p className="flex items-center gap-3"><Phone size={16} className="text-[var(--gold)]" aria-hidden="true" /> {siteConfig.phone}</p>
            <a href={siteConfig.googleMaps} target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--gold)] transition-colors">
              📍 {siteConfig.address}
            </a>
            <p className="text-xs text-[rgba(247,243,236,0.65)]">{siteConfig.hours}</p>
          </div>
          <div className="mt-6 flex gap-3">
            {[
              { href: siteConfig.instagram, label: "Instagram", icon: "IG" },
              { href: siteConfig.facebook, label: "Facebook", icon: "FB" },
              { href: siteConfig.youtube, label: "YouTube", icon: "YT" },
              { href: siteConfig.googleMaps, label: "Google Maps", icon: "GM" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--gold-border)] bg-[rgba(255,255,255,0.06)] text-xs font-bold text-[var(--gold-light)] hover:bg-crimson-gradient hover:text-white hover:border-transparent transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <NewsletterForm />
        </div>
      </div>
      <div className="container-editorial mt-14 flex flex-col gap-3 border-t border-[rgba(247,243,236,0.18)] pt-6 text-xs text-[rgba(247,243,236,0.6)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <Link className="transition-colors hover:text-white" href="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
}

