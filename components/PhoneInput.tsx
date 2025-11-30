"use client"

interface PhoneInputProps {
    value: string
    onChange: (value: string) => void
}

export default function PhoneInput({ value, onChange }: PhoneInputProps) {
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value
        const digits = input.replace(/\D/g, "")

        let phoneDigits = digits
        if (digits.startsWith("7") || digits.startsWith("8")) {
            phoneDigits = digits.substring(0, 11)
        } else {
            phoneDigits = digits.substring(0, 10)
        }

        if (phoneDigits.length === 0) {
            onChange("")
            return
        }

        let formattedPhone = "+7"

        if (phoneDigits.length > 1) {
            const mainDigits =
                phoneDigits.startsWith("7") || phoneDigits.startsWith("8") ? phoneDigits.substring(1) : phoneDigits

            if (mainDigits.length > 0) {
                formattedPhone += ` (${mainDigits.substring(0, 3)}`
            }
            if (mainDigits.length > 3) {
                formattedPhone += `) ${mainDigits.substring(3, 6)}`
            }
            if (mainDigits.length > 6) {
                formattedPhone += `-${mainDigits.substring(6, 8)}`
            }
            if (mainDigits.length > 8) {
                formattedPhone += `-${mainDigits.substring(8, 10)}`
            }
        }

        onChange(formattedPhone)
    }

    const isPhoneComplete = value.length === 18

    return (
        <input
            type="tel"
            name="phone"
            value={value}
            required
            onChange={handlePhoneChange}
            placeholder="Ваш телефон +7 (___)___-__-__ *"
            className="py-[12px] px-[24px] bg-black rounded-full border border-[var(--accent-2)] w-full"
            pattern="\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}"
            onInvalid={(e) => {
                if (!isPhoneComplete) {
                    e.currentTarget.setCustomValidity("Пожалуйста, введите полный номер телефона")
                }
            }}
            onInput={(e) => {
                e.currentTarget.setCustomValidity("")
            }}
        />
    )
}
