import {
  TrendingUp,
  Wallet,
  Truck,
  type LucideIcon,
} from 'lucide-react';

/** Build an Unsplash delivery URL from a verified photo id. */
export function unsplash(
  id: string,
  { w = 2400, q = 80 }: { w?: number; q?: number } = {},
) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const siteConfig = {
  name: 'Meridian Trust Partners',
  shortName: 'Meridian',
  legalName: 'Meridian Trust Partners, LLC',
  wordmark: { display: 'MERIDIAN', subtitle: 'TRUST PARTNERS' },
  tagline: 'Capital aligned with your direction.',
  description:
    'Meridian Trust Partners provides fast, transparent working capital to U.S. businesses — revenue-based financing, lines of credit, and equipment funding.',
  url: 'https://meridiantrustpartners.com',
  email: 'hello@meridiantrustpartners.com',
  emailHref: 'mailto:hello@meridiantrustpartners.com',
  address: {
    line1: '48 Wall Street, Suite 1100',
    line2: 'New York, NY 10005',
  },
  hours: 'Mon–Fri · 8:00am–8:00pm ET',
  social: {
    linkedin: 'https://www.linkedin.com/',
    x: 'https://x.com/',
  },
} as const;

export const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/#products' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Contact', href: '/contact' },
] as const;

export type Product = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export const products: Product[] = [
  {
    icon: TrendingUp,
    title: 'Revenue-Based Financing',
    description:
      'Funding that scales to your revenue. Repayment flexes up in strong months and eases in slower ones.',
    href: '/#products',
  },
  {
    icon: Wallet,
    title: 'Business Line of Credit',
    description:
      'Draw what you need, when you need it. Pay interest only on what you use, replenished as you repay.',
    href: '/#products',
  },
  {
    icon: Truck,
    title: 'Equipment Financing',
    description:
      'Acquire vehicles, machinery, and hardware without draining reserves — the asset secures the funding.',
    href: '/#products',
  },
];

export const howItWorks = [
  {
    step: '01',
    title: 'Apply',
    copy: 'Tell us about your business in minutes. A short application — no obligation, no impact to your credit to see options.',
  },
  {
    step: '02',
    title: 'Get Approved',
    copy: 'A dedicated funding advisor reviews your file and presents clear terms. Most decisions land within 24 hours.',
  },
  {
    step: '03',
    title: 'Get Funded',
    copy: 'Accept your terms and receive capital — often the same day funds are disbursed to your business account.',
  },
] as const;

export type Industry = { name: string; image: string };

export const industries: Industry[] = [
  { name: 'Restaurants', image: 'photo-1517248135467-4c7edcad34c4' },
  { name: 'Automotive', image: 'photo-1486006920555-c77dcf18193c' },
  { name: 'Construction', image: 'photo-1541888946425-d81bb19240f5' },
  { name: 'Healthcare', image: 'photo-1631217868264-e5b90bb7e133' },
  { name: 'Retail', image: 'photo-1441986300917-64674bd600d8' },
  { name: 'Trucking', image: 'photo-1601584115197-04ecc0da31d7' },
  { name: 'Beauty & Wellness', image: 'photo-1633681926022-84c23e8cb2d6' },
  { name: 'Wholesale', image: 'photo-1553413077-190dd305871c' },
  { name: 'Professional Services', image: 'photo-1600880292203-757bb62b4baf' },
];

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
};

export const stats: Stat[] = [
  { value: 500, prefix: '$', suffix: 'M+', label: 'Capital deployed' },
  { value: 10000, suffix: '+', label: 'Businesses funded' },
  { value: 24, suffix: 'hr', label: 'Average decision' },
  { value: 30, suffix: '+', label: 'Industries served' },
];

export type Testimonial = {
  quote: string;
  name: string;
  business: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Meridian moved faster than our bank ever has. We had working capital in place before the week was out — and the terms were exactly what we were told up front.',
    name: 'Daniel R.',
    business: 'Multi-unit restaurant group',
    image: 'photo-1507003211169-0a1dd7228f2d',
  },
  {
    quote:
      'What stood out was the candor. Our advisor walked through the numbers line by line. No surprises, no fine print games. It felt like a real partnership.',
    name: 'Marcus T.',
    business: 'Commercial HVAC contractor',
    image: 'photo-1556740738-b6a63e27c4df',
  },
  {
    quote:
      'We needed equipment financing on a tight timeline to take on a larger contract. Meridian structured it around our cash flow and we never missed a beat.',
    name: 'Priya N.',
    business: 'Regional logistics & trucking',
    image: 'photo-1573497019940-1c28c88b4f3e',
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: 'How much funding can my business qualify for?',
    a: 'Funding amounts typically range from $5,000 to $2,000,000, sized to your monthly revenue and time in business. Your advisor will present options specific to your file.',
  },
  {
    q: 'How fast can I receive funds?',
    a: 'Most applications receive a decision within 24 hours, and approved businesses are frequently funded the same day terms are accepted. Timing can vary based on documentation.',
  },
  {
    q: 'What do I need to apply?',
    a: 'A short application plus a few months of recent business bank statements is usually enough to begin. We may request additional documentation depending on the product and amount.',
  },
  {
    q: 'Will applying affect my credit score?',
    a: 'Reviewing your options does not require a hard credit pull. A hard inquiry, if any, occurs only with your consent before finalizing terms.',
  },
  {
    q: 'What are the qualifications?',
    a: 'Most funded businesses have been operating for at least six months, generate consistent monthly revenue, and hold a U.S. business bank account. Requirements vary by product.',
  },
  {
    q: 'How does repayment work?',
    a: 'Repayment is structured to fit your cash flow — a fixed schedule, or a share of your revenue as it comes in. Your advisor will explain the full cost and schedule before you commit.',
  },
  {
    q: 'Is Meridian a direct funder or a broker?',
    a: 'Meridian Trust Partners works with a network of capital sources to match your business with appropriate terms. We disclose the structure of every offer in writing.',
  },
  {
    q: 'Are there restrictions on how I use the funds?',
    a: 'Funds are intended for legitimate business purposes — inventory, payroll, expansion, equipment, marketing, and more. Your advisor can confirm any product-specific limits.',
  },
];

/** Verified hero / section photography (Unsplash photo ids). */
export const images = {
  hero: 'photo-1486406146926-c627a92ad1ab', // commercial skyline / architecture
  whatWeDo: 'photo-1521791136064-7986c2920216', // handshake / partnership
  ctaTexture: 'photo-1450101499163-c8848c66ca85', // abstract architectural
  aboutHero: 'photo-1449157291145-7efd050a4d0e', // architectural bridge / direction
  aboutStory: 'photo-1542744173-8e7e53415bb0', // business meeting
  contact: 'photo-1554469384-e58fac16e23a', // city / building
} as const;

export const values = [
  {
    title: 'Direction',
    copy: 'Capital is a means, not the goal. We start with where your business is headed and structure funding that moves you toward it.',
  },
  {
    title: 'Discipline',
    copy: 'We underwrite with care and price with honesty. The right amount, on terms you can sustain — never more than the business can carry.',
  },
  {
    title: 'Trust',
    copy: 'Every number is on the table before you sign. A relationship built to outlast a single transaction.',
  },
] as const;

export type Leader = {
  name: string;
  title: string;
  bio: string;
  image: string;
};

export const leadership: Leader[] = [
  {
    name: 'Eleanor Vance',
    title: 'Managing Partner',
    bio: 'Two decades in commercial credit and structured finance, focused on capital that fits the businesses it serves.',
    image: 'photo-1573497019940-1c28c88b4f3e',
  },
  {
    name: 'Marcus Hale',
    title: 'Head of Underwriting',
    bio: 'Builds the disciplined, transparent underwriting framework behind every Meridian offer.',
    image: 'photo-1507003211169-0a1dd7228f2d',
  },
  {
    name: 'Sofia Ramos',
    title: 'Director of Client Partnerships',
    bio: 'Leads the advisory team that guides owners from first conversation through funding and beyond.',
    image: 'photo-1664575602554-2087b04935a5',
  },
  {
    name: 'James Okafor',
    title: 'Head of Capital Markets',
    bio: 'Manages Meridian’s funding network to keep terms competitive and reliable across cycles.',
    image: 'photo-1556761175-b413da4baf72',
  },
];
