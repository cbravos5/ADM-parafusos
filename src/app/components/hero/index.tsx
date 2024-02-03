'use client';

import { LogoContainer } from './logo-container';

export function Hero() {
  return (
    <section className="w-full h-[calc(100%-88px)] flex flex-col md:flex-row">
      <LogoContainer>
        <img
          src="/LOGO-ADM-branca.png"
          alt="Logo ADM"
          className="w-[clamp(150px,75%,600px)]"
        />
      </LogoContainer>
      <div
        className="w-full h-full md:w-[calc(50%+72px)] bg-cover bg-center grid place-items-center md:px-12"
        style={{ backgroundImage: 'url(/parafusos.jpg)' }}
      >
        <h1 className="text-white font-bold text-4xl lg:text-5xl xl:text-6xl text-center">
          Soluções em Fixação Para Empresas Exigentes
        </h1>
      </div>
    </section>
  );
}
