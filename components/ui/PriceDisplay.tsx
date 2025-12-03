interface PriceDisplayProps {
  amount: string;
}

export const PriceDisplay = ({ amount }: PriceDisplayProps) => (
  <p className="text-[26px] text-balance uppercase">
    от <span className="font-medium">{amount}</span> рублей* в месяц! Установка
    по любому адресу в РФ!
  </p>
);
