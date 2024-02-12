import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export function Button({
  className,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      {...props}
      className={twMerge(
        `bg-white text-main-1 px-4 transition-all
         py-2 md:py-3 font-bold md:text-xl rounded-md text-center
         hover:shadow-[0_0_24px_8px_rgba(255,255,255,0.3)]`,
        className
      )}
    />
  );
}
