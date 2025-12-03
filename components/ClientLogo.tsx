import Image from 'next/image';

interface ClientLogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const ClientLogo = ({ src, alt, width, height }: ClientLogoProps) => (
  <div className="flex-shrink-0 flex items-center justify-center h-[60px]">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="object-contain"
      loading="lazy"
    />
  </div>
);
