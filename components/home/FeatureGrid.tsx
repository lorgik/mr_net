"use client"

import FeatureCard from "./FeatureCard"
import { useState } from "react"
import { ArrowLeft } from "@/public/icons/ArrowLeft"
import { ArrowRight } from "@/public/icons/ArrowRight"

export default function FeatureGrid() {
    const features = [
        {
            id: 1,
            src: "/wifi.svg",
            alt: "wifi",
            width: 82,
            height: 60,
            title: "надежный и быстрый интернет, который не падает",
        },
        {
            id: 2,
            src: "/mr.svg",
            alt: "mr",
            width: 106,
            height: 60,
            title: "КОНТРОЛЬ ВСЕЙ СЕТИ ЧЕРЕЗ ГИБКУЮ НАСТРОЙКУ",
        },
        {
            id: 3,
            src: "/arrows.svg",
            alt: "arrows",
            width: 64,
            height: 60,
            title: "Единый инструмент для масштабирования по всей стране",
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0)

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % features.length)
    }

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + features.length) % features.length)
    }

    return (
        <div>
            {/* Слайдер для мобильных */}
            <div className="lg:hidden">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{
                            transform: `translateX(-${activeIndex * 100}%)`,
                        }}
                    >
                        {features.map((feature) => (
                            <div key={feature.id} className="w-full flex-shrink-0 px-2">
                                <FeatureCard
                                    src={feature.src}
                                    alt={feature.alt}
                                    width={feature.width}
                                    height={feature.height}
                                    title={feature.title}
                                />
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
                        {features.map((_, index) => (
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
            <div className="hidden lg:flex gap-[12px] uppercase text-balance text-[20px]">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        src={feature.src}
                        alt={feature.alt}
                        width={feature.width}
                        height={feature.height}
                        title={feature.title}
                    />
                ))}
            </div>
        </div>
    )
}
