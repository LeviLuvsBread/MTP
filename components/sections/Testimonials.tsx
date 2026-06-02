import { Section } from '@/components/ui/Section';
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';
import { testimonials } from '@/lib/site';

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      background="ivory"
      align="center"
      eyebrow="In their words"
      title="Partners, not just funders"
      intro="Why owners come back to Meridian — and refer the businesses they know."
    >
      <div className="mx-auto max-w-4xl">
        <TestimonialCarousel items={testimonials} />
      </div>
    </Section>
  );
}
