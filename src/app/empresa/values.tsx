import missao from '@/app/assets/mission.png';
import visao from '@/app/assets/binoculars.png';
import valores from '@/app/assets/diamond.png';
import qualidade from '@/app/assets/high-quality.png';
import { Card } from './card';

export function Values() {
  return (
    <div className="w-full animate-in fade-in-0 duration-1000 delay-1000 fill-mode-both mt-10 mb-5">
      <div className="flex items-center gap-3 w-full mb-4">
        <h1 className="text-lg md:text-2xl font-bold text-main-2 text-nowrap">
          Missão, visão e valores
        </h1>
        <div className="h-0.5 w-full bg-main-2"></div>
      </div>

      <div className="flex justify-center gap-5 flex-wrap mt-5">
        <Card
          img={missao.src}
          title="MISSÃO DE SOLUCIONAR"
          text="Nosso compromisso vai além de fornecer produtos; é sobre encontrar
          soluções. A missão da MDA Parafusos é ser a resposta para as
          demandas de fixação, estabelecendo laços transparentes e
          comprometidos."
        />
        <Card
          img={visao.src}
          title="VISÃO QUE INSPIRA"
          text="Estamos moldando o futuro da fixação no Paraná, sendo a referência que inspira confiança. Nossa visão é garantir atendimento diferenciado, produtos de qualidade e entregas ágeis."
        />
        <Card
          img={valores.src}
          title="VALORES QUE NORTEIAM"
          text="Com mais de 40 anos de experiência, a honestidade e a seriedade são as bases que sustentam nossa jornada. Buscamos qualidade e satisfação, colocando a integridade acima de tudo."
        />
        <Card
          img={qualidade.src}
          title="CONECTE-SE COM A QUALIDADE"
          text="Na MDA Parafusos, não estamos apenas no negócio de fixação; estamos no negócio de construir relações duradouras. Explore nossa linha de produtos e descubra como podemos ser a chave para suas necessidades de fixação. Seja bem-vindo a um mundo onde a excelência é a norma. Seu futuro fixado com qualidade começa aqui!"
          className="lg:w-[904px]"
        />
      </div>
    </div>
  );
}
