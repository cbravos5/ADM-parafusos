import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './styles/globals.css';
import { Menu } from './sections/menu/menu';
import { Footer } from './sections/footer';
import { FloatingWpp } from './components/floating';

const nunito = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ADM Parafusos',
  description: 'Soluções em fixação para empresas exigentes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="w-full h-full scroll-smooth">
      <body className={nunito.className + ' w-full flex flex-col relative'}>
        <FloatingWpp />
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
