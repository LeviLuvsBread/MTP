import type { Metadata } from 'next';
import Image from 'next/image';
import { Compass, Scale, Handshake } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { PageHero } from '@/components/ui/PageHero';
import { FadeUp } from '@/components/motion/FadeUp';
import { ImageReveal } from '@/components/motion/ImageReveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { CtaApply } from '@/components/sections/CtaApply';
import { JsonLd } from '@/components/JsonLd';
import { financialServiceSchema } from '@/lib/schema';
import { unsplash, images, values, leadership } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meridian Trust Partners is a capital partner for U.S. businesses — built on direction, discipline, and trust.',
};

const valueIcons = [Compass, Scale, Handshake];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={financialServiceSchema} />
      <PageHero
        eyebrow="About Meridian"
        title="Built for the businesses that build everything else"
        subtitle="We’re a capital partner for the operators who keep their communities running — and we measure ourselves by whether they come back."
        image={images.aboutHero}
      />

      {/* Story */}
      <Section background="ivory">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ImageReveal className="order-last rounded-card p-1.5 ring-1 ring-meridian-gold/40 lg:order-first">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[12px]">
              <Image
                src={unsplash(images.aboutStory, { w: 1400 })}
                alt="The Meridian Trust Partners team in conversation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ImageReveal>

          <FadeUp className="flex flex-col gap-5">
            <Eyebrow>Our story</Eyebrow>
            <Heading size="lg">A steadier kind of capital partner</Heading>
            <div className="flex flex-col gap-4 text-lg leading-relaxed text-meridian-steel">
              <p>
                Meridian Trust Partners was founded on a simple frustration: too many good businesses
                were handed confusing terms, slow answers, and capital that didn’t fit how they
                actually earn. We set out to do the opposite.
              </p>
              <p>
                We pair experienced underwriting with a network of capital sources, so we can move
                quickly without cutting corners. Every offer is explained in plain language, with the
                full cost on the table before anyone signs.
              </p>
              <p>
                The name is the promise. A meridian is a line you navigate by — and that’s the role
                we want to play for the businesses we fund: a fixed point of trust as they move
                toward what’s next.
              </p>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* Values */}
      <Section
        background="white"
        align="center"
        eyebrow="What we stand for"
        title="Three principles, on every deal"
        intro="They’re not posters on a wall. They’re how we decide who to fund, and how."
      >
        <Stagger gap={0.1} className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {values.map((value, i) => {
            const Icon = valueIcons[i];
            return (
              <StaggerItem key={value.title} className="h-full">
                <div className="flex h-full flex-col rounded-card border border-meridian-platinum/50 bg-white p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-[10px] bg-meridian-navy/5 text-meridian-gold">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <Heading as="h3" size="sm" className="mt-6 lg:text-xl">
                    {value.title}
                  </Heading>
                  <p className="mt-3 leading-relaxed text-meridian-steel">{value.copy}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* Leadership */}
      <Section
        background="ivory"
        eyebrow="Leadership"
        title="The people behind the partnership"
        intro="A team with decades in commercial credit, structured finance, and small-business advisory."
      >
        <Stagger gap={0.08} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((leader) => (
            <StaggerItem key={leader.name}>
              <figure className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-card">
                  <Image
                    src={unsplash(leader.image, { w: 700 })}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-cover transition-transform duration-700 ease-meridian group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-meridian-midnight/40 to-transparent" />
                </div>
                <figcaption className="mt-4">
                  <p className="font-display text-lg font-semibold text-meridian-navy">
                    {leader.name}
                  </p>
                  <p className="text-sm font-medium text-meridian-gold">{leader.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-meridian-steel">{leader.bio}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        <Container className="px-0">
          <p className="mt-12 text-center text-xs text-meridian-steel">
            Leadership profiles are representative placeholders for demonstration.
          </p>
        </Container>
      </Section>

      <CtaApply />
    </>
  );
}
