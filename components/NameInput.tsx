interface NameInputProps {
    value: string
    onChange: (value: string) => void
    isSubmitted: boolean
}

export default function NameInput({ value, onChange, isSubmitted }: NameInputProps) {
    const hasError = isSubmitted && !value.trim()
    const borderClass = hasError ? "border-[var(--accent-1)]" : "border-[var(--accent-2)]"

    return (
        <input
            type="text"
            name="name"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Ваше имя *"
            className={`
                w-full
                px-[24px] py-[12px]
                bg-black rounded-full border
                transition-colors duration-200
                ${borderClass}
                focus:outline-none focus:border-[var(--accent-2)]
            `}
            required
        />
    )
}
