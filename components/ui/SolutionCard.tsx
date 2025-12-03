interface SolutionCardProps {
  title: string;
  description: string;
  className?: string;
}

export const SolutionCard = ({
  title,
  description,
  className = '',
}: SolutionCardProps) => (
  <div
    className={`flex flex-col flex-1 justify-between gap-[24px] bg-gradient-1 rounded-[8px] border border-[var(--accent-1)] p-[20px] min-h-[308px] ${className}`}
  >
    <h3 className="text-[26px]">{title}</h3>
    <p className="text-[18px] whitespace-pre-line">{description}</p>
  </div>
);
