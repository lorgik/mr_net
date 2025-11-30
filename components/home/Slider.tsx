"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowLeft } from "@/public/icons/ArrowLeft"
import { ArrowRight } from "@/public/icons/ArrowRight"

const reviews = [
    {
        id: 1,
        client: "Шоколадница",
        name: "Чистяков Марк",
        position: "Начальник управления",
        department: "Управление эксплуатации и развития ИТ-сервисов",
        text: "Мы обратились к mrnet, поскольку нам было необходимо обеспечить стабильный сигнал для видеонаблюдения, эквайринга и работы кафе в проблемных точках. Сотрудники компании предложили отличное решение: разделить сигнал на офис и зал, что повысило качество и отказоустойчивость. Сейчас мультироутеры mrnet стали основным интернет-каналом в некоторых точках, а в других локациях mrnet рассматривается в качестве резервного канала для надежности. На наш взгляд, ребята предлагают...",
    },
    {
        id: 2,
        client: "Ермолино",
        name: "Тараканов Михаил",
        position: "Руководитель",
        department: "СИТ АО «Подмосковья»",
        text: "У нас много торговых точек, и стабильный интернет — постоянная проблема. Мы пробовали разные решения, но это только усложняло ситуацию, добавляя путаницу со счетами с увеличением количества контрагентов. С mrnet мы смогли упорядочить документооборот и организовать управление оборудованием в одном удобном личном кабинете. Оперативная техническая поддержка стала для нас надежным помощником. Теперь более 150 наших точек продаж используют mrnet как основной канал связи, и это только начало!",
    },
    {
        id: 3,
        client: "Аптеки 36,6",
        name: "Константин Старцев",
        position: "Руководитель",
        department: "",
        text: "Когда бизнес расширяется, особое внимание уделяется партнерам и готовность помочь. Когда в Великом Новгороде случилась муниципальная авария, за несколько часов доставили мультироутер, настроили соединение в 8 из 12 новых точек, настроили удалённое управление точек из одного кабинета, и реакция в telegram — важные преимущества.",
    },
    {
        id: 4,
        client: "ТЕСТ",
        name: "Тараканов Михаил",
        position: "Руководитель",
        department: "СИТ АО «Подмосковья»",
        text: "У нас много торговых точек, и стабильный интернет — постоянная проблема. Мы пробовали разные решения, но это только усложняло ситуацию, добавляя путаницу со счетами с увеличением количества контрагентов. С mrnet мы смогли упорядочить документооборот и организовать управление оборудованием в одном удобном личном кабинете. Оперативная техническая поддержка стала для нас надежным помощником. Теперь более 150 наших точек продаж используют mrnet как основной канал связи, и это только начало!",
    },
]

export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0)

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % (reviews.length - 1))
    }

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + reviews.length - 1) % (reviews.length - 1))
    }

    const goToSlide = (index: number) => {
        setActiveIndex(index)
    }

    return (
        <div className="relative mt-[34px]">
            <div className="flex gap-[12px] w-max">
                {reviews.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={
                            "flex flex-col gap-[24px] justify-between bg-gradient-2 flex-shrink-0 max-w-[563px] h-[360px] transition-transform duration-500 rounded-[8px] p-[20px] text-white border border-[var(--accent-2)]"
                        }
                        style={{
                            transform: `translateX(-${activeIndex * (563 + 12)}px)`, // 563px + 12px gap,
                        }}
                    >
                        <div className="flex justify-between items-start mb-[12px] text-[14px]">
                            <div className="text-[var(--accent-2)]">
                                <h3 className="font-medium">{testimonial.client}</h3>
                                <p>{testimonial.name}</p>
                            </div>
                            <div>
                                <p>{testimonial.position}</p>
                                <p>{testimonial.department}</p>
                            </div>
                        </div>
                        <p className="text-[16px]">{testimonial.text}</p>
                        <div className="mt-[12px] flex justify-end">
                            <Image src="/arrow-down.svg" alt="arrow" width={20} height={20} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mt-[34px]">
                <button
                    onClick={prevSlide}
                    className="flex justify-center items-center border border-[var(--accent-2)] rounded-full w-[52px] h-[52px]"
                >
                    <ArrowLeft />
                </button>

                <div className="flex gap-[16px]">
                    {reviews.map(
                        (_, index) =>
                            index !== reviews.length - 1 && (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-[11px] h-[11px] rounded-full border border-[var(--accent-2)]  ${
                                        index === activeIndex ? "bg-[var(--accent-2)]" : "bg-black"
                                    }`}
                                />
                            )
                    )}
                </div>

                <button
                    onClick={nextSlide}
                    className="flex justify-center items-center border border-[var(--accent-2)] rounded-full w-[52px] h-[52px]"
                >
                    <ArrowRight />
                </button>
            </div>
        </div>
    )
}
