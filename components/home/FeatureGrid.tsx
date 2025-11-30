import Container from "../Container"
import FeatureCard from "./FeatureCard"

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

    return (
        <div className="flex gap-[12px] uppercase text-balance text-[20px] max-lg:flex-col">
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
    )
}
