'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { easeOut } from '@/lib/motion';

export function SuccessScreen({ reference }: { reference: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="mx-auto max-w-xl rounded-card border border-meridian-platinum/50 bg-white p-8 text-center shadow-elevated sm:p-12"
    >
      {/* Animated check */}
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-meridian-gold/12">
        <svg viewBox="0 0 52 52" className="h-12 w-12" fill="none">
          <motion.circle
            cx="26"
            cy="26"
            r="23"
            stroke="#B8924A"
            strokeWidth="2.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: easeOut }}
          />
          <motion.path
            d="M15 27 l8 8 l15 -16"
            stroke="#0B1E3F"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, ease: easeOut, delay: 0.5 }}
          />
        </svg>
      </div>

      <h2 className="mt-7 font-display text-3xl font-semibold text-meridian-navy">
        Application received
      </h2>
      <p className="mt-4 leading-relaxed text-meridian-steel">
        Thank you. A Meridian funding advisor will reach out within 24 hours to walk through your
        options. Keep your reference number handy.
      </p>

      <div className="mt-7 rounded-btn border border-dashed border-meridian-gold/50 bg-meridian-ivory px-5 py-4">
        <span className="text-eyebrow uppercase text-meridian-steel">Reference number</span>
        <p className="nums mt-1 font-display text-2xl font-semibold tracking-wide text-meridian-navy">
          {reference}
        </p>
      </div>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button href="/" variant="primary" size="md">
          Back to home
        </Button>
        <Button href="/contact" variant="ghost" size="md">
          Contact us
        </Button>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-meridian-steel">
        This is a demonstration form — no information was transmitted or stored. Submitting does not
        constitute an application for credit or an offer to lend.
      </p>
    </motion.div>
  );
}
