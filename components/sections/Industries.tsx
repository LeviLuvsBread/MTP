import { Section } from '@/components/ui/Section';
import { IndustryTile } from '@/components/ui/IndustryTile';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { scaleIn } from '@/lib/motion';
import { industries } from '@/lib/site';

export function Industries() {
  return (
    <Section
      id="industries"
      background="white"
      eyebrow="Industries we serve"
      title="Built for the businesses that build everything else"
      intro="From the corner restaurant to the regional fleet, we fund the operators who keep their communities moving."
    >
      <Stagger gap={0.07} className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {industries.map((industry) => (
          <StaggerItem key={industry.name} variants={scaleIn}>
            <IndustryTile industry={industry} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
