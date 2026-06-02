import { Section } from '@/components/ui/Section';
import { Step } from '@/components/ui/Step';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { TimelineLine } from '@/components/motion/TimelineLine';
import { howItWorks } from '@/lib/site';

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      background="ivory"
      align="center"
      eyebrow="How it works"
      title="From application to funded in three steps"
      intro="A process designed to respect your time — clear at every stage, with a person behind it."
    >
      <div className="relative mt-4">
        {/* Connecting hairline (desktop only), spans between step badge centers */}
        <TimelineLine className="left-[16.666%] right-[16.666%] top-5 hidden h-0.5 lg:block" />

        <Stagger gap={0.14} className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {howItWorks.map((s) => (
            <StaggerItem key={s.step}>
              <Step step={s.step} title={s.title} copy={s.copy} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
