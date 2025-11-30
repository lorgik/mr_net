import Link from "next/link"

interface ButtonProps {
    children: React.ReactNode
    className?: string
    variant?: "default" | "gradient"
    href?: string
    onClick?: () => void
    target?: string
    rel?: string
}

const Button = ({ children, className, variant = "default", href, onClick, target, rel }: ButtonProps) => {
    if (href) {
        if (variant === "gradient") {
            return (
                <Link
                    href={href}
                    target={target}
                    rel={rel}
                    className={`relative uppercase text-[20px] w-[334px] h-[52px] text-black rounded-full bg-gradient-3 group flex justify-center items-center font-medium max-sm:w-full ${className}`}
                >
                    <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-3 rounded-full blur-[13.5px]" />
                    <span className="relative z-10">{children}</span>
                </Link>
            )
        }

        return (
            <Link
                href={href}
                target={target}
                rel={rel}
                className={`transition uppercase text-[14px] bg-[var(--accent-2)] w-[334px] h-[36px] text-black rounded-full hover:shadow-[0px_0px_16px_3px_rgba(0,228,240,0.8)] flex justify-center items-center font-medium max-sm:w-full ${className}`}
            >
                {children}
            </Link>
        )
    } else {
        if (variant === "gradient") {
            return (
                <button
                    onClick={onClick}
                    className={`relative uppercase text-[20px] w-[334px] h-[52px] text-black rounded-full bg-gradient-3 group flex justify-center items-center font-medium max-sm:w-full ${className}`}
                >
                    <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-3 rounded-full blur-[13.5px]" />
                    <span className="relative z-10">{children}</span>
                </button>
            )
        }

        return (
            <button
                onClick={onClick}
                className={`transition uppercase text-[14px] bg-[var(--accent-2)] w-[334px] h-[36px] text-black rounded-full hover:shadow-[0px_0px_16px_3px_rgba(0,228,240,0.8)] flex justify-center items-center font-medium max-sm:w-full ${className}`}
            >
                {children}
            </button>
        )
    }
}

export default Button
