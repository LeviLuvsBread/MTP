'use client';

import { useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';
import { Field } from '@/components/ui/Field';
import { Select } from '@/components/ui/Select';
import { Stepper } from '@/components/ui/Stepper';
import { Button } from '@/components/ui/Button';
import { SuccessScreen } from '@/components/apply/SuccessScreen';
import { cn } from '@/lib/cn';
import { easeOut } from '@/lib/motion';
import {
  applySchema,
  type ApplyValues,
  stepFields,
  steps,
  industryOptions,
  usStates,
  yearsBuckets,
  revenueBuckets,
  useOfFundsOptions,
  timelineOptions,
  submitApplication,
  formatCurrency,
  AMOUNT_MIN,
  AMOUNT_MAX,
  AMOUNT_STEP,
} from '@/lib/apply';

export function ApplyForm() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [reference, setReference] = useState<string | null>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const {
    register,
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<ApplyValues>({
    resolver: zodResolver(applySchema),
    mode: 'onTouched',
    defaultValues: {
      legalName: '',
      dba: '',
      industry: '',
      state: '',
      yearsInBusiness: '',
      monthlyRevenue: '',
      fullName: '',
      email: '',
      phone: '',
      dob: '',
      ssnLast4: '',
      homeAddress: '',
      city: '',
      zip: '',
      amount: 50000,
      useOfFunds: '',
      consent: false,
    },
  });

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  };

  const goNext = async () => {
    const valid = await trigger(stepFields[step]);
    if (!valid) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
    scrollToTop();
  };

  const goBack = () => {
    setStep((s) => Math.max(s - 1, 0));
    scrollToTop();
  };

  const onSubmit = async (values: ApplyValues) => {
    setSubmitting(true);
    try {
      const { reference: ref } = await submitApplication(values);
      setReference(ref);
      scrollToTop();
    } finally {
      setSubmitting(false);
    }
  };

  if (reference) {
    return (
      <div ref={topRef} className="scroll-mt-28">
        <SuccessScreen reference={reference} />
      </div>
    );
  }

  const isLast = step === steps.length - 1;

  const stepVariants = {
    enter: { opacity: 0, x: reduce ? 0 : 24 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: reduce ? 0 : -24 },
  };

  return (
    <div ref={topRef} className="scroll-mt-28">
      <div className="rounded-card border border-meridian-platinum/50 bg-white p-6 shadow-elevated sm:p-9">
        <Stepper steps={steps} current={step} />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10"
          noValidate
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={step}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: easeOut }}
            >
              {step === 0 && (
                <fieldset className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <legend className="sr-only">Business details</legend>
                  <Field
                    label="Legal business name"
                    {...register('legalName')}
                    error={errors.legalName?.message}
                    autoComplete="organization"
                    placeholder="Acme Holdings LLC"
                  />
                  <Field
                    label="DBA / Trade name"
                    optional
                    {...register('dba')}
                    error={errors.dba?.message}
                    placeholder="Acme Co."
                  />
                  <Controller
                    name="industry"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Select
                        label="Industry"
                        name="industry"
                        options={industryOptions}
                        value={field.value}
                        onValueChange={field.onChange}
                        onBlur={field.onBlur}
                        error={fieldState.error?.message}
                      />
                    )}
                  />
                  <Controller
                    name="state"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Select
                        label="State"
                        name="state"
                        options={usStates}
                        value={field.value}
                        onValueChange={field.onChange}
                        onBlur={field.onBlur}
                        error={fieldState.error?.message}
                      />
                    )}
                  />
                  <Controller
                    name="yearsInBusiness"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Select
                        label="Years in business"
                        name="yearsInBusiness"
                        options={yearsBuckets}
                        value={field.value}
                        onValueChange={field.onChange}
                        onBlur={field.onBlur}
                        error={fieldState.error?.message}
                      />
                    )}
                  />
                  <Controller
                    name="monthlyRevenue"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Select
                        label="Average monthly revenue"
                        name="monthlyRevenue"
                        options={revenueBuckets}
                        value={field.value}
                        onValueChange={field.onChange}
                        onBlur={field.onBlur}
                        error={fieldState.error?.message}
                      />
                    )}
                  />
                </fieldset>
              )}

              {step === 1 && (
                <fieldset className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <legend className="sr-only">Owner details</legend>
                  <Field
                    label="Full name"
                    {...register('fullName')}
                    error={errors.fullName?.message}
                    autoComplete="name"
                    placeholder="Jordan Avery"
                  />
                  <Field
                    label="Email address"
                    type="email"
                    inputMode="email"
                    {...register('email')}
                    error={errors.email?.message}
                    autoComplete="email"
                    placeholder="you@business.com"
                  />
                  <Field
                    label="Phone number"
                    type="tel"
                    inputMode="tel"
                    {...register('phone')}
                    error={errors.phone?.message}
                    autoComplete="tel"
                    placeholder="(555) 123-4567"
                  />
                  <Field
                    label="Date of birth"
                    type="date"
                    {...register('dob')}
                    error={errors.dob?.message}
                    autoComplete="bday"
                  />
                  <Field
                    label="SSN (last 4)"
                    inputMode="numeric"
                    maxLength={4}
                    {...register('ssnLast4')}
                    error={errors.ssnLast4?.message}
                    hint="Used only to verify identity."
                    placeholder="1234"
                  />
                  <Field
                    label="Home address"
                    {...register('homeAddress')}
                    error={errors.homeAddress?.message}
                    autoComplete="address-line1"
                    placeholder="123 Main St"
                  />
                  <Field
                    label="City"
                    {...register('city')}
                    error={errors.city?.message}
                    autoComplete="address-level2"
                    placeholder="New York"
                  />
                  <Field
                    label="ZIP code"
                    inputMode="numeric"
                    maxLength={5}
                    {...register('zip')}
                    error={errors.zip?.message}
                    autoComplete="postal-code"
                    placeholder="10005"
                  />
                </fieldset>
              )}

              {step === 2 && (
                <div className="flex flex-col gap-8">
                  {/* Amount slider */}
                  <Controller
                    name="amount"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <div className="flex items-baseline justify-between">
                          <label htmlFor="amount" className="text-sm font-medium text-meridian-navy">
                            Amount requested
                          </label>
                          <span className="nums font-display text-2xl font-semibold text-meridian-navy">
                            {formatCurrency(field.value ?? AMOUNT_MIN)}
                          </span>
                        </div>
                        <input
                          id="amount"
                          type="range"
                          min={AMOUNT_MIN}
                          max={AMOUNT_MAX}
                          step={AMOUNT_STEP}
                          value={field.value ?? AMOUNT_MIN}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                          className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-meridian-platinum/60 accent-meridian-gold"
                          aria-valuetext={formatCurrency(field.value ?? AMOUNT_MIN)}
                        />
                        <div className="mt-2 flex justify-between text-xs text-meridian-steel">
                          <span>{formatCurrency(AMOUNT_MIN)}</span>
                          <span>{formatCurrency(AMOUNT_MAX)}+</span>
                        </div>
                      </div>
                    )}
                  />

                  <Controller
                    name="useOfFunds"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Select
                        label="Use of funds"
                        name="useOfFunds"
                        options={useOfFundsOptions}
                        value={field.value}
                        onValueChange={field.onChange}
                        onBlur={field.onBlur}
                        error={fieldState.error?.message}
                      />
                    )}
                  />

                  {/* Timeline radio */}
                  <Controller
                    name="timeline"
                    control={control}
                    render={({ field, fieldState }) => (
                      <div>
                        <span className="text-sm font-medium text-meridian-navy">
                          How soon do you need funding?
                        </span>
                        <div
                          role="radiogroup"
                          aria-label="Funding timeline"
                          className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3"
                        >
                          {timelineOptions.map((opt) => {
                            const selected = field.value === opt;
                            return (
                              <button
                                key={opt}
                                type="button"
                                role="radio"
                                aria-checked={selected}
                                onClick={() => field.onChange(opt)}
                                className={cn(
                                  'rounded-btn border px-4 py-3 text-sm font-medium transition-all duration-200 ease-meridian',
                                  selected
                                    ? 'border-meridian-navy bg-meridian-navy text-white'
                                    : 'border-meridian-platinum/70 bg-white text-meridian-navy hover:border-meridian-navy/40',
                                )}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                        {fieldState.error && (
                          <p className="mt-2 text-xs font-medium text-red-600">
                            {fieldState.error.message}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  {/* Consent */}
                  <div>
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        {...register('consent')}
                        className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded accent-meridian-gold"
                      />
                      <span className="text-sm leading-relaxed text-meridian-steel">
                        I agree to be contacted by Meridian Trust Partners about my funding request. I
                        understand this is a demonstration form and no information is transmitted.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="mt-2 text-xs font-medium text-red-600">
                        {errors.consent.message}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-between gap-4 border-t border-meridian-platinum/40 pt-6">
            {step > 0 ? (
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center gap-2 text-sm font-medium text-meridian-steel transition-colors hover:text-meridian-navy"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
            ) : (
              <span className="flex items-center gap-2 text-xs text-meridian-steel">
                <ShieldCheck className="h-4 w-4 text-meridian-gold" />
                Your information is kept private
              </span>
            )}

            {isLast ? (
              <Button type="submit" variant="primary" size="lg" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  'Submit application'
                )}
              </Button>
            ) : (
              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-btn border border-transparent bg-meridian-navy px-7 text-base font-medium text-white transition-all duration-200 ease-meridian hover:-translate-y-0.5 hover:border-meridian-gold hover:shadow-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-gold"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </form>
      </div>

      <p className="mt-6 text-center text-xs text-meridian-steel">
        Checking your options won’t affect your credit score. By submitting you acknowledge this is a
        demonstration and not a real credit application.
      </p>
    </div>
  );
}
