interface PriceDisplayProps {
  amount: string;
  note: string;
}

export const PriceDisplay = ({ amount, note }: PriceDisplayProps) => (
  <>
    <p className="text-[26px] text-balance uppercase">
      от <span className="font-medium">{amount}</span> рублей* в месяц!
      Установка по любому адресу в РФ!
    </p>
    <p className="text-[12px] text-balance text-[var(--neutral)]">{note}</p>
  </>
);
