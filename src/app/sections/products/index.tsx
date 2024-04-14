import Image from 'next/image';

import { Product } from './product';

import parafusos from '@/app/assets/PARAFUSOS-FULL.jpg';
import abrasivos from '@/app/assets/ABRASIVOS-FULL.jpg';
import ferramentas from '@/app/assets/FERRAMENTAS-FULL.jpg';

import abnt from '@/app/assets/abnt.svg';
import ansi from '@/app/assets/ansi.svg';
import astm from '@/app/assets/astm.svg';
import din from '@/app/assets/din.svg';
import iso from '@/app/assets/iso.svg';
import { Button } from '@/app/components/button';

const PRODUCTS_LIST = [
  { text: 'PARAFUSOS', image: parafusos.src },
  { text: 'ABRASIVOS', image: abrasivos.src },
  { text: 'FERRAMENTAS', image: ferramentas.src },
];

const SECTION_CLASSES = `animate-[enter_1000ms_ease_1200ms_forwards]
                         fade-in-0 fill-mode-both w-full px-4 py-10
                         md:p-12 flex flex-col justify-center gap-5
                         max-w-7xl mx-auto`;

export function Products() {
  return (
    <section className={SECTION_CLASSES}>
      <h1 className="text-xl text-center lg:text-left md:text-3xl font-bold text-main-1">
        NOSSOS PRODUTOS
      </h1>

      <div className="w-full flex flex-col lg:flex-row gap-5 justify-center">
        {PRODUCTS_LIST.map((props) => (
          <Product {...props} key={props.text} />
        ))}
      </div>

      <div className="flex flex-wrap gap-x-5 md:gap-x-10 justify-center max-w-3xl mx-auto w-full mt-5">
        <div className="w-20 h-20 md:w-28 md:h-28 relative">
          <Image src={abnt.src} fill objectFit="contain" alt="ABNT" />
        </div>
        <div className="w-20 h-20 md:w-28 md:h-28 relative">
          <Image src={ansi.src} fill objectFit="contain" alt="ANSI" />
        </div>
        <div className="w-20 h-20 md:w-28 md:h-28 relative">
          <Image src={astm.src} fill objectFit="contain" alt="ASTM" />
        </div>
        <div className="w-20 h-20 md:w-28 md:h-28 relative">
          <Image src={din.src} fill objectFit="contain" alt="DIN" />
        </div>
        <div className="w-20 h-20 md:w-28 md:h-28 relative">
          <Image src={iso.src} fill objectFit="contain" alt="ISO" />
        </div>
      </div>

      <Button
        color="blue"
        className="mx-auto mt-5 animate-[enter_1000ms_ease_1000ms_forwards] fade-in-0 fill-mode-both"
      >
        <a
          target="_blank"
          href="https://wa.me/5541999939480?text=Ol%C3%A1%2C+acessei+o+site+e+preciso+falar+com+um+vendedor."
        >
          SOLICITE SEU ORÇAMENTO AGORA!
        </a>
      </Button>
    </section>
  );
}
