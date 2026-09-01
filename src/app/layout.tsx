import type { Metadata } from "next";
import { Allura, Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/sections/StructuredData";
import { ScrollReset } from "@/components/ui/ScrollReset";
import { AvailabilityProvider } from "@/components/ui/AvailabilityModal";
import { Preloader } from "@/components/ui/Preloader";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const allura = Allura({
  subsets: ["latin"],
  variable: "--font-allura",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Best Bengali Wedding Photographer in Kolkata`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Top-rated Bengali wedding photographer & 4K cinematographer in Kolkata. Luxury candid wedding photography, authentic pre-wedding shoots, Rice Ceremony (Annaprasan), and destination wedding coverage across West Bengal, Bihar, and Jharkhand. 4.9★ Google rated (128+ reviews).",
  keywords: [
    "wedding photographer in kolkata",
    "best wedding photographer in kolkata",
    "bengali wedding photography kolkata",
    "wedding photography kolkata",
    "pre wedding shoot in kolkata",
    "wedding cinematography kolkata",
    "annaprashan photoshoot kolkata",
    "rice ceremony photography kolkata",
    "aiburobhat photoshoot",
    "best bengali wedding photographer in kolkata",
    "destination wedding photographer india",
    "wedding photographer near me",
    "candid wedding photographer kolkata",
    "traditional bengali wedding photoshoot",
    "wedding videographer kolkata",
    "luxury wedding photography kolkata",
    "sritikuthi wedding photography",
    "স্মৃতিকুঠি wedding photography",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: images.hero.src, width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  verification: {
    google: "HBKhebEKSy4yNlYwOOejItjKzYo5wggj3Up8W9CCb9U",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${cormorant.variable} ${manrope.variable} ${allura.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body>
        <AvailabilityProvider>
          <Preloader />
          <StructuredData />
          <ScrollReset />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </AvailabilityProvider>
      </body>
    </html>
  );
}
