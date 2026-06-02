import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { LogoMark } from '@/components/LogoMark';

export default function NotFound() {
  return (
    <div className="navy-texture grain relative flex min-h-dvh items-center overflow-hidden">
      <Container className="relative py-32 text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center">
          <LogoMark className="h-12 w-12 text-meridian-platinum" />
          <p className="mt-8 font-display text-7xl font-semibold text-meridian-gold sm:text-8xl">404</p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            This page is off the map
          </h1>
          <p className="mt-4 leading-relaxed text-meridian-platinum/85">
            The page you’re looking for doesn’t exist or may have moved. Let’s get you back on course.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/" variant="primary" size="lg">
              Back to home
            </Button>
            <Button href="/contact" variant="ghostLight" size="lg">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
