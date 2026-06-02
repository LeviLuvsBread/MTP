import { cn } from '@/lib/cn';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  size?: 'xl' | 'lg' | 'md' | 'sm';
  className?: string;
  children: React.ReactNode;
};

const sizes: Record<NonNullable<HeadingProps['size']>, string> = {
  xl: 'text-4xl leading-tight sm:text-5xl lg:text-display-xl',
  lg: 'text-3xl leading-tight sm:text-4xl lg:text-display-lg',
  md: 'text-2xl leading-snug lg:text-display-md',
  sm: 'text-xl leading-snug lg:text-2xl',
};

/** Serif display heading with size variants. */
export function Heading({ as: Tag = 'h2', size = 'lg', className, children }: HeadingProps) {
  return (
    <Tag className={cn('font-display font-semibold text-meridian-navy', sizes[size], className)}>
      {children}
    </Tag>
  );
}
