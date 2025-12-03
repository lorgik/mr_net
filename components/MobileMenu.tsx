'use client';

import { navLinks } from '@/data/navLinks';
import Link from 'next/link';

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black z-40 pt-[120px] px-4 lg:hidden">
      <nav className="text-[16px] uppercase w-full">
        <ul className="flex flex-col items-center gap-[20px] w-full">
          {navLinks.map((link, index) => (
            <li key={index} className="w-full text-center py-2">
              <Link
                href={link.href}
                className={`block w-full py-2 border-b border-transparent transition ${
                  link.isAccent
                    ? 'text-[var(--accent-2)] hover:border-[var(--accent-2)]'
                    : 'text-white hover:border-white'
                }`}
                onClick={onClose}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="w-full text-center py-2 mt-4">
            <Link
              href="tel:+7800600-35-38"
              className="block w-full text-[var(--accent-2)] border-b border-transparent hover:border-[var(--accent-2)] transition py-2"
              onClick={onClose}
            >
              +7 (800) 600-35-38
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
