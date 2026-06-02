import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Meridian Trust Partners collects, uses, and protects your information.',
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="June 2, 2026">
      <p>
        This Privacy Policy describes how {siteConfig.legalName} (“Meridian,” “we,” “us,” or “our”)
        handles information in connection with our website and services. This is placeholder language
        provided for demonstration and must be finalized by counsel.
      </p>

      <h2>Information we collect</h2>
      <p>We may collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Information you provide</strong>, such as your name, business name, contact details,
          and information submitted through forms.
        </li>
        <li>
          <strong>Business and financial information</strong> you choose to share in connection with a
          funding inquiry.
        </li>
        <li>
          <strong>Automatically collected information</strong>, such as device, browser, and usage
          data collected through cookies and similar technologies.
        </li>
      </ul>

      <h2>How we use information</h2>
      <p>We may use information to:</p>
      <ul>
        <li>Respond to inquiries and provide, maintain, and improve our services;</li>
        <li>Evaluate and process funding requests and communicate about them;</li>
        <li>Protect against fraud and comply with legal obligations; and</li>
        <li>Send updates or marketing communications, where permitted.</li>
      </ul>

      <h2>How we share information</h2>
      <p>
        We may share information with service providers, funding sources and partners, and as required
        by law or to protect our rights. We do not sell personal information in the manner defined by
        applicable law. [ATTORNEY REVIEW REQUIRED — confirm sharing practices and required
        disclosures.]
      </p>

      <h2>Cookies and tracking</h2>
      <p>
        We use cookies and similar technologies to operate the site, remember preferences, and
        understand usage. You can control cookies through your browser settings.
      </p>

      <h2>Data security</h2>
      <p>
        We maintain reasonable administrative, technical, and physical safeguards designed to protect
        information. No method of transmission or storage is completely secure.
      </p>

      <h2>Your choices and rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, delete, or limit certain
        uses of your information. To make a request, contact us using the details below.
      </p>

      <h2>Children’s privacy</h2>
      <p>Our services are not directed to children, and we do not knowingly collect their information.</p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Changes are effective when posted, and the “last
        updated” date will reflect the most recent revision.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this policy can be directed to{' '}
        <a href={siteConfig.emailHref}>{siteConfig.email}</a> or {siteConfig.address.line1},{' '}
        {siteConfig.address.line2}.
      </p>
    </LegalPage>
  );
}
