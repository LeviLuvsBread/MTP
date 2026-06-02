import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FadeUp } from '@/components/motion/FadeUp';
import { unsplash } from '@/lib/site';
import { cn } from '@/lib/cn';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  align?: 'left' | 'center';
};

/** Compact dark hero for interior pages; sits under the transparent nav. */
export function PageHero({ eyebrow, title, subtitle, image, align = 'left' }: PageHeroProps) {
  return (
    <section className="grain relative overflow-hidden bg-meridian-midnight pb-16 pt-36 md:pb-20 md:pt-40">
      <Image
        src={unsplash(image, { w: 2400 })}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-meridian-midnight/92 via-meridian-midnight/80 to-meridian-navy/60"
      />
      <Container className="relative">
        <FadeUp
          onMount
          className={cn(
            'flex flex-col gap-5',
            align === 'center' ? 'mx-auto max-w-3xl items-center text-center' : 'max-w-3xl',
          )}
        >
          <Eyebrow className="text-meridian-platinum">{eyebrow}</Eyebrow>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tightdisplay text-white sm:text-5xl lg:text-display-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-2xl text-lg leading-relaxed text-meridian-platinum/90">{subtitle}</p>
          )}
        </FadeUp>
      </Container>
    </section>
  );
}
