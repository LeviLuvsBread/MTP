import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';
import { Logo } from '@/components/LogoMark';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/lib/site';

const productLinks = [
  { label: 'Revenue-Based Financing', href: '/#products' },
  { label: 'Business Line of Credit', href: '/#products' },
  { label: 'Equipment Financing', href: '/#products' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Contact', href: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/legal/privacy' },
  { label: 'Terms of Service', href: '/legal/terms' },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="font-sans text-eyebrow font-semibold uppercase text-meridian-platinum/70">
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-meridian-platinum/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = 2026;

  return (
    <footer className="navy-texture text-meridian-ivory">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-meridian-platinum/80">
              {siteConfig.tagline} Working capital for U.S. businesses that move forward — fast,
              transparent, and built to last.
            </p>
            <address className="mt-6 not-italic text-sm text-meridian-platinum/70">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </address>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-btn border border-white/15 text-meridian-platinum/80 transition-colors hover:border-meridian-gold hover:text-white"
              >
                <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </a>
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="inline-flex h-10 w-10 items-center justify-center rounded-btn border border-white/15 text-meridian-platinum/80 transition-colors hover:border-meridian-gold hover:text-white"
              >
                <Twitter className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <FooterColumn title="Products" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />

          <div>
            <FooterColumn title="Legal" links={legalLinks} />
            <div className="mt-8">
              <h2 className="font-sans text-eyebrow font-semibold uppercase text-meridian-platinum/70">
                Contact
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-meridian-platinum/80">
                <li>
                  <a href={siteConfig.emailHref} className="transition-colors hover:text-white">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="text-meridian-platinum/60">{siteConfig.hours}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-meridian-platinum/55">
            {siteConfig.legalName} is a financing facilitator, not a bank or FDIC-insured
            institution. Products, amounts, rates, and terms are subject to eligibility,
            underwriting, and approval, and vary by applicant. Funding times are estimates and not
            guaranteed. Nothing on this site constitutes an offer or commitment to lend. All figures
            are illustrative.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-xs text-meridian-platinum/60 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {year} {siteConfig.legalName}. All rights reserved.
            </span>
            <span className="flex gap-5">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              ))}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
