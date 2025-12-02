interface NavLink {
    href: string
    label: string
    isAccent?: boolean
}

export const navLinks: NavLink[] = [
    { href: "#", label: "Технология" },
    { href: "#platform", label: "Платформа управления" },
    { href: "#", label: "Тест-драйв" },
    { href: "#net", label: "Наша сеть" },
    { href: "#contact", label: "Оставить заявку", isAccent: true },
]
