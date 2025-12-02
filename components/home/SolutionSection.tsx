"use client"

import Container from "@/components/Container"
import Title from "@/ui/Title"
import Button from "@/ui/Button"
import Image from "next/image"
import { useState } from "react"
import { ArrowLeft } from "@/icons/ArrowLeft"
import { ArrowRight } from "@/icons/ArrowRight"

export default function SolutionSection() {
    const benefits = [
        {
            id: 1,
            title: "Ценим ваше время",
            text: "Подключите мультироутер с быстрым интернетом всего за 7 минут. Наши устройства работают по принципу Plug'n'Play (подключи и пользуйся). \n\nВы получаете надёжную связь и отсутствие головной боли в виде договоров с разными провайдерами",
        },
        {
            id: 2,
            title: "Безграничные Возможности",
            text: "Подберём оборудование для новых точек и оперативно подключим к интернету по любому адресу.\n\nВсё это — без необходимости заключения дополнительных контрактов",
        },
        {
            id: 3,
            title: "Индивидуальный подход",
            text: "Мы всегда идем навстречу клиенту, предлагая оптимальное по стоимости решение.\n\nЗаполните заявку, и в рабочее время мы за 1 час сделаем расчёт",
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0)

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % benefits.length)
    }

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + benefits.length) % benefits.length)
    }

    return (
        <section>
            <Container className="pt-[75px]">
                <Title className="max-w-[700px]">Решение, созданное айтишниками для айтишников</Title>
                <div className="mt-[34px]">
                    {/* Слайдер для мобильных */}
                    <div className="lg:hidden">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{
                                    transform: `translateX(-${activeIndex * 100}%)`,
                                }}
                            >
                                {benefits.map((benefit) => (
                                    <div key={benefit.id} className="w-full flex-shrink-0 px-2">
                                        <div className="flex flex-col justify-between gap-[24px] bg-gradient-1 rounded-[8px] border border-[var(--accent-1)] p-[20px] min-h-[308px]">
                                            <h3 className="text-[26px]">{benefit.title}</h3>
                                            <p className="text-[18px] whitespace-pre-line">{benefit.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Навигация для слайдера */}
                        <div className="flex justify-between items-center mt-4">
                            <button
                                onClick={prevSlide}
                                className="flex justify-center items-center border border-[var(--accent-2)] rounded-full w-[52px] h-[52px]"
                                aria-label="Предыдущий слайд"
                            >
                                <ArrowLeft />
                            </button>

                            <div className="flex gap-[16px]">
                                {benefits.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`w-[11px] h-[11px] rounded-full border border-[var(--accent-2)] ${
                                            index === activeIndex ? "bg-[var(--accent-2)]" : "bg-black"
                                        }`}
                                        aria-label={`Слайд ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="flex justify-center items-center border border-[var(--accent-2)] rounded-full w-[52px] h-[52px]"
                                aria-label="Следующий слайд"
                            >
                                <ArrowRight />
                            </button>
                        </div>
                    </div>

                    {/* Оригинальная сетка для десктопа */}
                    <div className="hidden lg:flex gap-[12px]">
                        {benefits.map((benefit) => (
                            <div
                                key={benefit.id}
                                className="flex flex-col justify-between gap-[24px] flex-1 bg-gradient-1 rounded-[8px] border border-[var(--accent-1)] p-[20px] min-h-[308px]"
                            >
                                <h3 className="text-[26px]">{benefit.title}</h3>
                                <p className="text-[18px] whitespace-pre-line">{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex gap-[12px] mt-[12px] max-lg:flex-col">
                    <div className="flex flex-col gap-[24px] justify-between bg-gradient-3 text-black rounded-[8px] p-[20px] flex-1">
                        <p className="text-[45px] font-medium uppercase text-balance max-sm:text-[35px]">
                            Попробуйте 14 дней бесплатно
                        </p>
                        <p className="text-[24px]">
                            Развивайте свою инфру с <span className="font-medium">mrnet</span>. Без лишних затрат и
                            костылей. Высокоскоростной интернет — удобно, эффективно!
                        </p>
                    </div>
                    <Image
                        src={"/it-router.jpg"}
                        alt="роутер"
                        width={678}
                        height={398}
                        className="rounded-[8px] flex-1 max-xl:w-[486px] max-lg:w-full max-lg:order-first"
                    />
                </div>

                <Button variant="gradient" href="#contact" className="mt-[34px] mx-auto">
                    Начать!
                </Button>
            </Container>
        </section>
    )
}
