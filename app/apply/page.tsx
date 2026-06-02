import type { Metadata } from 'next';
import { Clock, FileText, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { FadeUp } from '@/components/motion/FadeUp';
import { ApplyForm } from '@/components/apply/ApplyForm';

export const metadata: Metadata = {
  title: 'Apply for Funding',
  description:
    'Apply for working capital with Meridian Trust Partners. A short, no-obligation application — see your options in minutes.',
};

const reassurance = [
  { icon: Clock, label: 'Takes about 3 minutes' },
  { icon: ShieldCheck, label: 'Won’t affect your credit' },
  { icon: FileText, label: 'No application fees' },
];

export default function ApplyPage() {
  return (
    <div className="bg-meridian-ivory pb-20 pt-32 md:pb-28 lg:pt-40">
      <Container>
        <FadeUp onMount className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Apply</Eyebrow>
          <Heading as="h1" size="lg" className="mt-4">
            Let’s find the right funding for your business
          </Heading>
          <p className="mt-4 text-lg leading-relaxed text-meridian-steel">
            Tell us a little about your business and what you need. A dedicated advisor will follow up
            within 24 hours — no obligation.
          </p>
          <ul className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-7">
            {reassurance.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-meridian-navy/80">
                <Icon className="h-4 w-4 text-meridian-gold" strokeWidth={1.75} />
                {label}
              </li>
            ))}
          </ul>
        </FadeUp>

        <div className="mx-auto mt-12 max-w-3xl">
          <ApplyForm />
        </div>
      </Container>
    </div>
  );
}
