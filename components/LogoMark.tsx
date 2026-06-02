import { cn } from '@/lib/cn';

type LogoMarkProps = {
  className?: string;
  /** Stroke/structure color follows currentColor; gold accent is fixed. */
  title?: string;
  /** Render as decorative (aria-hidden) when an adjacent text label exists. */
  decorative?: boolean;
};

/**
 * Compass-rose-in-shield brand mark. Structure uses `currentColor` so it
 * adapts to light or dark backgrounds; the compass star stays Compass Gold.
 */
export function LogoMark({ className, title = 'Meridian Trust Partners', decorative }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : title}
      aria-hidden={decorative ? true : undefined}
      className={cn('h-9 w-9', className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shield */}
      <path
        d="M32 4.5 L55 12 V31 C55 44 45.5 53.2 32 59 C18.5 53.2 9 44 9 31 V12 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        className="opacity-90"
      />
      {/* Diagonal compass rays */}
      <g stroke="currentColor" strokeWidth="1.1" className="opacity-40">
        <line x1="32" y1="32" x2="43" y2="21" />
        <line x1="32" y1="32" x2="43" y2="43" />
        <line x1="32" y1="32" x2="21" y2="43" />
        <line x1="32" y1="32" x2="21" y2="21" />
      </g>
      {/* Cardinal four-point star */}
      <path
        d="M32 14 L35 29 L50 32 L35 35 L32 50 L29 35 L14 32 L29 29 Z"
        fill="#B8924A"
      />
      {/* Center pivot */}
      <circle cx="32" cy="32" r="2.4" fill="currentColor" />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  /** Color theme for the wordmark text. */
  tone?: 'light' | 'dark';
  /** Overall lockup scale. */
  size?: 'md' | 'lg';
};

/** Full lockup: compass mark + MERIDIAN / TRUST PARTNERS wordmark. */
export function Logo({ className, tone = 'dark', size = 'md' }: LogoProps) {
  const lg = size === 'lg';
  return (
    <span className={cn('flex items-center', lg ? 'gap-3.5' : 'gap-3', className)}>
      <LogoMark
        decorative
        className={cn(
          'shrink-0',
          lg ? 'h-12 w-12' : 'h-9 w-9',
          tone === 'light' ? 'text-white' : 'text-meridian-navy',
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display font-semibold tracking-[0.14em]',
            lg ? 'text-2xl' : 'text-lg',
            tone === 'light' ? 'text-white' : 'text-meridian-navy',
          )}
        >
          MERIDIAN
        </span>
        <span
          className={cn(
            'font-medium uppercase',
            lg ? 'mt-1 text-xs tracking-[0.38em]' : 'mt-0.5 text-[10px] tracking-[0.34em]',
            tone === 'light' ? 'text-white/70' : 'text-meridian-steel',
          )}
        >
          Trust Partners
        </span>
      </span>
    </span>
  );
}
