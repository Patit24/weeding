import { siteConfig } from "@/data/site";
import { googleProfileStats, googleReviews } from "@/data/google-reviews";

export function StructuredData() {
  const sameAs = [
    siteConfig.instagram,
    siteConfig.facebook,
    siteConfig.youtube,
    siteConfig.googleMaps,
  ].filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService", "Photographer"],
        "@id": `${siteConfig.url}/#business`,
        name: siteConfig.name,
        alternateName: [siteConfig.englishName, siteConfig.bengaliName, "Sritikuthi Wedding Photography Kolkata"],
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.primaryPhone,
        email: siteConfig.email,
        priceRange: "₹₹ - ₹₹₹",
        image: `${siteConfig.url}/brand-logo-full.png`,
        logo: `${siteConfig.url}/brand-logo.png`,
        hasMap: siteConfig.googleMaps,
        founder: {
          "@type": "Person",
          name: siteConfig.owner,
          jobTitle: "Founder & Lead Creative Director",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address,
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          postalCode: "700040",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 22.4939223,
          longitude: 88.3444855,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "10:00",
            closes: "22:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: googleProfileStats.rating.toString(),
          reviewCount: googleProfileStats.totalReviews.toString(),
          bestRating: "5",
          worstRating: "1",
        },
        review: googleReviews.map((r) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: r.authorName,
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: r.rating.toString(),
            bestRating: "5",
          },
          reviewBody: r.text,
          publisher: {
            "@type": "Organization",
            name: "Google Maps Reviews",
          },
        })),
        areaServed: siteConfig.locations.map((loc) => ({
          "@type": "AdministrativeArea",
          name: loc,
        })),
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        alternateName: siteConfig.englishName,
        publisher: { "@id": `${siteConfig.url}/#business` },
        inLanguage: "en-IN",
      },
      {
        "@type": "Service",
        "@id": `${siteConfig.url}/#services`,
        name: "Bengali Wedding Photography & Cinematic Films",
        serviceType: "Wedding Photography, Cinematography, Pre-Wedding Shoots, Rice Ceremony, Event Management",
        provider: { "@id": `${siteConfig.url}/#business` },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Photography & Film Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Wedding Photography & Films",
                description: "Documentary-led wedding photography and 4K cinema for traditional Bengali and luxury destination weddings.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pre-Wedding Shoot",
                description: "Concept-driven outdoor couple photography and cinematic music video sessions.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Rice Ceremony (Annaprasan)",
                description: "Joyful milestone documentation of baby's first rice ceremony and family blessings.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Drone Cinematography",
                description: "Licensed 4K aerial photography and cinematic drone videography for weddings and events.",
              },
            },
          ],
        },
      },
      {
        "@type": "VideoObject",
        name: "Sacred Bengali Wedding & Sindoor Daan Film",
        description: "4K Master Cinema capturing traditional Bengali Shubho Drishti, Saat Paak, and Sindoor Daan.",
        thumbnailUrl: `${siteConfig.url}/thumbnails/wedding-reel.jpg`,
        contentUrl: `${siteConfig.url}/reels/wedding-reel.mp4`,
        uploadDate: "2026-01-15T10:00:00+05:30",
        duration: "PT3M45S",
        publisher: { "@id": `${siteConfig.url}/#business` },
      },
      {
        "@type": "VideoObject",
        name: "Heritage Rajbari & Riverbank Pre-Wedding Film",
        description: "Golden hour couple romance against the historic ghats of Kolkata and grand Rajbari courtyards.",
        thumbnailUrl: `${siteConfig.url}/thumbnails/pre-wedding-reel.jpg`,
        contentUrl: `${siteConfig.url}/reels/pre-wedding-reel.mp4`,
        uploadDate: "2026-01-20T10:00:00+05:30",
        duration: "PT2M50S",
        publisher: { "@id": `${siteConfig.url}/#business` },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
