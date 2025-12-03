import { ArrowLeft } from '@/icons/ArrowLeft';
import { ArrowRight } from '@/icons/ArrowRight';

interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

export const SliderControls = ({
  onPrev,
  onNext,
  className = '',
}: SliderControlsProps) => (
  <div className={`flex justify-between items-center mt-4 ${className}`}>
    <button
      onClick={onPrev}
      className="flex justify-center items-center border border-[var(--accent-2)] rounded-full w-[52px] h-[52px] hover:bg-[var(--accent-2)] transition-colors"
      aria-label="Предыдущий слайд"
    >
      <ArrowLeft />
    </button>

    <button
      onClick={onNext}
      className="flex justify-center items-center border border-[var(--accent-2)] rounded-full w-[52px] h-[52px] hover:bg-[var(--accent-2)] transition-colors"
      aria-label="Следующий слайд"
    >
      <ArrowRight />
    </button>
  </div>
);
