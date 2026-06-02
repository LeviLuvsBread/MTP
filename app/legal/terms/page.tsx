import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms governing your use of the Meridian Trust Partners website.',
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="June 2, 2026">
      <p>
        These Terms of Service (“Terms”) govern your access to and use of the website operated by{' '}
        {siteConfig.legalName} (“Meridian,” “we,” “us,” or “our”). This is placeholder language
        provided for demonstration and must be finalized by counsel.
      </p>

      <h2>Acceptance of terms</h2>
      <p>
        By accessing or using this website, you agree to these Terms. If you do not agree, please do
        not use the site.
      </p>

      <h2>Nature of our services</h2>
      <p>
        Meridian provides information about, and facilitates access to, business financing products.
        Meridian is not a bank and is not an FDIC-insured institution. Nothing on this website is an
        offer or commitment to lend, and no financing is guaranteed. All products, amounts, rates, and
        terms are subject to eligibility, underwriting, and approval, and may vary by applicant.
      </p>

      <h2>Eligibility</h2>
      <p>
        You must be at least 18 years old and authorized to act on behalf of the business you
        represent to submit information through this site.
      </p>

      <h2>Information you provide</h2>
      <p>
        You agree that information you submit is accurate and that you have the right to provide it. You
        are responsible for maintaining the confidentiality of any credentials associated with your
        use of the site.
      </p>

      <h2>Demonstration forms</h2>
      <p>
        Forms on this site, including any application or contact form, are presented for demonstration.
        Submitting a form does not transmit or store your information and does not constitute an
        application for credit.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The site and its content are owned by Meridian or its licensors and are protected by applicable
        laws. You may not reproduce or distribute content without permission.
      </p>

      <h2>Third-party links</h2>
      <p>
        The site may link to third-party resources we do not control. We are not responsible for their
        content or practices.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The site is provided “as is” and “as available” without warranties of any kind, to the fullest
        extent permitted by law. [ATTORNEY REVIEW REQUIRED — confirm warranty and disclaimer language.]
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Meridian will not be liable for indirect, incidental,
        special, consequential, or punitive damages arising from your use of the site.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of New York, without regard to its conflict
        of law principles. [ATTORNEY REVIEW REQUIRED — confirm jurisdiction and venue.]
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the site after changes take
        effect constitutes acceptance of the revised Terms.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about these Terms can be directed to{' '}
        <a href={siteConfig.emailHref}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  );
}
