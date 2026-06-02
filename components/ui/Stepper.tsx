import { Check } from 'lucide-react';
import { cn } from '@/lib/cn';

type StepperProps = {
  steps: readonly { title: string; subtitle: string }[];
  current: number;
};

export function Stepper({ steps, current }: StepperProps) {
  const total = steps.length;
  const fill = total > 1 ? (current / (total - 1)) * 100 : 0;

  return (
    <div>
      {/* Mobile summary */}
      <div className="sm:hidden">
        <div className="flex items-baseline justify-between">
          <span className="font-display text-lg font-semibold text-meridian-navy">
            {steps[current].title}
          </span>
          <span className="text-sm text-meridian-steel">
            Step {current + 1} of {total}
          </span>
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-meridian-platinum/50">
          <div
            className="h-full rounded-full bg-meridian-gold transition-all duration-500 ease-meridian"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop stepper */}
      <div className="relative hidden sm:block">
        <div className="absolute left-0 right-0 top-5 mx-12 h-0.5 bg-meridian-platinum/50" aria-hidden>
          <div
            className="h-full bg-meridian-gold transition-all duration-500 ease-meridian"
            style={{ width: `${fill}%` }}
          />
        </div>
        <ol className="relative grid" style={{ gridTemplateColumns: `repeat(${total}, 1fr)` }}>
          {steps.map((step, i) => {
            const done = i < current;
            const active = i === current;
            return (
              <li key={step.title} className="flex flex-col items-center text-center">
                <span
                  className={cn(
                    'inline-flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white font-display text-base font-semibold transition-colors duration-300',
                    done && 'border-meridian-gold bg-meridian-gold text-white',
                    active && 'border-meridian-navy text-meridian-navy',
                    !done && !active && 'border-meridian-platinum text-meridian-steel',
                  )}
                >
                  {done ? <Check className="h-5 w-5" strokeWidth={2.5} /> : i + 1}
                </span>
                <span
                  className={cn(
                    'mt-3 text-sm font-medium',
                    active || done ? 'text-meridian-navy' : 'text-meridian-steel',
                  )}
                >
                  {step.title}
                </span>
                <span className="mt-0.5 text-xs text-meridian-steel">{step.subtitle}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
