export function Diferenciais() {
  return (
    <div className="w-full animate-in fade-in-0 duration-1000 delay-700 fill-mode-both">
      <div className="flex items-center gap-3 w-full mt-10 mb-5 ">
        <h1 className="text-lg md:text-2xl font-bold text-main-2 text-nowrap">
          Diferenciais que nos elevam
        </h1>
        <div className="h-0.5 w-full bg-main-2"></div>
      </div>

      <div className="flex gap-5 flex-col md:flex-row">
        <div className="text-main-1 p-3 border border-main-2 rounded-[0.175rem]">
          <h2 className="text-lg md:text-xl font-bold">
            Qualidade que resiste ao tempo
          </h2>
          <p className="text-lg !leading-6">
            Cada produto que sai de nossa linha de produção é um testemunho da
            nossa dedicação à excelência. Cumprimos e excedemos padrões
            nacionais e internacionais, conforme normas vigentes, garantindo que
            nossos clientes recebam não apenas parafusos, mas confiança
            duradoura.
          </p>
        </div>
        <div className="text-main-1 p-3 border border-main-2 rounded-[0.175rem]">
          <h2 className="text-lg md:text-xl font-bold">
            Atendimento além da velocidade
          </h2>
          <p className="text-lg !leading-6">
            Velocidade não é apenas um conceito para nós, é um compromisso.
            Nosso atendimento ágil redefine o significado de eficiência,
            garantindo que suas necessidades sejam atendidas com rapidez e
            precisão. Não apenas entregamos produtos, entregamos soluções
            instantâneas.
          </p>
        </div>
      </div>
    </div>
  );
}
