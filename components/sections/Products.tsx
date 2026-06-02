import { Section } from '@/components/ui/Section';
import { ProductCard } from '@/components/ui/ProductCard';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { products } from '@/lib/site';

export function Products() {
  return (
    <Section
      id="products"
      background="white"
      eyebrow="What we offer"
      title="Funding shaped to your business"
      intro="Three flexible products, one disciplined approach. Your advisor helps you choose the structure that fits how your business actually earns."
    >
      <Stagger gap={0.09} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <StaggerItem key={product.title} className="h-full">
            <ProductCard product={product} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
