import { ShieldCheck, Clock, FileText, Headset } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { FadeUp } from '@/components/motion/FadeUp';

const points = [
  { icon: ShieldCheck, label: 'Transparent terms, in writing' },
  { icon: Clock, label: 'Decisions in as little as 24 hours' },
  { icon: FileText, label: 'No application fees' },
  { icon: Headset, label: 'A dedicated funding advisor' },
];

export function TrustBar() {
  return (
    <section className="border-y border-meridian-platinum/40 bg-white" aria-label="Why businesses choose Meridian">
      <Container className="py-6">
        <FadeUp className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <p className="text-eyebrow font-medium uppercase text-meridian-steel">
            Trusted by U.S. businesses across 30+ industries
          </p>
          <ul className="grid w-full grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4 lg:flex lg:w-auto lg:items-center lg:gap-8">
            {points.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm text-meridian-navy/80">
                <Icon className="h-4 w-4 shrink-0 text-meridian-gold" strokeWidth={1.75} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </Container>
    </section>
  );
}
