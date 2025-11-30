import Image from "next/image"
import Container from "../Container"
import Button from "../../ui/Button"
import Link from "next/link"

export default function Banner() {
    const list = [
        "Мультироутер с технологией суммирования нескольких каналов связи в один",
        "Высокая скорость и отказоустойчивость интернет-соединения",
        "Единый договор на ПО, оборудование и связь",
        "Простое подключение за 7 минут",
        "Моментальная техподдержка 24/7 в Telegram",
    ]

    return (
        <div className="flex gap-[12px] max-lg:flex-col">
            <div className="flex flex-col gap-[20px] flex-[793] rounded-[8px] bg-gradient-1 border border-[var(--accent-1)] p-[20px]">
                <h1 className="text-[50px] max-sm:text-[35px]">Беспроводной интернет для бизнеса</h1>
                <p className="text-[26px] text-balance uppercase">
                    от <span className="font-medium">2 990</span> рублей* в месяц! Установка по любому адресу в РФ!
                </p>
                <Button href="#contact" className="my-[20px]">
                    попробовать
                </Button>
                <ul className="text-[18px] pl-[15px]">
                    {list.map((text, i) => (
                        <li key={i} className="list-disc">
                            {text}
                        </li>
                    ))}
                </ul>
                <p className="text-[12px] text-balance text-[var(--neutral)]">
                    * Без учета стоимости оборудования, возможен выкуп оборудования или аренда, стоимость будет зависеть
                    от модели мультироутера
                </p>
            </div>
            <div className="flex-[563] bg-[url(/main-bg.jpg)] bg-no-repeat bg-center bg-cover w-full rounded-[8px] min-h-[370px] max-md:min-h-[270px] max-lg:order-first"></div>
        </div>
    )
}
