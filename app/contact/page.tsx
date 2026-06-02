import type { Metadata } from 'next';
import { Mail, Clock, MapPin } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/ui/PageHero';
import { FadeUp } from '@/components/motion/FadeUp';
import { ContactForm } from '@/components/contact/ContactForm';
import { images, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Talk to a Meridian Trust Partners funding advisor. Call, email, or send a message — we typically respond within one business day.',
};

const methods = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: siteConfig.emailHref,
    detail: 'We reply within one business day',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: siteConfig.hours,
    detail: 'Closed on federal holidays',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
    detail: 'By appointment',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your business"
        subtitle="Whether you’re ready to apply or just weighing options, a Meridian advisor is happy to help — no pressure, no obligation."
        image={images.contact}
      />

      <Section background="ivory">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Contact methods */}
          <FadeUp className="flex flex-col gap-8">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {methods.map(({ icon: Icon, label, value, href, detail }) => (
                <li key={label} className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-btn bg-meridian-navy/5 text-meridian-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-eyebrow uppercase text-meridian-steel">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block font-medium text-meridian-navy transition-colors hover:text-meridian-gold"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium text-meridian-navy">{value}</p>
                    )}
                    <p className="text-sm text-meridian-steel">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Map */}
            <div className="overflow-hidden rounded-card border border-meridian-platinum/50 shadow-elevated">
              <iframe
                title="Meridian Trust Partners office location"
                src="https://www.google.com/maps?q=48+Wall+Street,+New+York,+NY+10005&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full grayscale-[0.2]"
              />
            </div>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={0.1}>
            <ContactForm />
          </FadeUp>
        </div>
      </Section>
    </>
  );
}
