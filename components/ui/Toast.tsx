'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { easeOut } from '@/lib/motion';

type ToastProps = {
  open: boolean;
  message: string;
  onClose: () => void;
};

export function Toast({ open, message, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.35, ease: easeOut }}
          className="fixed bottom-6 left-1/2 z-[80] flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-start gap-3 rounded-card border border-meridian-platinum/50 bg-white p-4 shadow-elevated-lg sm:left-auto sm:right-6 sm:translate-x-0"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-meridian-gold" />
          <p className="flex-1 text-sm leading-relaxed text-meridian-navy">{message}</p>
          <button
            onClick={onClose}
            aria-label="Dismiss notification"
            className="text-meridian-steel transition-colors hover:text-meridian-navy"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
