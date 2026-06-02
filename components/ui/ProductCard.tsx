import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/lib/site';
import { cn } from '@/lib/cn';

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const { icon: Icon, title, description, href } = product;
  return (
    <Link
      href={href}
      className={cn(
        'group relative flex h-full flex-col rounded-card border border-meridian-platinum/50 bg-white p-7 transition-all duration-300 ease-meridian hover:-translate-y-1 hover:border-meridian-gold/50 hover:shadow-elevated',
        className,
      )}
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-[10px] bg-meridian-navy/5 text-meridian-navy transition-colors duration-300 group-hover:bg-meridian-navy group-hover:text-white">
        <Icon className="h-6 w-6" strokeWidth={1.6} />
      </span>

      <h3 className="mt-6 font-display text-xl font-semibold text-meridian-navy">
        <span className="relative inline-block">
          {title}
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-meridian-gold transition-all duration-300 ease-meridian group-hover:w-full" />
        </span>
      </h3>

      <p className="mt-3 flex-1 leading-relaxed text-meridian-steel">{description}</p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-meridian-navy">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-meridian group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
