import { siteConfig } from "@/data/site";

export function StructuredData() {
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
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address,
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          addressCountry: "IN",
        },
        areaServed: ["Kolkata", "India", "Destination Weddings"],
        sameAs: [siteConfig.instagram, siteConfig.pinterest, siteConfig.youtube],
      },
      {
        "@type": "Service",
        serviceType: "Wedding photography, wedding planning, wedding films, and event management",
        provider: { "@id": `${siteConfig.url}/#business` },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
