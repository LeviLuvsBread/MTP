import { cn } from '@/lib/cn';

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  /** Render a small gold tick before the label. */
  marker?: boolean;
};

/** Uppercase, wide-tracked label used above section headings. */
export function Eyebrow({ children, className, marker = true }: EyebrowProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 text-eyebrow font-medium uppercase text-meridian-steel',
        className,
      )}
    >
      {marker && <span aria-hidden className="h-px w-6 bg-meridian-gold" />}
      {children}
    </span>
  );
}
