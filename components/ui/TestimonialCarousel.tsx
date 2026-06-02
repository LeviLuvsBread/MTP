'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import type { Testimonial } from '@/lib/site';
import { unsplash } from '@/lib/site';
import { easeOut } from '@/lib/motion';
import { cn } from '@/lib/cn';

const AUTOPLAY_MS = 7000;

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const go = useCallback(
    (next: number) => {
      setDirection(next > index || (index === items.length - 1 && next === 0) ? 1 : -1);
      setIndex((next + items.length) % items.length);
    },
    [index, items.length],
  );

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, next]);

  const active = items[index];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: reduce ? 0 : dir * 24 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: reduce ? 0 : dir * -24 }),
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="grid items-center gap-8 rounded-card border border-meridian-platinum/50 bg-white p-6 shadow-elevated sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-12">
        {/* Portrait */}
        <div className="relative mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-full ring-1 ring-meridian-gold/40 ring-offset-2 ring-offset-white sm:h-36 sm:w-36 lg:h-44 lg:w-44">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={active.image}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: easeOut }}
              className="absolute inset-0"
            >
              <Image
                src={unsplash(active.image, { w: 400 })}
                alt={`${active.name}, ${active.business}`}
                fill
                sizes="176px"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quote */}
        <div className="min-h-[200px] sm:min-h-[180px]" aria-live="polite">
          <Quote className="h-8 w-8 text-meridian-gold/50" strokeWidth={1.5} aria-hidden />
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.figure
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: easeOut }}
            >
              <blockquote className="mt-4 font-display text-xl leading-relaxed text-meridian-navy sm:text-2xl">
                “{active.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <span className="block font-semibold text-meridian-navy">{active.name}</span>
                <span className="text-sm text-meridian-steel">{active.business}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-5">
        <button
          onClick={() => go(index - 1)}
          aria-label="Previous testimonial"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-meridian-platinum/60 text-meridian-navy transition-colors hover:border-meridian-gold hover:text-meridian-gold"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2.5" role="tablist" aria-label="Testimonials">
          {items.map((item, i) => (
            <button
              key={item.name}
              onClick={() => go(i)}
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial from ${item.name}`}
              className="group flex h-6 min-w-6 items-center justify-center"
            >
              <span
                aria-hidden
                className={cn(
                  'h-2 rounded-full transition-all duration-300 ease-meridian',
                  i === index
                    ? 'w-7 bg-meridian-gold'
                    : 'w-2 bg-meridian-platinum group-hover:bg-meridian-steel',
                )}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => go(index + 1)}
          aria-label="Next testimonial"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-meridian-platinum/60 text-meridian-navy transition-colors hover:border-meridian-gold hover:text-meridian-gold"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
