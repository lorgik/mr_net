'use client';

import Container from '@/components/Container';
import Title from '@/ui/Title';
import Button from '@/ui/Button';
import Image from 'next/image';
import { solutions } from '@/data/solutions';
import { SolutionCard } from '@/components/ui/SolutionCard';
import { CtaCard } from '@/components/ui/CtaCard';
import { useSlider } from '@/hooks/useSlider';
import { SliderNavigation } from '@/components/ui/SliderNavigation';
import { SliderTrack } from '@/components/ui/SliderTrack';

export default function SolutionSection() {
  const { activeIndex, nextSlide, prevSlide, goToSlide } = useSlider({
    totalSlides: solutions.benefits.length,
  });

  return (
    <section>
      <Container className="pt-[75px]">
        <Title className="max-w-[700px]">{solutions.title}</Title>

        <div className="mt-[34px]">
          {/* Слайдер для мобильных */}
          <div className="lg:hidden">
            <SliderTrack activeIndex={activeIndex}>
              {solutions.benefits.map((benefit) => (
                <div key={benefit.id} className="w-full flex-shrink-0 px-2">
                  <SolutionCard
                    title={benefit.title}
                    description={benefit.description}
                  />
                </div>
              ))}
            </SliderTrack>

            <SliderNavigation
              totalSlides={solutions.benefits.length}
              activeIndex={activeIndex}
              onPrev={prevSlide}
              onNext={nextSlide}
              onDotClick={goToSlide}
            />
          </div>

          {/* Оригинальная сетка для десктопа */}
          <div className="hidden lg:flex gap-[12px]">
            {solutions.benefits.map((benefit) => (
              <SolutionCard
                key={benefit.id}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-[12px] mt-[12px] max-lg:flex-col">
          <CtaCard
            title={solutions.cta.gradientTitle}
            description={solutions.cta.description}
          />

          <Image
            src={solutions.image.src}
            alt={solutions.image.alt}
            width={solutions.image.width}
            height={solutions.image.height}
            className="rounded-[8px] flex-1 max-xl:w-[486px] max-lg:w-full max-lg:order-first"
          />
        </div>

        <Button
          variant="gradient"
          href={solutions.cta.buttonHref}
          className="mt-[34px] mx-auto"
        >
          {solutions.cta.buttonText}
        </Button>
      </Container>
    </section>
  );
}
