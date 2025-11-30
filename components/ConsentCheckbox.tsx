"use client"

import { useState } from "react"

interface ConsentCheckboxProps {
    required?: boolean
    className?: string
}

export default function ConsentCheckbox({ required = true, className = "" }: ConsentCheckboxProps) {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked)
    }

    return (
        <div className={`flex items-start gap-[9px] ${className}`}>
            <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={isChecked}
                onChange={handleCheckboxChange}
                required={required}
                className="sr-only"
            />
            <label
                htmlFor="consent"
                className={"relative flex-shrink-0 w-[20px] h-[20px] border-1 border-[var(--accent-2)] cursor-pointer"}
            >
                <span
                    className={`absolute inset-[4px] transition ${isChecked ? "bg-[var(--accent-2)]" : "bg-blacks"}`}
                ></span>
            </label>

            <label htmlFor="consent" className="text-[12px] text-[var(--neutral)] text-balance">
                Я даю согласие на обработку моих персональных данных в форме обращения на странице сайта. Ознакомиться с
                условиями{" "}
                <a
                    href="/privacy-policy"
                    className="underline transition hover:text-[var(--accent-2)]"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Политики обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН»
                </a>
            </label>
        </div>
    )
}
