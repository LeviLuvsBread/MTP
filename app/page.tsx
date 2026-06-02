import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { WhatWeDo } from '@/components/sections/WhatWeDo';
import { Products } from '@/components/sections/Products';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Industries } from '@/components/sections/Industries';
import { Stats } from '@/components/sections/Stats';
import { Testimonials } from '@/components/sections/Testimonials';
import { Faq } from '@/components/sections/Faq';
import { CtaApply } from '@/components/sections/CtaApply';
import { JsonLd } from '@/components/JsonLd';
import { financialServiceSchema } from '@/lib/schema';

export default function HomePage() {
  return (
    <>
      <JsonLd data={financialServiceSchema} />
      <Hero />
      <TrustBar />
      <WhatWeDo />
      <Products />
      <HowItWorks />
      <Industries />
      <Stats />
      <Testimonials />
      <Faq />
      <CtaApply />
    </>
  );
}
