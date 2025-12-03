import { ReactNode } from 'react';

interface SliderTrackProps {
  children: ReactNode;
  activeIndex: number;
}

export const SliderTrack = ({ children, activeIndex }: SliderTrackProps) => (
  <div className="overflow-hidden">
    <div
      className="flex transition-transform duration-300 ease-in-out"
      style={{
        transform: `translateX(-${activeIndex * 100}%)`,
      }}
    >
      {children}
    </div>
  </div>
);
