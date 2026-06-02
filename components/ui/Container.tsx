import { cn } from '@/lib/cn';

type ContainerProps = {
  as?: 'div' | 'section' | 'header' | 'footer' | 'main';
  className?: string;
  children: React.ReactNode;
};

/** Max-width (1280px) centered wrapper with responsive gutters. */
export function Container({ as: Tag = 'div', className, children }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-container container-px', className)}>
      {children}
    </Tag>
  );
}
