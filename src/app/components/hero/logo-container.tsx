'use client'

import { PropsWithChildren } from 'react';
import { useMediaQuery } from 'usehooks-ts';

export function LogoContainer({ children }: PropsWithChildren) {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <div
      className="w-full py-8 md:w-[calc(40%+20px)] md:-mr-[80px] z-10 grid place-items-center bg-cover"
      style={{
        clipPath: isSmallScreen
          ? ''
          : 'polygon(0 0,calc(100% - 80px) 0, 100% 100%, 0 100%)',
          backgroundImage: `linear-gradient(#01317bd1, #01317bd1), url(/bright-hex-backgrounds-networking.jpg)`
      }}
    >
      {children}
    </div>
  );
}
