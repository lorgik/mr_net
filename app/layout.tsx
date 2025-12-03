import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';

const gratoGrotesk = localFont({
  src: [
    {
      path: '../public/fonts/grato-grotesk-demo-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/grato-grotesk-demo-medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-grato-grotesk',
});

export const metadata: Metadata = {
  title: 'mr net',
  description: 'Беспроводной интернет для бизнеса',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${gratoGrotesk.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
