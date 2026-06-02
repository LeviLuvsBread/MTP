import { AlertTriangle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

type LegalPageProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

/** Static, server-rendered shell for legal pages (no client JS). */
export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="bg-meridian-ivory pb-20 pt-28 md:pt-32">
      <Container className="max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tightdisplay text-meridian-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-meridian-steel">Last updated: {lastUpdated}</p>

        {/* Attorney review banner */}
        <div className="mt-8 flex items-start gap-3 rounded-card border border-meridian-gold/40 bg-meridian-gold/[0.08] p-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-meridian-gold" />
          <p className="text-sm leading-relaxed text-meridian-navy">
            <strong className="font-semibold">[ATTORNEY REVIEW REQUIRED]</strong> This document is
            placeholder template language for demonstration only. It is not legal advice and must be
            reviewed and finalized by qualified counsel before publication.
          </p>
        </div>

        <article
          className="mt-10 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-meridian-navy [&_h2]:first:mt-0 [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-meridian-navy [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-meridian-steel [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:leading-relaxed [&_li]:text-meridian-steel [&_a]:text-meridian-navy [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-meridian-gold"
        >
          {children}
        </article>
      </Container>
    </div>
  );
}
