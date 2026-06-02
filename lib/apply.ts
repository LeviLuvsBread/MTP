import { z } from 'zod';

export const yearsBuckets = [
  'Less than 1 year',
  '1–2 years',
  '3–5 years',
  '6–10 years',
  'More than 10 years',
] as const;

export const revenueBuckets = [
  'Under $10,000',
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  '$50,000 – $100,000',
  'Over $100,000',
] as const;

export const useOfFundsOptions = [
  'Working capital',
  'Inventory or supplies',
  'Equipment purchase',
  'Expansion or renovation',
  'Marketing',
  'Payroll',
  'Refinance existing debt',
  'Other',
] as const;

export const industryOptions = [
  'Restaurants & Food Service',
  'Automotive',
  'Construction',
  'Healthcare & Medical',
  'Retail',
  'Trucking & Logistics',
  'Beauty & Wellness',
  'Wholesale & Distribution',
  'Professional Services',
  'Manufacturing',
  'Other',
] as const;

export const timelineOptions = ['ASAP', 'This week', 'This month'] as const;

export const usStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
  'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming',
] as const;

export const AMOUNT_MIN = 5000;
export const AMOUNT_MAX = 500000;
export const AMOUNT_STEP = 5000;

export const applySchema = z.object({
  // Step 1 — Business
  legalName: z.string().trim().min(2, 'Enter your legal business name'),
  dba: z.string().trim().optional(),
  industry: z.string().min(1, 'Select an industry'),
  state: z.string().min(1, 'Select a state'),
  yearsInBusiness: z.string().min(1, 'Select an option'),
  monthlyRevenue: z.string().min(1, 'Select a revenue range'),

  // Step 2 — Owner
  fullName: z.string().trim().min(2, 'Enter your full name'),
  email: z.string().trim().email('Enter a valid email address'),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9()+\-.\s]{10,}$/, 'Enter a valid phone number'),
  dob: z.string().min(1, 'Enter your date of birth'),
  ssnLast4: z.string().regex(/^\d{4}$/, 'Enter the last 4 digits'),
  homeAddress: z.string().trim().min(3, 'Enter your home address'),
  city: z.string().trim().min(2, 'Enter your city'),
  zip: z.string().regex(/^\d{5}$/, 'Enter a 5-digit ZIP code'),

  // Step 3 — Funding need
  amount: z.number().min(AMOUNT_MIN).max(AMOUNT_MAX),
  useOfFunds: z.string().min(1, 'Select a use of funds'),
  timeline: z.enum(timelineOptions, { message: 'Choose a timeline' }),
  consent: z.boolean().refine((v) => v === true, {
    message: 'Please agree to be contacted to continue',
  }),
});

export type ApplyValues = z.infer<typeof applySchema>;

/** Field names grouped by step, used for per-step validation. */
export const stepFields: (keyof ApplyValues)[][] = [
  ['legalName', 'dba', 'industry', 'state', 'yearsInBusiness', 'monthlyRevenue'],
  ['fullName', 'email', 'phone', 'dob', 'ssnLast4', 'homeAddress', 'city', 'zip'],
  ['amount', 'useOfFunds', 'timeline', 'consent'],
];

export const steps = [
  { title: 'Business', subtitle: 'About your company' },
  { title: 'Owner', subtitle: 'About you' },
  { title: 'Funding', subtitle: 'What you need' },
] as const;

export function formatCurrency(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

/** Client-side reference number, e.g. MTP-2026-4F9K2A. */
export function generateReference() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let suffix = '';
  for (let i = 0; i < 6; i += 1) {
    suffix += chars[Math.floor(Math.random() * chars.length)];
  }
  return `MTP-2026-${suffix}`;
}

/**
 * Simulated application submission. No data leaves the browser today.
 * Swap the body for a real API/route-handler call later — the signature
 * can stay the same.
 */
export async function submitApplication(values: ApplyValues): Promise<{ reference: string }> {
  // For dev visibility only — not transmitted anywhere.
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.log('[Meridian] Application payload (not sent):', values);
  }
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return { reference: generateReference() };
}
