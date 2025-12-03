'use client';

import { reviews } from '@/data/reviews';
import { useSlider } from '@/hooks/useSlider';
import { useSliderWidth } from '@/hooks/useSliderWidth';
import { ReviewCard } from '@/components/ui/ReviewCard';
import { SliderNavigation } from '@/components/ui/SliderNavigation';

export default function ReviewsSlider() {
  const { activeIndex, nextSlide, prevSlide, goToSlide } = useSlider({
    totalSlides: reviews.length,
  });

  const { slidesRef, calculateTransform } = useSliderWidth();

  return (
    <div className="relative mt-[34px]">
      <div
        ref={slidesRef}
        className="flex gap-[12px] transition-transform duration-500 ease-in-out"
        style={{
          transform: calculateTransform(activeIndex),
        }}
      >
        {reviews.map((review) => (
          <div key={review.id} className="flex-shrink-0">
            <ReviewCard {...review} />
          </div>
        ))}
      </div>

      <SliderNavigation
        totalSlides={reviews.length}
        activeIndex={activeIndex}
        onPrev={prevSlide}
        onNext={nextSlide}
        onDotClick={goToSlide}
        className="mt-[34px]"
      />
    </div>
  );
}
