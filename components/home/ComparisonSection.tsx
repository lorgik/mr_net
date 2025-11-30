import Container from "@/components/Container"
import Title from "@/ui/Title"
import Image from "next/image"

export default function ComparisonSection() {
    return (
        <section>
            <Container className="flex pt-[75px] gap-[12px] max-md:flex-col max-md:gap-[34px]">
                <div className="flex-1">
                    <Title>не балансируем</Title>
                    <Image
                        src={"/train.jpg"}
                        alt="train"
                        width={678}
                        height={452}
                        className="mt-[34px] rounded-[8px] w-full"
                    />
                </div>
                <div className="flex-1">
                    <Title>а суммируем</Title>
                    <Image
                        src={"/future-train.jpg"}
                        alt="train"
                        width={678}
                        height={452}
                        className="mt-[34px] rounded-[8px] w-full"
                    />
                </div>
            </Container>
        </section>
    )
}
