import { useState, useEffect, useRef } from 'react';

interface UseSliderWidthProps {
  gap?: number;
}

export const useSliderWidth = ({ gap = 12 }: UseSliderWidthProps = {}) => {
  const [slideWidth, setSlideWidth] = useState(563);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSlideWidth = () => {
      if (slidesRef.current?.children.length) {
        const firstSlide = slidesRef.current.children[0] as HTMLElement;
        const newWidth = firstSlide.offsetWidth;
        setSlideWidth(newWidth);
      }
    };

    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);

    return () => {
      window.removeEventListener('resize', updateSlideWidth);
    };
  }, []);

  const calculateTransform = (activeIndex: number) =>
    `translateX(-${activeIndex * (slideWidth + gap)}px)`;

  return { slideWidth, slidesRef, calculateTransform };
};
