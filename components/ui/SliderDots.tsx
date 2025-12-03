interface SliderDotsProps {
  total: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}

export const SliderDots = ({
  total,
  activeIndex,
  onDotClick,
}: SliderDotsProps) => (
  <div className="flex gap-[16px]">
    {Array.from({ length: total }).map((_, index) => (
      <button
        key={index}
        onClick={() => onDotClick(index)}
        className={`w-[11px] h-[11px] rounded-full border border-[var(--accent-2)] transition-colors ${
          index === activeIndex
            ? 'bg-[var(--accent-2)]'
            : 'bg-black hover:bg-[var(--accent-2)]'
        }`}
        aria-label={`Слайд ${index + 1}`}
        aria-current={index === activeIndex}
      />
    ))}
  </div>
);
