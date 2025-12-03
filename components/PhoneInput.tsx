'use client';

import { formatPhone } from '@/utils/formatPhone';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  isSubmitted?: boolean;
}

export default function PhoneInput({
  value,
  onChange,
  isSubmitted = false,
}: PhoneInputProps) {
  const isPhoneComplete = value.length === 18;
  const hasError = isSubmitted && !isPhoneComplete;
  const borderClass = hasError
    ? 'border-[var(--accent-1)]'
    : 'border-[var(--accent-2)]';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(formatPhone(e.target.value));
  };

  return (
    <input
      type="tel"
      name="phone"
      value={value}
      required
      onChange={handleChange}
      placeholder="Ваш телефон +7 (___)___-__-__ *"
      className={`
                w-full
                px-[24px] py-[12px]
                bg-black rounded-full border
                transition-colors duration-200
                ${borderClass}
                focus:outline-none focus:border-[var(--accent-2)]
            `}
    />
  );
}
