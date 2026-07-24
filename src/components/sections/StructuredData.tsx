import { siteConfig } from "@/data/site";

export function StructuredData() {
  const sameAs = [siteConfig.instagram, siteConfig.facebook, siteConfig.youtube, siteConfig.pinterest].filter(Boolean);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${siteConfig.url}/#business`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        founder: siteConfig.owner,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address,
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          postalCode: "700040",
          addressCountry: "IN",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "10:00",
            closes: "22:00",
          },
        ],
        areaServed: siteConfig.locations,
        sameAs,
      },
      {
        "@type": "Service",
        serviceType: "Wedding photography, wedding cinematography, pre-wedding shoot, engagement shoot, event management, drone photography, live streaming, albums, and wedding invitation videos",
        provider: { "@id": `${siteConfig.url}/#business` },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
