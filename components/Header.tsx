// src/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { navLinks } from '@/data/navLinks';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed z-50 w-full bg-black">
      <Container className="py-[36px] flex items-end justify-between gap-[40px] max-xl:items-center max-xl:py-[20px]">
        {/* Логотип и телефон */}
        <div className="flex items-end gap-[56px] text-[12px] max-xl:items-center max-xl:gap-[12px] max-xl:flex-col max-xl:h-auto">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/logo.svg"
              alt="mr net"
              width={185}
              height={41}
              className="max-lg:w-[163px]"
              priority
            />
          </Link>
          <Link
            href="tel:+7800600-35-38"
            className="text-[var(--accent-2)] border-b border-transparent hover:border-[var(--accent-2)] transition flex-shrink-0 max-lg:text-[14px]"
            onClick={closeMenu}
          >
            +7 (800) 600-35-38
          </Link>
        </div>

        {/* Кнопка бургер / крестик */}
        <div className="hidden max-lg:block z-60">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none relative z-60"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <Image
                src="/menu-cross.svg"
                alt="Закрыть меню"
                width={24}
                height={24}
                className="relative z-60"
              />
            ) : (
              <Image
                src="/burger.svg"
                alt="Открыть меню"
                width={24}
                height={24}
              />
            )}
          </button>
        </div>

        {/* Десктопная навигация */}
        <nav className="flex items-center gap-[40px] ml-auto text-[12px] uppercase max-lg:hidden">
          <ul className="flex items-center gap-[40px]">
            {navLinks.map((link, index) => (
              <li key={index} className="flex-shrink-0">
                <Link
                  href={link.href}
                  className={`border-b border-transparent transition ${
                    link.isAccent
                      ? 'text-[var(--accent-2)] hover:border-[var(--accent-2)]'
                      : 'text-white hover:border-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      {/* Мобильное меню (без кнопки закрытия внутри) */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}
