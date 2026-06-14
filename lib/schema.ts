import { serviceAreas, site, suburbs } from "./site";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${site.url}/#localbusiness`,
        name: site.name,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        image: `${site.url}/images/all-needs-electrician-hero.png`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sydney",
          addressRegion: "NSW",
          addressCountry: "AU",
        },
        areaServed: [...serviceAreas, ...suburbs].map((name) => ({ "@type": "Place", name })),
        priceRange: "$$",
      },
      {
        "@type": "Electrician",
        "@id": `${site.url}/#electrician`,
        name: site.name,
        url: site.url,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sydney",
          addressRegion: "NSW",
          addressCountry: "AU",
        },
        areaServed: [...serviceAreas, ...suburbs].map((name) => ({ "@type": "Place", name })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Electrical services",
          itemListElement: [
            "Emergency electrician",
            "EV charger installation",
            "CCTV and security camera installation",
            "Switchboard upgrades",
            "Strata electrical maintenance",
          ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
        },
      },
    ],
  };
}
