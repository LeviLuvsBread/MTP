import { siteConfig } from './site';

/** Schema.org FinancialService JSON-LD for the organization. */
export const financialServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  slogan: siteConfig.tagline,
  areaServed: { '@type': 'Country', name: 'United States' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.line1,
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10005',
    addressCountry: 'US',
  },
  sameAs: [siteConfig.social.linkedin, siteConfig.social.x],
  makesOffer: [
    'Revenue-Based Financing',
    'Business Line of Credit',
    'Equipment Financing',
  ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
};
