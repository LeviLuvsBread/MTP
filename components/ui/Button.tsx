import Link from 'next/link';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'ghost' | 'ghostLight' | 'link';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-btn font-medium transition-all duration-200 ease-meridian focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meridian-gold disabled:pointer-events-none disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-meridian-navy text-white border border-transparent hover:border-meridian-gold hover:-translate-y-0.5 hover:shadow-elevated',
  ghost:
    'bg-transparent text-meridian-navy border border-meridian-navy/20 hover:border-meridian-navy/40 hover:bg-meridian-navy/[0.04]',
  ghostLight:
    'bg-white/5 text-white border border-white/30 backdrop-blur-sm hover:border-meridian-gold hover:bg-white/10',
  link: 'text-meridian-navy underline-offset-4 hover:text-meridian-gold hover:underline px-0 py-0 rounded-none',
};

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-[52px] px-7 text-base',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function buttonClasses(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  const sizing = variant === 'link' ? '' : sizes[size];
  return cn(base, variants[variant], sizing, className);
}

/** Primary CTA / link button. Renders next/link, <a>, or <button> as needed. */
export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = buttonClasses(variant, size, className);

  if ('href' in props && props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    const isInternal = href.startsWith('/') || href.startsWith('#');
    if (isInternal) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }
    const isProtocol = /^(mailto:|tel:)/.test(href);
    const external = isProtocol ? {} : { target: '_blank', rel: 'noopener noreferrer' };
    return (
      <a href={href} className={classes} {...external} {...rest}>
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
