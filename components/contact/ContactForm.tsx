'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Send } from 'lucide-react';
import { Field } from '@/components/ui/Field';
import { Toast } from '@/components/ui/Toast';
import { cn } from '@/lib/cn';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Enter your name'),
  email: z.string().trim().email('Enter a valid email address'),
  company: z.string().trim().optional(),
  message: z.string().trim().min(10, 'Please add a little more detail'),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
    defaultValues: { name: '', email: '', company: '', message: '' },
  });

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const onSubmit = async (values: ContactValues) => {
    setSubmitting(true);
    // Simulated send — no data leaves the browser.
    // eslint-disable-next-line no-console
    console.log('[Meridian] Contact message (not sent):', values);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    reset();
    setToastOpen(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToastOpen(false), 5000);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="rounded-card border border-meridian-platinum/50 bg-white p-6 shadow-elevated sm:p-8"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field
            label="Name"
            {...register('name')}
            error={errors.name?.message}
            autoComplete="name"
            placeholder="Jordan Avery"
          />
          <Field
            label="Email"
            type="email"
            inputMode="email"
            {...register('email')}
            error={errors.email?.message}
            autoComplete="email"
            placeholder="you@business.com"
          />
        </div>

        <div className="mt-5">
          <Field
            label="Business name"
            optional
            {...register('company')}
            error={errors.company?.message}
            autoComplete="organization"
            placeholder="Acme Co."
          />
        </div>

        <div className="mt-5 flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-meridian-navy">
            How can we help?
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            aria-invalid={errors.message ? true : undefined}
            placeholder="Tell us a little about your business and what you’re looking for."
            className={cn(
              'w-full rounded-btn border bg-white px-3.5 py-3 text-meridian-navy placeholder:text-meridian-steel/60 transition-colors focus:outline-none',
              errors.message
                ? 'border-red-400 focus-visible:ring-2 focus-visible:ring-red-200'
                : 'border-meridian-platinum/70 focus-visible:border-meridian-gold focus-visible:ring-2 focus-visible:ring-meridian-gold/30',
            )}
          />
          {errors.message && (
            <p className="text-xs font-medium text-red-600">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-6 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-btn border border-transparent bg-meridian-navy px-7 text-base font-medium text-white transition-all duration-200 ease-meridian hover:-translate-y-0.5 hover:border-meridian-gold hover:shadow-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-gold disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send message
            </>
          )}
        </button>

        <p className="mt-4 text-xs text-meridian-steel">
          This is a demonstration form — messages are not transmitted or stored.
        </p>
      </form>

      <Toast
        open={toastOpen}
        message="Message sent — a Meridian advisor will be in touch shortly."
        onClose={() => setToastOpen(false)}
      />
    </>
  );
}
