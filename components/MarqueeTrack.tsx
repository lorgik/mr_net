import Image from 'next/image';

interface MarqueeTrackProps {
  items: Array<{
    id: number;
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
}

export const MarqueeTrack = ({ items }: MarqueeTrackProps) => {
  return (
    <div className="flex animate-marquee whitespace-nowrap gap-[20px]">
      {items.map((item) => (
        <div
          key={`${item.id}-1`}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="object-contain"
            loading="lazy"
          />
        </div>
      ))}
      {items.map((item) => (
        <div
          key={`${item.id}-2`}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};
