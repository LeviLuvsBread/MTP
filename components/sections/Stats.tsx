import { Container } from '@/components/ui/Container';
import { StatCounter } from '@/components/ui/StatCounter';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { FadeUp } from '@/components/motion/FadeUp';
import { stats } from '@/lib/site';

export function Stats() {
  return (
    <section id="stats" className="grain navy-texture relative overflow-hidden py-20 md:py-28">
      <Container className="relative">
        <Stagger
          gap={0.1}
          className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-8"
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <StatCounter stat={stat} />
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp className="mt-14 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-lg leading-relaxed text-meridian-platinum/85">
            Figures are illustrative of the scale Meridian Trust Partners is built to serve. Actual
            amounts, timelines, and terms depend on your business and are confirmed in writing before
            you commit.
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}
