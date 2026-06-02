'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/LogoMark';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { navLinks, siteConfig } from '@/lib/site';
import { cn } from '@/lib/cn';

/** Routes that render a dark, full-bleed hero behind a transparent nav. */
const HERO_ROUTES = new Set(['/', '/about', '/contact']);

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const overHero = HERO_ROUTES.has(pathname);
  const solid = scrolled || !overHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-meridian',
        solid
          ? 'border-b border-meridian-platinum/60 bg-white/90 shadow-[0_2px_20px_-10px_rgba(11,30,63,0.35)] backdrop-blur-md supports-[backdrop-filter]:bg-white/80'
          : 'border-b border-transparent bg-gradient-to-b from-meridian-midnight/60 via-meridian-midnight/25 to-transparent',
      )}
    >
      <Container className="flex h-[90px] items-center justify-between lg:h-[108px]">
        <Link href="/" className="rounded-sm">
          <Logo size="lg" tone={solid ? 'dark' : 'light'} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'group relative text-base font-medium transition-colors',
                solid
                  ? 'text-meridian-navy/80 hover:text-meridian-navy'
                  : 'text-white/85 hover:text-white',
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-meridian-gold transition-all duration-300 ease-meridian group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/apply" variant="primary" size="lg">
            Apply Now
          </Button>
        </div>

        {/* Mobile menu */}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              className={cn(
                'inline-flex h-12 w-12 items-center justify-center rounded-btn transition-colors lg:hidden',
                solid ? 'text-meridian-navy hover:bg-meridian-navy/5' : 'text-white hover:bg-white/10',
              )}
              aria-label="Open menu"
            >
              <Menu className="h-7 w-7" />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-meridian-midnight/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out lg:hidden" />
            <Dialog.Content
              className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-white p-6 shadow-elevated-lg duration-300 ease-meridian data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right lg:hidden"
              aria-describedby={undefined}
            >
              <div className="flex items-center justify-between">
                <Dialog.Title asChild>
                  <span className="sr-only">Navigation</span>
                </Dialog.Title>
                <Logo tone="dark" />
                <Dialog.Close
                  className="inline-flex h-11 w-11 items-center justify-center rounded-btn text-meridian-navy hover:bg-meridian-navy/5"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Dialog.Close>
              </div>

              <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-btn px-3 py-3 text-lg font-medium text-meridian-navy/90 transition-colors hover:bg-meridian-ivory hover:text-meridian-navy"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4 pt-8">
                <Button href="/apply" variant="primary" size="lg" onClick={() => setOpen(false)}>
                  Apply Now
                </Button>
                <a
                  href={siteConfig.phoneHref}
                  className="text-center text-sm text-meridian-steel hover:text-meridian-navy"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Container>
    </header>
  );
}
