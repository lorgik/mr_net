'use client';

import Link from 'next/link';
import { useState } from 'react';

interface ConsentCheckboxProps {
  required?: boolean;
  className?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  isSubmitted?: boolean;
}

export default function ConsentCheckbox({
  required = true,
  className = '',
  checked,
  onChange,
  isSubmitted = false,
}: ConsentCheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(false);

  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;
  const hasError = isSubmitted && !isChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;

    if (isControlled) {
      onChange?.(newValue);
    } else {
      setInternalChecked(newValue);
      onChange?.(newValue);
    }
  };

  const borderClass = hasError
    ? 'border-[var(--accent-1)]'
    : 'border-[var(--accent-2)]';
  const fillClass = isChecked ? 'bg-[var(--accent-2)]' : 'bg-black';

  return (
    <div className={`flex items-start gap-[9px] ${className}`}>
      <input
        type="checkbox"
        id="consent"
        name="consent"
        checked={isChecked}
        onChange={handleChange}
        required={required}
        className="sr-only"
      />

      <label
        htmlFor="consent"
        className={`relative w-[20px] h-[20px] border flex-shrink-0 cursor-pointer ${borderClass}`}
      >
        <span className={`absolute inset-[4px] transition ${fillClass}`} />
      </label>

      <label
        htmlFor="consent"
        className="text-[12px] text-[var(--neutral)] text-balance"
      >
        Я даю согласие на обработку моих персональных данных в форме обращения
        на странице сайта. Ознакомиться с условиями{' '}
        <Link
          href="/privacy-policy"
          className="underline hover:text-[var(--accent-2)] transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Политики обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН»
        </Link>
      </label>
    </div>
  );
}
