import { cn } from '@/lib/cn';
import { Container } from './Container';
import { Eyebrow } from './Eyebrow';
import { Heading } from './Heading';
import { FadeUp } from '@/components/motion/FadeUp';

type Background = 'ivory' | 'white' | 'navy' | 'transparent';

const backgrounds: Record<Background, string> = {
  ivory: 'bg-meridian-ivory text-meridian-navy',
  white: 'bg-white text-meridian-navy',
  navy: 'navy-texture text-meridian-ivory',
  transparent: '',
};

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  align?: 'left' | 'center';
  background?: Background;
  headingSize?: 'xl' | 'lg' | 'md';
  /** Wrap children in a max-width Container (default true). */
  contained?: boolean;
  className?: string;
  headerClassName?: string;
  children?: React.ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  align = 'left',
  background = 'transparent',
  headingSize = 'lg',
  contained = true,
  className,
  headerClassName,
  children,
}: SectionProps) {
  const onNavy = background === 'navy';
  const hasHeader = eyebrow || title || intro;

  const header = hasHeader ? (
    <FadeUp
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'mx-auto max-w-2xl items-center text-center' : 'max-w-2xl',
        headerClassName,
      )}
    >
      {eyebrow && (
        <Eyebrow className={onNavy ? 'text-meridian-platinum' : undefined}>{eyebrow}</Eyebrow>
      )}
      {title && (
        <Heading size={headingSize} className={onNavy ? 'text-white' : undefined}>
          {title}
        </Heading>
      )}
      {intro && (
        <p
          className={cn(
            'text-lg leading-relaxed',
            onNavy ? 'text-meridian-platinum' : 'text-meridian-steel',
          )}
        >
          {intro}
        </p>
      )}
    </FadeUp>
  ) : null;

  const body = (
    <>
      {header && <div className={cn(hasHeader && children && 'mb-12 lg:mb-16')}>{header}</div>}
      {children}
    </>
  );

  return (
    <section
      id={id}
      className={cn('scroll-mt-32 py-16 md:py-24', backgrounds[background], className)}
    >
      {contained ? <Container>{body}</Container> : body}
    </section>
  );
}
