'use client';

import { MotionConfig } from 'framer-motion';
import { easeOut } from '@/lib/motion';

/**
 * App-wide motion configuration. `reducedMotion="user"` makes Framer Motion
 * automatically drop transform/layout animations for visitors who request
 * reduced motion, while keeping content fully visible.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: easeOut }}>
      {children}
    </MotionConfig>
  );
}
