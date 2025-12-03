interface BackgroundImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

export const BackgroundImage = ({
  src = '/main-bg.jpg',
  alt = 'Иллюстрация беспроводного интернета для бизнеса',
  className = '',
}: BackgroundImageProps) => (
  <div
    className={`flex-[563] bg-no-repeat bg-center bg-cover w-full rounded-[8px] min-h-[370px] max-md:min-h-[270px] max-lg:order-first ${className}`}
    style={{ backgroundImage: `url(${src})` }}
    role="img"
    aria-label={alt}
  />
);
