import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './styles/globals.css';
import { Menu } from './sections/menu/menu';
import { Footer } from './sections/footer';
import { FloatingWpp } from './components/floating';

const nunito = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MDA Parafusos',
  description: 'Soluções em fixação para empresas exigentes - parafusos | abrasivos| ferramentas | fabricação | fabricação de parafusos | curitiba | parafusos especiais',
  openGraph: {
    title: 'MDA Parafusos',
    description: 'Soluções em fixação para empresas exigentes',
    url: 'https://mdaparafusos.com.br',
    siteName: 'MDA Parafusos',
    images: [
      {
        url: 'https://mdaparafusos.com.br/LOGO.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
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
