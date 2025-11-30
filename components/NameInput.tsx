interface NameInputProps {
    value: string
    onChange: (value: string) => void
}

export default function NameInput({ value, onChange }: NameInputProps) {
    return (
        <input
            type="text"
            name="name"
            value={value}
            onChange={(e) => {
                onChange(e.target.value)
                e.target.setCustomValidity("")
            }}
            placeholder="Ваше имя *"
            className="py-[12px] px-[24px] bg-black rounded-full border border-[var(--accent-2)] w-full"
            required
            onInvalid={(e) => {
                e.currentTarget.setCustomValidity("Пожалуйста, введите имя")
            }}
        />
    )
}
