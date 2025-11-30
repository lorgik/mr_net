import Image from "next/image"

type FeatureCardProps = {
    src: string
    alt: string
    width: number
    height: number
    title: string
}

export default function FeatureCard({ src, alt, width, height, title }: FeatureCardProps) {
    return (
        <div className="flex-1 flex flex-col justify-between min-h-[220px] rounded-[8px] bg-gradient-2 border border-[var(--accent-2)] p-[20px]">
            <Image src={src} alt={alt} width={width} height={height} />
            <h3>{title}</h3>
        </div>
    )
}
