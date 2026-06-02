import { Heading } from './Heading';

type StepProps = {
  step: string;
  title: string;
  copy: string;
};

/** A single numbered step in the How-It-Works timeline. */
export function Step({ step, title, copy }: StepProps) {
  return (
    <div className="relative flex items-start gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
      <span className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-meridian-gold bg-meridian-ivory font-display text-base font-semibold text-meridian-gold lg:mx-auto">
        {step}
      </span>
      <div className="lg:mt-7 lg:max-w-xs">
        <Heading as="h3" size="sm" className="lg:text-xl">
          {title}
        </Heading>
        <p className="mt-2.5 leading-relaxed text-meridian-steel">{copy}</p>
      </div>
    </div>
  );
}
