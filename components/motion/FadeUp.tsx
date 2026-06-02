'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { fadeUp, viewportOnce } from '@/lib/motion';

type FadeUpProps = HTMLMotionProps<'div'> & {
  /** Delay before the entrance, in seconds. */
  delay?: number;
  /**
   * Play on mount instead of on scroll-into-view. Use for above-the-fold
   * content so it never sits invisible waiting for the viewport observer.
   */
  onMount?: boolean;
};

/** Fade + slide-up, on scroll into view (default) or on mount. */
export function FadeUp({ delay = 0, onMount = false, children, ...rest }: FadeUpProps) {
  const trigger = onMount
    ? { animate: 'show' as const }
    : { whileInView: 'show' as const, viewport: viewportOnce };

  return (
    <motion.div
      initial="hidden"
      {...trigger}
      variants={fadeUp}
      transition={delay ? { delay } : undefined}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
