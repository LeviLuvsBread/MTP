'use client';

import { motion } from 'framer-motion';
import { imageReveal, viewportOnce } from '@/lib/motion';
import { cn } from '@/lib/cn';

type ImageRevealProps = {
  children: React.ReactNode;
  className?: string;
};

/** Left-to-right clip-path reveal wrapper for framed photography. */
export function ImageReveal({ children, className }: ImageRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={imageReveal}
      className={cn('relative overflow-hidden', className)}
    >
      {children}
    </motion.div>
  );
}
