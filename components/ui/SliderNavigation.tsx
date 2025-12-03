import { ArrowLeft } from '@/icons/ArrowLeft';
import { ArrowRight } from '@/icons/ArrowRight';

interface SliderNavigationProps {
  totalSlides: number;
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
  className?: string;
}

export const SliderNavigation = ({
  totalSlides,
  activeIndex,
  onPrev,
  onNext,
  onDotClick,
  className,
}: SliderNavigationProps) => (
  <div className={`flex justify-between items-center ${className}`}>
    <button
      onClick={onPrev}
      className="flex justify-center items-center border border-[var(--accent-2)] rounded-full w-[52px] h-[52px]"
      aria-label="Предыдущий слайд"
    >
      <ArrowLeft />
    </button>

    <div className="flex gap-[16px]">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-[11px] h-[11px] rounded-full border border-[var(--accent-2)] ${
            index === activeIndex ? 'bg-[var(--accent-2)]' : 'bg-black'
          }`}
          aria-label={`Слайд ${index + 1}`}
        />
      ))}
    </div>

    <button
      onClick={onNext}
      className="flex justify-center items-center border border-[var(--accent-2)] rounded-full w-[52px] h-[52px]"
      aria-label="Следующий слайд"
    >
      <ArrowRight />
    </button>
  </div>
);
