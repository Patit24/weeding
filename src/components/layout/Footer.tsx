import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { navLinks, serviceLinks, siteConfig } from "@/data/site";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-[var(--espresso)] py-16 text-[var(--warm-ivory)]">
      <div className="container-editorial grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Link href="/" className="serif text-5xl leading-none">স্মৃতিকুঠি<br />The Wedding Tales</Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[rgba(247,243,236,0.72)]">
            {siteConfig.tagline}. Wedding photography, cinematography, planning, drone coverage, live streaming, albums, and family celebrations photographed with warmth and quiet precision.
          </p>
          <p className="mt-8 text-xs uppercase tracking-[0.22em] text-[rgba(247,243,236,0.58)]">Designed for meaningful celebrations</p>
        </div>
        <div>
          <h2 className="eyebrow text-[rgba(247,243,236,0.58)]">Navigate</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}><Link className="link-underline" href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow text-[rgba(247,243,236,0.58)]">Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.href}><Link className="link-underline" href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow text-[rgba(247,243,236,0.58)]">Stay Close</h2>
          <div className="mt-5 space-y-3 text-sm text-[rgba(247,243,236,0.72)]">
            <p className="flex gap-3"><Mail size={16} aria-hidden="true" /> {siteConfig.email}</p>
            <p className="flex gap-3"><Phone size={16} aria-hidden="true" /> {siteConfig.phone}</p>
            <a href={siteConfig.googleMaps} target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
              📍 {siteConfig.address}
            </a>
            <p>{siteConfig.hours}</p>
          </div>
          <div className="mt-6 flex gap-4">
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
            <a href={siteConfig.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">YT</a>
            <a href={siteConfig.googleMaps} target="_blank" rel="noopener noreferrer" aria-label="Google Maps">GM</a>
          </div>
          <NewsletterForm />
        </div>
      </div>
      <div className="container-editorial mt-12 flex flex-col gap-3 border-t border-[rgba(247,243,236,0.18)] pt-6 text-xs text-[rgba(247,243,236,0.58)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <Link className="link-underline" href="/privacy">Privacy</Link>
      </div>
    </footer>
  );
}
