'use client';

import * as RSelect from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';

type SelectProps = {
  label: string;
  value?: string;
  onValueChange?: (value: string) => void;
  onBlur?: () => void;
  options: readonly string[];
  placeholder?: string;
  error?: string;
  hint?: string;
  id?: string;
  name?: string;
};

export function Select({
  label,
  value,
  onValueChange,
  onBlur,
  options,
  placeholder = 'Select…',
  error,
  hint,
  id,
  name,
}: SelectProps) {
  const errorId = error ? `${id ?? name}-error` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id ?? name} className="text-sm font-medium text-meridian-navy">
        {label}
      </label>
      <RSelect.Root value={value || undefined} onValueChange={onValueChange}>
        <RSelect.Trigger
          id={id ?? name}
          onBlur={onBlur}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          className={cn(
            'flex h-12 w-full items-center justify-between gap-2 rounded-btn border bg-white px-3.5 text-left text-meridian-navy transition-colors focus:outline-none data-[placeholder]:text-meridian-steel',
            error
              ? 'border-red-400 focus-visible:ring-2 focus-visible:ring-red-200'
              : 'border-meridian-platinum/70 focus-visible:border-meridian-gold focus-visible:ring-2 focus-visible:ring-meridian-gold/30',
          )}
        >
          <RSelect.Value placeholder={placeholder} />
          <RSelect.Icon>
            <ChevronDown className="h-4 w-4 text-meridian-steel" />
          </RSelect.Icon>
        </RSelect.Trigger>
        <RSelect.Portal>
          <RSelect.Content
            position="popper"
            sideOffset={6}
            className="z-[60] max-h-72 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-btn border border-meridian-platinum/60 bg-white shadow-elevated data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95"
          >
            <RSelect.Viewport className="p-1.5">
              {options.map((opt) => (
                <RSelect.Item
                  key={opt}
                  value={opt}
                  className="relative flex cursor-pointer select-none items-center rounded-[6px] py-2.5 pl-3 pr-8 text-sm text-meridian-navy outline-none data-[highlighted]:bg-meridian-ivory data-[state=checked]:font-medium"
                >
                  <RSelect.ItemText>{opt}</RSelect.ItemText>
                  <RSelect.ItemIndicator className="absolute right-2.5 inline-flex">
                    <Check className="h-4 w-4 text-meridian-gold" />
                  </RSelect.ItemIndicator>
                </RSelect.Item>
              ))}
            </RSelect.Viewport>
          </RSelect.Content>
        </RSelect.Portal>
      </RSelect.Root>
      {hint && !error && <p className="text-xs text-meridian-steel">{hint}</p>}
      {error && (
        <p id={errorId} className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
