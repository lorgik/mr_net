'use client';

import FeatureCard from './FeatureCard';
import { features } from '@/data/features';
import { useSlider } from '@/hooks/useSlider';
import { SliderNavigation } from '@/components/ui/SliderNavigation';
import { SliderTrack } from '@/components/ui/SliderTrack';

export default function FeatureGrid() {
  const { activeIndex, nextSlide, prevSlide, goToSlide } = useSlider({
    totalSlides: features.length,
  });

  return (
    <div>
      {/* Слайдер для мобильных */}
      <div className="lg:hidden">
        <SliderTrack activeIndex={activeIndex}>
          {features.map((feature) => (
            <div key={feature.id} className="w-full flex-shrink-0 px-2">
              <FeatureCard {...feature} />
            </div>
          ))}
        </SliderTrack>

        <SliderNavigation
          totalSlides={features.length}
          activeIndex={activeIndex}
          onPrev={prevSlide}
          onNext={nextSlide}
          onDotClick={goToSlide}
        />
      </div>

      {/* Оригинальная сетка для десктопа */}
      <div className="hidden lg:flex gap-[12px] uppercase text-balance text-[20px]">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </div>
  );
}
