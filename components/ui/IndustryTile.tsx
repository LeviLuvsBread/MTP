import Image from 'next/image';
import type { Industry } from '@/lib/site';
import { unsplash } from '@/lib/site';

export function IndustryTile({ industry }: { industry: Industry }) {
  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-card">
      <Image
        src={unsplash(industry.image, { w: 900 })}
        alt={industry.name}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 400px"
        className="object-cover transition-transform duration-700 ease-meridian group-hover:scale-[1.04]"
      />
      {/* Navy overlay — deepens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-meridian-midnight/85 via-meridian-midnight/25 to-transparent transition-opacity duration-300" />
      <div className="absolute inset-0 bg-meridian-navy/0 transition-colors duration-300 group-hover:bg-meridian-navy/25" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-5">
        <h3 className="font-display text-lg font-semibold text-white drop-shadow-sm">
          {industry.name}
        </h3>
        <span
          aria-hidden
          className="h-px w-6 bg-meridian-gold transition-all duration-300 ease-meridian group-hover:w-9"
        />
      </div>
    </div>
  );
}
