import { LogoContainer } from './logo-container';

const MAIN_TITLE_CLASSES = `animate-in fade-in-0 duration-1000
                            delay-500 fill-mode-both text-white
                            font-bold text-2xl md:text-4xl lg:text-5xl
                            xl:6xl 2xl:text-7xl text-center`;

const SUBTITLE_CLASSES = `w-3/5 text-white font-semibold text-xl
                          md:text-3xl lg:text-4xl 2xl:text-5xl
                          text-center`;

const TITLE_WRAPPER_CLASSES = `w-full h-full md:w-[calc(60%+72px)]
                               px-2 py-12 md:pl-20 bg-cover bg-center
                               grid place-items-center md:px-12`;

export function Hero() {
  return (
    <section className="w-full md:h-[calc(100%-88px)] flex flex-col md:flex-row">
      <LogoContainer>
        <img
          src="/LOGO-ADM-branca.png"
          alt="Logo ADM"
          className="w-[clamp(150px,65%,600px)] animate-in fade-in-0 delay-150 duration-1000 fill-mode-both"
        />
      </LogoContainer>
      <div
        className={TITLE_WRAPPER_CLASSES}
        style={{
          backgroundImage:
            'linear-gradient(#01317b88,#01317b88), url(/parafusos.jpg)',
        }}
      >
        <div className="flex flex-col gap-3">
          <h1 className={MAIN_TITLE_CLASSES}>SOLUÇÕES EM FIXAÇÃO</h1>
          <div className="flex items-center gap-2 animate-in fade-in-0 duration-1000 delay-700 fill-mode-both">
            <div className="h-0.5 w-1/5 bg-white"></div>
            <h1 className={SUBTITLE_CLASSES}>PARA EMPRESAS EXIGENTES</h1>
            <div className="h-0.5 w-1/5 bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
