# Meridian Trust Partners — Website

Institutional, premium marketing site for **Meridian Trust Partners** (business funding).
Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Radix UI.

> **Demo note:** The Apply and Contact forms are **UI-only**. They validate, show realistic
> loading and success states, and `console.log` their payload for development — but **no data is
> transmitted or stored**. Both are structured so a real backend can be dropped in later (see
> [`lib/apply.ts`](lib/apply.ts) → `submitApplication()`).

---

## Quick start

```bash
npm install
npm run dev       # http://localhost:3000
```

Other scripts:

```bash
npm run build     # production build
npm run start     # serve the production build
npm run lint      # eslint
```

Requires Node 18.18+ (developed on Node 20+).

---

## Project structure

```
app/                     Routes (App Router)
  layout.tsx             Fonts, metadata, nav, footer, motion provider
  page.tsx               Home (long scroll, deep-linked sections)
  about/ contact/ apply/ Sub-pages
  legal/privacy/ terms/  Legal (server-only, attorney-review banner)
  opengraph-image.tsx    Dynamic OG image (next/og)
  icon.svg apple-icon.tsx Favicons
  sitemap.ts robots.ts   SEO
  not-found.tsx          Branded 404
components/
  ui/                    Button, Field, Select, Stepper, cards, carousel…
  sections/              Hero, Products, Stats, Testimonials, FAQ…
  motion/                FadeUp, Stagger, ImageReveal, MotionProvider
  apply/ contact/ legal/ Feature components
lib/
  site.ts                All site content + verified Unsplash imagery
  apply.ts               Apply schema (zod), options, simulated submit
  schema.ts              FinancialService JSON-LD
  motion.ts  cn.ts       Shared variants + classname helper
tailwind.config.ts       Brand tokens (colors, fonts, shadows, keyframes)
```

## Editing content

Almost all copy and imagery lives in [`lib/site.ts`](lib/site.ts): tagline, products, industries,
stats, testimonials, FAQ, leadership, contact details, and the photo IDs. Images are served from
Unsplash via `next/image` (configured in [`next.config.mjs`](next.config.mjs)). To use your own
photos, drop them in `public/` and swap the `unsplash(...)` calls for local `/your-image.jpg` paths.

## Brand tokens

Colors, fonts, radii, and shadows are defined once in
[`tailwind.config.ts`](tailwind.config.ts) and [`styles/tokens.css`](styles/tokens.css):
Navy `#0B1E3F` · Midnight `#06122A` · Gold `#B8924A` · Platinum `#C8CED6` · Ivory `#F7F8FA`.
Display type is Playfair Display; UI type is Inter (both via `next/font`).

---

## Deploying

### Recommended: Vercel (domain at Namecheap)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — zero config; Vercel detects Next.js.
3. In Vercel → **Project → Settings → Environment Variables**, no variables are required for v1.
4. Buy the domain at Namecheap, then in **Vercel → Domains** add `meridiantrustpartners.com`
   and follow Vercel's DNS instructions (either set Namecheap nameservers to Vercel's, or add the
   A/CNAME records Vercel provides). SSL provisions automatically.
5. Update `siteConfig.url` in [`lib/site.ts`](lib/site.ts) to the final domain so OG tags,
   canonical URLs, sitemap, and robots resolve correctly.

> Namecheap **shared cPanel hosting cannot run Next.js** (no Node SSR). If you must host there,
> switch to a static export (`output: 'export'` in `next.config.mjs`, set `images.unoptimized`),
> then upload `out/` to `public_html`. You lose image optimization and dynamic OG. Vercel is the
> better path in every measurable way.

### Wiring up the forms later

Replace the body of `submitApplication()` in [`lib/apply.ts`](lib/apply.ts) and the `onSubmit`
in [`components/contact/ContactForm.tsx`](components/contact/ContactForm.tsx) with a call to a
Next.js route handler (e.g. an [Resend](https://resend.com) email send). The function signatures
can stay the same.

---

## Before launch (content + legal checklist)

- [ ] Real stats, or keep them clearly labeled "illustrative" (current state)
- [ ] Real testimonials + first names + business types
- [ ] Final phone, email, hours, address in `lib/site.ts`
- [ ] Replace placeholder leadership bios/photos
- [ ] **Attorney review** of `/legal/privacy` and `/legal/terms` (both carry a review banner)
- [ ] Confirm all financing claims with counsel — never advertise "guaranteed approval"
```
