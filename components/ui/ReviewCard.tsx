import Image from 'next/image';

interface ReviewCardProps {
  client: string;
  name: string;
  position: string;
  department: string;
  text: string;
  className?: string;
}

export const ReviewCard = ({
  client,
  name,
  position,
  department,
  text,
  className = '',
}: ReviewCardProps) => (
  <div
    className={`w-full max-w-[90vw] sm:max-w-[90vw] md:max-w-[600px] lg:max-w-[563px] h-[360px] bg-gradient-2 rounded-[8px] p-[20px] text-white border border-[var(--accent-2)] flex flex-col gap-[24px] justify-between overflow-hidden ${className}`}
  >
    <div className="flex justify-between gap-[24px] items-start mb-[12px] text-[14px]">
      <div className="text-[var(--accent-2)]">
        <h3 className="font-medium">{client}</h3>
        <p>{name}</p>
      </div>
      <div>
        <p>{position}</p>
        <p>{department}</p>
      </div>
    </div>

    <p className="text-[16px] overflow-hidden overflow-ellipsis line-clamp-6">
      {text}
    </p>

    <div className="mt-auto flex justify-end">
      <Image src="/arrow-down.svg" alt="Стрелка вниз" width={20} height={20} />
    </div>
  </div>
);
