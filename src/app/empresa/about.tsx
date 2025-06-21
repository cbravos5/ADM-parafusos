import fachada from '@/app/assets/MDA-fachada.jpg';
import Image from 'next/image';

export function About() {
  return (
    <div className="w-full animate-in fade-in-0 duration-1000 delay-500 fill-mode-both">
      <div className="flex items-center gap-3 w-full mb-4">
        <h1 className="text-lg md:text-2xl font-bold text-main-2 text-nowrap">
          Sobre a empresa
        </h1>
        <div className="h-0.5 w-full bg-main-2"></div>
      </div>

      <div
        className="flex gap-5 flex-col sm:flex-row "
      >
        <p className="text-lg text-main-1 text-justify sm:w-3/5 !leading-6">
          Há mais de <strong>duas décadas</strong>, a MDA Parafusos tem moldado
          o cenário da fixação, oferecendo uma fusão impecável de{' '}
          <strong>
            qualidade incontestável e um atendimento que supera expectativas
          </strong>
          . Fundada em 2001, nossa jornada é marcada pela busca incessante da{' '}
          <strong>perfeição em cada parafuso e ferramenta</strong>{' '}
          que entregamos.
        </p>
        <div className="relative w-full sm:w-2/5 aspect-[924/712]">
          <Image src={fachada.src} fill alt="Fachada da loja" />
        </div>
      </div>
    </div>
  );
}
