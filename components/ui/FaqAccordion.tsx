'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';
import type { Faq } from '@/lib/site';

export function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <Accordion.Root type="single" collapsible className="divide-y divide-meridian-platinum/50">
      {items.map((item, i) => (
        <Accordion.Item key={i} value={`item-${i}`} className="py-1">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left">
              <span className="font-display text-lg font-medium text-meridian-navy transition-colors group-hover:text-meridian-gold">
                {item.q}
              </span>
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-meridian-platinum/70 text-meridian-navy transition-all duration-300 ease-meridian group-hover:border-meridian-gold group-data-[state=open]:bg-meridian-navy group-data-[state=open]:text-white">
                <Plus className="h-4 w-4 transition-transform duration-300 ease-meridian group-data-[state=open]:rotate-45" />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <p className="max-w-2xl pb-6 pr-12 leading-relaxed text-meridian-steel">{item.a}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
