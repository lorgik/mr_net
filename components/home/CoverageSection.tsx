import Container from "@/components/Container"
import Title from "@/ui/Title"
import Image from "next/image"
import Link from "next/link"

export default function CoverageSection() {
    return (
        <section id="net">
            <Container className="pt-[75px] w-full">
                <Title>Подключаем к стабильному интернету по всей России</Title>

                <div className="relative flex items-center justify-center mt-[34px] pt-[32px] px-[40x] pb-[52px] border border-[var(--accent-1)] rounded-[8px] shadow-[0px_0px_7px_4px_rgba(255,76,0,0.6)] w-full">
                    <div className="inline-block w-[92.5%] h-auto">
                        <Image
                            src={"/rus-map.png"}
                            alt="Россия"
                            width={1287}
                            height={707}
                            className="w-full object-cover"
                        />
                    </div>
                    <div className="absolute bottom-[0.25%] right-[0.4%] left-[-1.3%] w-[101.7%] h-auto">
                        <Image
                            src={"/clients-dots.png"}
                            alt="точки"
                            width={1391}
                            height={628}
                            className="object-cover w-full"
                        />
                    </div>

                    <div>
                        <div className="absolute left-[15.5%] bottom-[63.5%]">
                            <div className="text-[16px] text-black flex flex-col items-start ml-[12px]">
                                <span className="font-medium bg-[var(--accent-2)] px-[4px]">Санкт-Петербург</span>
                                <Link href="tel:89313944611" className="bg-[var(--accent-2)] px-[4px]">
                                    8 931 394 46 11
                                </Link>
                            </div>
                            <div className="bg-white w-[12px] h-[12px]"></div>
                        </div>

                        <div className="absolute left-[4%] bottom-[35%]">
                            <div className="text-[16px] text-black flex flex-col items-start ml-[12px]">
                                <span className="font-medium bg-[var(--accent-2)] px-[4px]">Краснодар</span>
                                <Link href="tel:89933070177" className="bg-[var(--accent-2)] px-[4px]">
                                    8 993 307 01 77
                                </Link>
                            </div>
                            <div className="bg-white w-[12px] h-[12px]"></div>
                        </div>

                        <div className="absolute left-[27.5%] bottom-[35.5%]">
                            <div className="text-[16px] text-black flex flex-col items-start ml-[12px]">
                                <span className="font-medium bg-[var(--accent-2)] px-[4px]">Екатеринбург</span>
                                <Link href="tel:89026352239" className="bg-[var(--accent-2)] px-[4px]">
                                    8 902 635 22 39
                                </Link>
                            </div>
                            <div className="bg-white w-[12px] h-[12px]"></div>
                        </div>

                        <div className="absolute left-[20%] bottom-[42.5%]">
                            <div className="text-[16px] text-black flex flex-col items-start ml-[12px]">
                                <span className="font-medium bg-[var(--accent-2)] px-[4px]">Казань</span>
                                <Link href="tel:89047699654" className="bg-[var(--accent-2)] px-[4px]">
                                    8 904 769 96 54
                                </Link>
                            </div>
                            <div className="bg-white w-[12px] h-[12px]"></div>
                        </div>

                        <div className="absolute left-[14%] bottom-[53%]">
                            <div className="text-[16px] text-black flex flex-col items-start ml-[12px]">
                                <span className="font-medium bg-[var(--accent-2)] px-[4px]">Москва</span>
                                <Link href="tel:88006003538" className="bg-[var(--accent-2)] px-[4px]">
                                    8 800 600 35 38
                                </Link>
                            </div>
                            <div className="bg-white w-[12px] h-[12px]"></div>
                        </div>

                        <div className="absolute left-[26.5%] bottom-[26.5%]">
                            <div className="bg-white w-[12px] h-[12px]"></div>
                            <div className="text-[16px] text-black flex flex-col items-start ml-[12px]">
                                <span className="font-medium bg-[var(--accent-2)] px-[4px]">Челябинск</span>
                                <Link href="tel:89226368606" className="bg-[var(--accent-2)] px-[4px]">
                                    8 922 636 86 06
                                </Link>
                            </div>
                        </div>

                        <div className="absolute left-[41.5%] bottom-[21%]">
                            <div className="text-[16px] text-black flex flex-col items-start ml-[12px]">
                                <span className="font-medium bg-[var(--accent-2)] px-[4px]">Новосибирск</span>
                                <Link href="tel:89026352239" className="bg-[var(--accent-2)] px-[4px]">
                                    8 902 635 22 39
                                </Link>
                            </div>
                            <div className="bg-white w-[12px] h-[12px]"></div>
                        </div>

                        <div className="absolute left-[85%] bottom-[10%]">
                            <div className="text-[16px] text-black flex flex-col items-start ml-[12px]">
                                <span className="font-medium bg-[var(--accent-2)] px-[4px]">Владивосток</span>
                                <Link href="tel:89026352239" className="bg-[var(--accent-2)] px-[4px]">
                                    8 902 635 22 39
                                </Link>
                            </div>
                            <div className="bg-white w-[12px] h-[12px]"></div>
                        </div>
                    </div>
                </div>

                <div className="mt-[34px] flex justify-center gap-[48px] text-[18px]">
                    <div className="flex items-center gap-[12px]">
                        <div className="bg-[var(--accent-1)] rotate-45 w-[10px] h-[10px]"></div>
                        <span>Наши клиенты</span>
                    </div>
                    <div className="flex items-center gap-[12px]">
                        <div className="bg-white w-[10px] h-[10px]"></div>
                        <span>Отделы продаж</span>
                    </div>
                </div>
            </Container>
        </section>
    )
}
