// src/components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import { footerLinks } from '@/data/footerLinks';
import { companyInfo } from '@/data/companyInfo';

export default function Footer() {
  return (
    <footer className="bg-[url('/footer-bg.png')] bg-no-repeat [background-position:100%_100%] [background-size:25.5%] max-2xl:[background-size:20%] max-xl:[background-size:15%] max-lg:[background-size:40%]">
      <Container className="py-[75px]">
        <h4 className="text-[20px]">Дефолтный подвал</h4>
        <div className="mt-[34px] flex gap-[75px] text-[12px] max-lg:flex-wrap max-lg:gap-[34px]">
          {/* Левая колонка: адрес + логотип + слоган */}
          <div className="flex flex-col max-w-[333px] gap-[20px] max-lg:order-last">
            <p>
              {companyInfo.legalName}, ОГРН: {companyInfo.ogrn}, Юридический
              адрес: {companyInfo.address}
            </p>
            <Link href="/" className="mt-auto">
              <Image src="/logo.svg" alt="mr net" width={185} height={41} />
            </Link>
            <h4 className="text-[12px]">{companyInfo.slogan}</h4>
          </div>

          {/* Центр: контакты */}
          <div className="max-w-[333px] flex flex-col gap-[5px]">
            <span>
              Почта: 
              <Link
                href={`mailto:${companyInfo.emails.info}`}
                className="underline transition hover:text-[var(--accent-2)]"
              >
                {companyInfo.emails.info}
              </Link>
            </span>
            <span>График работы: {companyInfo.workHours.office}</span>
            <span>Служба поддержки:</span>
            {companyInfo.phones.map((phone, i) => (
              <span key={i}>
                Тел: 
                <Link
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="underline transition hover:text-[var(--accent-2)]"
                >
                  {phone}
                </Link>
              </span>
            ))}
            <span>
              Почта: 
              <Link
                href={`mailto:${companyInfo.emails.support}`}
                className="underline transition hover:text-[var(--accent-2)]"
              >
                {companyInfo.emails.support}
              </Link>
            </span>
            <span>График работы: {companyInfo.workHours.support}</span>
            <span className="mt-auto">{companyInfo.copyright}</span>
          </div>

          {/* Правая колонка: юридические ссылки */}
          <div className="max-w-[360px] flex flex-col gap-[5px] underline">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="transition hover:text-[var(--accent-2)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
