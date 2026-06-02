'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '@/lib/motion';

type StaggerProps = HTMLMotionProps<'div'> & {
  /** Gap between each child's entrance, in seconds. */
  gap?: number;
  delayChildren?: number;
};

/** Parent that staggers the entrance of <StaggerItem> children. */
export function Stagger({ gap = 0.08, delayChildren = 0, children, ...rest }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={stagger(gap, delayChildren)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Child of <Stagger>; inherits the trigger and fades up in sequence. */
export function StaggerItem({ children, variants, ...rest }: HTMLMotionProps<'div'>) {
  return (
    <motion.div variants={variants ?? fadeUp} {...rest}>
      {children}
    </motion.div>
  );
}
