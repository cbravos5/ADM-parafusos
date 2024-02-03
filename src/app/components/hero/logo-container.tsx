'use client';

import { useMediaQuery } from '@uidotdev/usehooks';
import { PropsWithChildren } from 'react';

export function LogoContainer({ children }: PropsWithChildren) {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <div
      className="w-full md:w-[calc(50%+20px)] md:-mr-[72px] z-10 bg-main-1 grid place-items-center"
      style={{
        clipPath: isSmallScreen
          ? ''
          : 'polygon(0 0,calc(100% - 72px) 0, 100% 100%, 0 100%)',
      }}
    >
      {children}
    </div>
  );
}
