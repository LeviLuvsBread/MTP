'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion, animate } from 'framer-motion';
import type { Stat } from '@/lib/site';
import { easeOut } from '@/lib/motion';

function format(n: number, decimals = 0) {
  return n.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function StatCounter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(stat.value);
      return;
    }
    const controls = animate(0, stat.value, {
      duration: 1.6,
      ease: easeOut,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, reduce, stat.value]);

  return (
    <div ref={ref} className="text-center lg:text-left">
      <div className="nums font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {stat.prefix}
        {format(display, stat.decimals)}
        {stat.suffix}
      </div>
      <div className="mt-3 text-sm uppercase tracking-[0.12em] text-meridian-platinum/70">
        {stat.label}
      </div>
    </div>
  );
}
