import { Product } from './product';

import parafusos from '@/app/assets/PARAFUSOS-FULL.jpg';
import abrasivos from '@/app/assets/ABRASIVOS-FULL.jpg';
import ferramentas from '@/app/assets/FERRAMENTAS-FULL.jpg';

const PRODUCTS_LIST = [
  { text: 'PARAFUSOS', image: parafusos.src },
  { text: 'ABRASIVOS', image: abrasivos.src },
  { text: 'FERRAMENTAS', image: ferramentas.src },
];

export function Products() {
  return (
    <section className="animate-[enter_1000ms_ease_1200ms_forwards] fade-in-0 fill-mode-both w-full px-4 py-10 md:p-12 flex flex-col justify-center gap-5 max-w-7xl mx-auto">
      <h1 className="text-xl text-center lg:text-left md:text-3xl font-bold text-main-1">NOSSOS PRODUTOS</h1>

      <div className="w-full flex flex-col lg:flex-row gap-5 justify-center">
        {PRODUCTS_LIST.map((props) => (
          <Product {...props} key={props.text} />
        ))}
      </div>
    </section>
  );
}
