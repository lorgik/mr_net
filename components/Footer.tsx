import Link from "next/link"
import Image from "next/image"
import Container from "./Container"

export default function Footer() {
    const footerLinks = [
        { href: "#", label: "Пользовательское соглашение" },
        { href: "#", label: "Политика в отношении обработки персональных данных" },
        { href: "#", label: "Соглашение об обработке данных" },
        { href: "#", label: "Соглашение о порядке оказания услуг" },
        { href: "#", label: "Соглашение о технической поддержке" },
        { href: "#", label: "Требования по эксплуатации оборудования mrnet" },
        { href: "#", label: "Требования к серверным ресурсам для установки ПО" },
        { href: "#", label: "Инструкция по работе с личным кабинетом" },
        { href: "#", label: "Инструкция по эксплуатации мультироутера 04" },
        { href: "#", label: "Инструкция по эксплуатации мультироутера 05" },
        { href: "#", label: "Инструкция по эксплуатации мультироутера 06" },
        { href: "#", label: "Инструкция по эксплуатации мультироутера 07" },
    ]

    return (
        <footer className="bg-[url(/footer-bg.png)] bg-no-repeat bg-position-[100%_100%] bg-size-[25.5%] max-2xl:bg-size-[20%] max-xl:bg-size-[15% max-lg:bg-size-[40%]">
            <Container className="py-[75px]">
                <h4 className="text-[20px]">Дефолтный подвал</h4>
                <div className="mt-[34px] flex gap-[75px] text-[12px] max-lg:flex-wrap max-lg:gap-[34px]">
                    <div className="flex flex-col max-w-[333px] gap-[20px] max-lg:order-last">
                        <p>
                            ООО «Ньюком Дистрибьюшн»,ОГРН: 1207700420784,Юридический адрес: 119017, Российская
                            Федерация, г. Москва, ул. Большая Ордынка, д. 54 стр. 2
                        </p>
                        <Link href={"/"} className="mt-auto">
                            <Image src="logo.svg" alt="mr net" width={185} height={41} />
                        </Link>
                        <h4 className="text-[12px]">КАТЕГОРИЧЕСКИ НОВЫЙ ИНТЕРНЕТ ДЛЯ БИЗНЕСА</h4>
                    </div>
                    <div className="max-w-[333px] flex flex-col gap-[5px]">
                        <span>
                            Почта: 
                            <Link
                                href={"mailto:info@mrnet.ru"}
                                className="underline transition hover:text-[var(--accent-2)]"
                            >
                                info@mrnet.ru
                            </Link>
                        </span>
                        <span>График работы: по будням</span>
                        <span>с 9:00 до 19:00 по Москве</span>
                        <span>Служба поддержки:</span>
                        <span>
                            Тел: 
                            <Link
                                href={"tel:8 (495) 308-41-51"}
                                className="underline transition hover:text-[var(--accent-2)]"
                            >
                                8 (495) 308-41-51
                            </Link>
                        </span>
                        <span>
                            Тел: 
                            <Link
                                href={"tel:8 (800) 600-35-38"}
                                className="underline transition hover:text-[var(--accent-2)]"
                            >
                                8 (800) 600-35-38
                            </Link>
                        </span>
                        <span>
                            Почта: 
                            <Link
                                href={"mailto:helpdesk@mrnet.ru"}
                                className="underline transition hover:text-[var(--accent-2)]"
                            >
                                helpdesk@mrnet.ru
                            </Link>
                        </span>
                        <span>График работы: 24/7</span>

                        <span className="mt-auto">©2025 mrnet.ru Все права защищены</span>
                    </div>
                    <div className="max-w-[360px] flex flex-col gap-[5px] underline">
                        {footerLinks.map((link, index) => (
                            <Link key={index} href={link.href} className="transition hover:text-[var(--accent-2)]">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    )
}
