import Container from "@/components/Container"
import Title from "@/ui/Title"
import Image from "next/image"

export default function ClientsSection() {
    const clients = [
        { id: 1, src: "/36.6.png", alt: "36.6", width: 220, height: 60 },
        { id: 2, src: "/нф.png", alt: "надежда фарм", width: 220, height: 60 },
        { id: 3, src: "/айркрафт.png", alt: "айркрафт", width: 220, height: 60 },
        { id: 4, src: "/покупочка.png", alt: "покупочка", width: 220, height: 60 },
        { id: 5, src: "/ортк.png", alt: "ортк", width: 220, height: 60 },
        { id: 6, src: "/аленка.png", alt: "аленка", width: 220, height: 60 },
        { id: 7, src: "/яр.png", alt: "красный яр", width: 220, height: 60 },
    ]

    return (
        <section>
            <Container className="pt-[75px]">
                <Title>500+ клиентов уже с нами</Title>
            </Container>

            <div className="relative mt-[50px] overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap gap-[20px]">
                    {clients.map((client) => (
                        <div key={client.id} className="flex-shrink-0">
                            <Image src={client.src} alt={client.alt} width={client.width} height={client.height} />
                        </div>
                    ))}
                    {clients.map((client) => (
                        <div key={`dup-${client.id}`} className="flex-shrink-0">
                            <Image src={client.src} alt={client.alt} width={client.width} height={client.height} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
