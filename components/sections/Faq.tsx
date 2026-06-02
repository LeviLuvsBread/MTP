import { Section } from '@/components/ui/Section';
import { FadeUp } from '@/components/motion/FadeUp';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { Button } from '@/components/ui/Button';
import { faqs } from '@/lib/site';

export function Faq() {
  return (
    <Section id="faq" background="white">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <FadeUp className="lg:sticky lg:top-28 lg:self-start">
          <span className="inline-flex items-center gap-2.5 text-eyebrow font-medium uppercase text-meridian-steel">
            <span aria-hidden className="h-px w-6 bg-meridian-gold" />
            Questions, answered
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-meridian-navy sm:text-4xl lg:text-display-lg">
            What businesses ask before they apply
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-meridian-steel">
            Straight answers on amounts, timing, qualifications, and cost. Still have a question?
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="ghost" size="md">
              Talk to an advisor
            </Button>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <FaqAccordion items={faqs} />
        </FadeUp>
      </div>
    </Section>
  );
}
