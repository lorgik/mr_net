interface CtaCardProps {
  title: string;
  description: string;
  brandName?: string;
  className?: string;
}

export const CtaCard = ({
  title,
  description,
  brandName = 'mrnet',
  className = '',
}: CtaCardProps) => {
  const parts = description.split(brandName);

  return (
    <div
      className={`flex flex-col gap-[24px] justify-between bg-gradient-3 text-black rounded-[8px] p-[20px] flex-1 ${className}`}
    >
      <p className="text-[45px] font-medium uppercase text-balance max-sm:text-[35px]">
        {title}
      </p>
      <p className="text-[24px]">
        {parts.map((part, index) => (
          <span key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="font-medium">{brandName}</span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
};
