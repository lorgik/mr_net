export function formatPhone(input: string): string {
  const digits = input.replace(/\D/g, '');

  let phoneDigits = digits;
  if (digits.startsWith('7') || digits.startsWith('8')) {
    phoneDigits = digits.substring(0, 11);
  } else {
    phoneDigits = digits.substring(0, 10);
  }

  if (phoneDigits.length === 0) return '';

  let formatted = '+7';
  const mainDigits =
    phoneDigits.startsWith('7') || phoneDigits.startsWith('8')
      ? phoneDigits.substring(1)
      : phoneDigits;

  if (mainDigits.length > 0) formatted += ` (${mainDigits.substring(0, 3)}`;
  if (mainDigits.length > 3) formatted += `) ${mainDigits.substring(3, 6)}`;
  if (mainDigits.length > 6) formatted += `-${mainDigits.substring(6, 8)}`;
  if (mainDigits.length > 8) formatted += `-${mainDigits.substring(8, 10)}`;

  return formatted;
}
