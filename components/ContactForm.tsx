"use client"

import { useState } from "react"
import ConsentCheckbox from "./ConsentCheckbox"
import PhoneInput from "./PhoneInput"
import Button from "@/ui/Button"
import NameInput from "./NameInput"

export default function ContactForm() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [tg, setTg] = useState("")

    return (
        <form action="" className="flex flex-col gap-[12px] mt-[20px] text-[18px]">
            <NameInput value={name} onChange={setName} />
            <label className="pl-[24px] my-[4px]" htmlFor="tg">
                Оставьте ваши контакты
            </label>
            <PhoneInput value={phone} onChange={setPhone} />
            <input
                type="text"
                name="tg"
                value={tg}
                onChange={(e) => setTg(e.target.value)}
                placeholder="Ваш ник в tg"
                className="py-[12px] px-[24px] bg-black rounded-full border border-[var(--accent-2)] w-full"
            />
            <ConsentCheckbox required={true} />
            <span className="text-[var(--neutral)] text-[12px]">* Поля, обязательные для заполнения</span>
            <Button href="#" variant="gradient" className="mt-[12px]">
                Начать!
            </Button>
        </form>
    )
}
