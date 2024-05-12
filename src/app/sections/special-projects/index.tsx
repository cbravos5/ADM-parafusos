import Image from 'next/image';

import bgImage from '@/app/assets/PARAFUSOS-ESPECIAIS.jpg';
import { Button } from '@/app/components/button';

export function SpecialProjects() {
  return (
    <section id="projetos" className="w-full flex flex-col lg:flex-row justify-center lg:h-[85vh] border-t-2 border-main-1">
      <div className="lg:w-3/5 flex justify-center items-center px-4 py-10 md:p-12 h-full bg-gradient-to-r from-white to-[#f2f3f7]">
        <div className="max-w-3xl mx-auto lg:max-w-2xl lg:ml-auto lg:mr-5">
          <h1 className="text-center mx-auto lg:mx-0 lg:text-left font-bold text-2xl md:text-4xl text-main-1 max-w-xl">
            FABRICAÇÃO DE PARAFUSOS ESPECIAIS EM CURITIBA
          </h1>
          <p className="text-center leading-6 md:leading-7 lg:text-justify text-lg md:text-xl font-light text-main-1 mt-3">
            Na vanguarda da fabricação de parafusos especiais, a ADM Parafusos
            se destaca ao transformar visões em realidade. Com uma expertise que
            vai além do convencional, dedicamo-nos a desenvolver projetos
            customizados, moldados nos mais diversos materiais e formatos
            imagináveis. Nosso compromisso com a excelência se reflete desde a
            definição dos objetivos do produto, pesquisa e seleção criteriosa de
            materiais, otimização do processo de fabricação até a eficiente
            gestão de produção. Oferecendo não apenas parafusos, mas uma
            assessoria completa, garantimos o melhor custo-benefício em todos os
            projetos desenvolvidos.
          </p>

          <div className="mt-10 text-center lg:text-left">
            <h2 className="font-semibold text-main-2 text-lg md:text-2xl">
              BUSCANDO UM PROJETO SOB MEDIDA?
            </h2>
            <Button color="blue" className="max-w-lg mt-2">
              <a
                target="_blank"
                href="https://wa.me/5541999939480?text=Ol%C3%A1%2C+acessei+o+site+e+preciso+falar+com+um+vendedor."
              >
                CONVERSE COM NOSSOS ESPECIALISTAS
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:w-2/5 relative h-64 sm:h-96 lg:h-auto">
        <Image
          src={bgImage}
          fill
          objectPosition="left"
          objectFit="cover"
          alt="Parafusos Especiais"
        />
      </div>
    </section>
  );
}
