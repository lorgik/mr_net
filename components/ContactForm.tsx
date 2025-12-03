'use client';

import { useState } from 'react';
import ConsentCheckbox from './ConsentCheckbox';
import PhoneInput from './PhoneInput';
import Button from '@/ui/Button';
import NameInput from './NameInput';

const validation = {
  phoneLength: 18,
  messages: {
    nameRequired: 'Пожалуйста, введите имя',
    phoneRequired: 'Пожалуйста, введите полный номер телефона',
    consentRequired: 'Необходимо дать согласие',
  },
} as const;

const ErrorMessage = ({ message }: { message: string }) => (
  <div className="text-[var(--accent-1)] text-[14px] ml-[24px]">{message}</div>
);

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [tg, setTg] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);

  const isNameValid = name.trim() !== '';
  const isPhoneValid = phone.length === validation.phoneLength;
  const isFormValid = isNameValid && isPhoneValid && consentChecked;

  const showNameError = isSubmitted && !isNameValid;
  const showPhoneError = isSubmitted && !isPhoneValid;
  const showConsentError = isSubmitted && !consentChecked;

  const resetForm = () => {
    setName('');
    setPhone('');
    setTg('');
    setConsentChecked(false);
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!isFormValid) return;

    setIsSuccess(true);
    onSuccess?.();
    resetForm();
  };

  const handleTgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTg(e.target.value);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 min-h-[400px]">
        <div className="text-[24px] font-medium mb-4">Спасибо за заявку!</div>
        <p className="text-[18px] text-[var(--neutral)]">
          Наши менеджеры уже взяли её в работу и скоро свяжутся с вами.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-[12px] mt-[20px] text-[18px]"
      onSubmit={handleSubmit}
      noValidate
    >
      <NameInput value={name} onChange={setName} isSubmitted={isSubmitted} />
      {showNameError && (
        <ErrorMessage message={validation.messages.nameRequired} />
      )}

      <label className="ml-[24px] my-[4px]" htmlFor="tg">
        Оставьте ваши контакты
      </label>

      <PhoneInput value={phone} onChange={setPhone} isSubmitted={isSubmitted} />
      {showPhoneError && (
        <ErrorMessage message={validation.messages.phoneRequired} />
      )}

      <input
        type="text"
        name="tg"
        value={tg}
        onChange={handleTgChange}
        placeholder="Ваш ник в tg"
        className="w-full px-[24px] py-[12px] bg-black rounded-full border border-[var(--accent-2)] focus:outline-none focus:border-[var(--accent-2)]"
      />

      <ConsentCheckbox
        required
        checked={consentChecked}
        onChange={setConsentChecked}
        isSubmitted={isSubmitted}
      />
      {showConsentError && (
        <ErrorMessage message={validation.messages.consentRequired} />
      )}

      <span className="text-[var(--neutral)] text-[12px]">
        * Поля, обязательные для заполнения
      </span>

      <Button type="submit" variant="gradient" className="mt-[12px]">
        Начать!
      </Button>
    </form>
  );
}
