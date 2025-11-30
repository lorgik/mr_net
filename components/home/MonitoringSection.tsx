import Container from "@/components/Container"
import Title from "@/ui/Title"
import Button from "@/ui/Button"
import Image from "next/image"
import Link from "next/link"

export default function MonitoringSection() {
    return (
        <section id="platform">
            <Container className="pt-[75px]">
                <Title>Настраивайте сеть и управляйте всеми устройствами через единый личный кабинет</Title>
                <div className="mt-[34px] grid grid-cols-[563fr_793fr] gap-[12px] w-full">
                    <div className="flex flex-col justify-between min-h-[220px] bg-gradient-2 rounded-[8px] border border-[var(--accent-2)] p-[20px]">
                        <h3 className="text-[26px]">мониторинг</h3>
                        <p className="text-[18px]">
                            Графики потребления трафика
                            <br />
                            <br />
                            Просмотр подключенных к мультироутеру сетевых устройств
                        </p>
                    </div>
                    <Image
                        src={"/monitor.jpg"}
                        alt="мониторинг"
                        width={793}
                        height={452}
                        className="row-span-2 w-full rounded-[8px]"
                    />
                    <div className="flex flex-col justify-between min-h-[220px] bg-gradient-2 rounded-[8px] border border-[var(--accent-2)] p-[20px]">
                        <h3 className="text-[26px]">тонкая настройка</h3>
                        <p className="text-[18px]">
                            Настройка тоннелей PPTP, L2TP, GRE, IPIP
                            <br />
                            <br />
                            Настройка пробросов портов
                        </p>
                    </div>
                </div>
                <Button href="#contact" className="mt-[34px] mx-auto">
                    Испытать все возможности
                </Button>
            </Container>
        </section>
    )
}
