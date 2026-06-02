'use client';

import { motion } from 'framer-motion';
import { lineGrow, viewportOnce } from '@/lib/motion';
import { cn } from '@/lib/cn';

/** Horizontal hairline that grows left→right when scrolled into view. */
export function TimelineLine({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute', className)} aria-hidden>
      <div className="absolute inset-0 bg-meridian-platinum/50" />
      <motion.div
        className="absolute inset-0 origin-left bg-meridian-gold"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={lineGrow}
      />
    </div>
  );
}
