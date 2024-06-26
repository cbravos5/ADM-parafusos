import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  `transition-all font-bold rounded-md text-center`,
  {
    variants: {
      color: {
        white:
          'bg-white text-main-1 hover:shadow-[0_0_24px_8px_rgba(255,255,255,0.3)]',
        blue: 'bg-main-1 text-white hover:shadow-[0_0_24px_8px_rgba(1,49,123,0.3)]',
      },
      size: {
        default: 'md:text-xl px-4 py-2 md:py-3',
        small: 'text-sm md:text-normal px-2 py-2'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  color,
  size,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      {...props}
      className={twMerge(buttonVariants({ color, size }), className)}
    />
  );
}
