import { useState } from 'react';

interface UseSliderProps {
  totalSlides: number;
  initialIndex?: number;
}

export const useSlider = ({
  totalSlides,
  initialIndex = 0,
}: UseSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return {
    activeIndex,
    nextSlide,
    prevSlide,
    goToSlide,
  };
};
