import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FadeUp } from '@/components/motion/FadeUp';
import { unsplash, images, siteConfig } from '@/lib/site';

export function CtaApply() {
  return (
    <section id="cta-apply" className="bg-meridian-ivory py-16 md:py-24">
      <Container>
        <div className="grain relative overflow-hidden rounded-card bg-meridian-midnight px-6 py-16 text-center md:px-12 md:py-24">
          {/* Texture */}
          <Image
            src={unsplash(images.ctaTexture, { w: 1800 })}
            alt=""
            aria-hidden
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover opacity-20"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-meridian-midnight/90 to-meridian-navy/70"
          />

          <FadeUp className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2.5 text-eyebrow font-medium uppercase text-meridian-platinum">
              <span aria-hidden className="h-px w-7 bg-meridian-gold" />
              Ready when you are
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-display-lg">
              See your options in minutes
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-meridian-platinum/90">
              A short application, no obligation, and a clear answer fast. {siteConfig.tagline}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/apply" variant="primary" size="lg">
                Apply Now
              </Button>
              <Button href="/contact" variant="ghostLight" size="lg">
                Contact us
              </Button>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
