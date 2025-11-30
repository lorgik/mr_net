import Container from "@/components/Container"
import Title from "@/ui/Title"
import Button from "@/ui/Button"
import Image from "next/image"
import Link from "next/link"

export default function SolutionSection() {
    return (
        <section>
            <Container className="pt-[75px]">
                <Title className="max-w-[700px]">Решение, созданное айтишниками для айтишников</Title>
                <div className="flex gap-[12px] mt-[34px]">
                    <div className="flex flex-col justify-between flex-1 bg-gradient-1 rounded-[8px] border border-[var(--accent-1)] p-[20px] min-h-[308px]">
                        <h3 className="text-[26px]">Ценим ваше время</h3>
                        <p className="text-[18px]">
                            Подключите мультироутер с быстрым интернетом всего за 7 минут. Наши устройства работают по
                            принципу Plug'n'Play (подключи и пользуйся). 
                            <br />
                            <br />
                            Вы получаете надёжную связь и отсутствие головной боли в виде договоров с разными
                            провайдерами
                        </p>
                    </div>
                    <div className="flex flex-col justify-between flex-1 bg-gradient-1 rounded-[8px] border border-[var(--accent-1)] p-[20px] min-h-[308px]">
                        <h3 className="text-[26px]">Безграничные Возможности</h3>
                        <p className="text-[18px]">
                            Подберём оборудование для новых точек и оперативно подключим к интернету по любому адресу.
                            <br />
                            <br />
                            Всё это — без необходимости заключения дополнительных контрактов
                        </p>
                    </div>
                    <div className="flex flex-col justify-between flex-1 bg-gradient-1 rounded-[8px] border border-[var(--accent-1)] p-[20px] min-h-[308px]">
                        <h3 className="text-[26px]">Индивидуальный подход</h3>
                        <p className="text-[18px]">
                            Мы всегда идем навстречу клиенту, предлагая оптимальное по стоимости решение.
                            <br />
                            <br />
                            Заполните заявку, и в рабочее время мы за 1 час сделаем расчёт
                        </p>
                    </div>
                </div>

                <div className="flex gap-[12px] mt-[12px]">
                    <div className="flex flex-col gap-[24px] justify-between bg-gradient-3 text-black rounded-[8px] p-[20px] flex-1">
                        <p className="text-[45px] font-medium uppercase text-balance">Попробуйте 14 дней бесплатно</p>
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
                        className="rounded-[8px] flex-1"
                    />
                </div>

                <Button variant="gradient" href="#contact" className="mt-[34px] mx-auto">
                    Начать!
                </Button>
            </Container>
        </section>
    )
}
