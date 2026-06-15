import Image from 'next/image';
import { Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { FadeUp } from '@/components/motion/FadeUp';
import { ImageReveal } from '@/components/motion/ImageReveal';
import { unsplash, images } from '@/lib/site';

const bullets = [
  'Funding from $5,000 to $2,000,000, sized to your revenue',
  'Most decisions within 24 hours, funding often same-day',
  'Repayment structured to flex with your cash flow',
  'One dedicated advisor from first call through funding',
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="scroll-mt-32 bg-meridian-ivory py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <FadeUp className="flex flex-col gap-5">
            <Eyebrow>What we do</Eyebrow>
            <Heading size="lg">A steadier way to fund what’s next</Heading>
            <p className="text-lg leading-relaxed text-meridian-steel">
              We’re a capital partner for businesses that keep the country running — the restaurants,
              contractors, clinics, and fleets that need funding to move quickly and confidently.
              Less paperwork, clearer terms, and a relationship built to last beyond a single deal.
            </p>
            <ul className="mt-2 grid gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-meridian-navy">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-meridian-gold/15 text-meridian-gold">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Button href="/about" variant="ghost" size="md">
                More about Meridian
              </Button>
            </div>
          </FadeUp>

          {/* Framed photo */}
          <ImageReveal className="rounded-card p-1.5 ring-1 ring-meridian-gold/40">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={unsplash(images.whatWeDo, { w: 1400 })}
                alt="A business owner shaking hands with a Meridian funding advisor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-meridian-midnight/30 to-transparent" />
            </div>
          </ImageReveal>
        </div>
      </Container>
    </section>
  );
}
