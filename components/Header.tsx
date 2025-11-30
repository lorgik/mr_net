import Link from "next/link"
import Image from "next/image"
import Container from "./Container"

export default function Header() {
    const navLinks = [
        { href: "#", label: "Технология" },
        { href: "#platform", label: "Платформа управления" },
        { href: "#", label: "Тест-драйв" },
        { href: "#net", label: "Наша сеть" },
        { href: "#contact", label: "Оставить заявку", isAccent: true },
    ]

    return (
        <header className="fixed z-10 w-full bg-black">
            <Container className="pt-[36px] pb-[58px] flex items-end gap-[40px]">
                <div className="flex items-end gap-[56px] text-[12px]">
                    <Link href={"/"}>
                        <Image src={"/logo.svg"} alt="mr net" width={185} height={41} />
                    </Link>
                    <Link
                        href={"tel:+ 7 (800) 600-35-38"}
                        className="text-[var(--accent-2)] border-black border-b hover:border-[var(--accent-2)] transition flex-shrink-0"
                    >
                        + 7 (800) 600-35-38
                    </Link>
                </div>

                <ul className="flex items-center gap-[40px] ml-auto text-[12px] uppercase">
                    {navLinks.map((link, index) => (
                        <li key={index} className="flex-shrink-0">
                            <Link
                                href={link.href}
                                className={`border-black border-b transition ${
                                    link.isAccent
                                        ? "text-[var(--accent-2)] hover:border-[var(--accent-2)]"
                                        : "hover:border-white"
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </header>
    )
}
