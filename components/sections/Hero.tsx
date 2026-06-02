'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { easeOut } from '@/lib/motion';
import { unsplash, images, siteConfig } from '@/lib/site';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  return (
    <section
      ref={ref}
      className="grain relative flex min-h-dvh items-center overflow-hidden bg-meridian-midnight"
    >
      {/* Parallax photo */}
      <motion.div className="absolute inset-0" style={{ y: reduce ? 0 : y }}>
        <div className="relative h-[112%] w-full">
          <Image
            src={unsplash(images.hero, { w: 2200, q: 70 })}
            alt="Modern commercial architecture at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Navy gradient overlay */}
      <motion.div
        aria-hidden
        style={{ opacity: reduce ? 1 : overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-br from-meridian-midnight/85 via-meridian-midnight/70 to-meridian-navy/45"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-meridian-midnight/80 via-transparent to-transparent"
      />

      <Container className="relative z-10 w-full pt-28 pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2.5 text-eyebrow font-medium uppercase text-meridian-platinum"
          >
            <span aria-hidden className="h-px w-7 bg-meridian-gold" />
            {siteConfig.wordmark.display} {siteConfig.wordmark.subtitle}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tightdisplay text-white sm:text-5xl lg:text-display-xl"
          >
            {siteConfig.tagline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-meridian-platinum/90"
          >
            Meridian Trust Partners provides fast, transparent working capital to U.S. businesses —
            structured around where you’re headed, not just where you’ve been.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/apply" variant="primary" size="lg">
              Apply Now
            </Button>
            <Button href="/#how-it-works" variant="ghostLight" size="lg">
              How It Works
            </Button>
          </motion.div>

          <motion.p variants={item} className="mt-6 text-sm text-meridian-platinum/70">
            No obligation · Checking options won’t affect your credit score
          </motion.p>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <Link
        href="/#what-we-do"
        aria-label="Scroll to learn more"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-meridian-platinum/70 transition-colors hover:text-white md:block"
      >
        <ChevronDown className="h-6 w-6 animate-bob" />
      </Link>
    </section>
  );
}
