import { forwardRef } from 'react';
import { cn } from '@/lib/cn';

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
};

export const fieldInputClasses =
  'h-12 w-full rounded-btn border bg-white px-3.5 text-meridian-navy placeholder:text-meridian-steel/60 transition-colors focus:outline-none focus-visible:outline-none';

/** Labeled text input with inline error + hint, RHF-compatible via ref. */
export const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { label, error, hint, optional, id, className, ...props },
  ref,
) {
  const inputId = id ?? props.name;
  const errorId = error ? `${inputId}-error` : undefined;
  const hintId = hint ? `${inputId}-hint` : undefined;

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={inputId} className="text-sm font-medium text-meridian-navy">
        {label}
        {optional && <span className="ml-1.5 font-normal text-meridian-steel">(optional)</span>}
      </label>
      <input
        id={inputId}
        ref={ref}
        aria-invalid={error ? true : undefined}
        aria-describedby={cn(errorId, hintId) || undefined}
        className={cn(
          fieldInputClasses,
          error
            ? 'border-red-400 focus-visible:border-red-500 focus-visible:ring-2 focus-visible:ring-red-200'
            : 'border-meridian-platinum/70 focus-visible:border-meridian-gold focus-visible:ring-2 focus-visible:ring-meridian-gold/30',
        )}
        {...props}
      />
      {hint && !error && (
        <p id={hintId} className="text-xs text-meridian-steel">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
});
