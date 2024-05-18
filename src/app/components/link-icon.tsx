import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

type LinkIconProps = {
  Icon: React.ReactNode;
  text: string;
  hideOnSmall?: boolean;
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export function LinkIcon({
  Icon,
  text,
  hideOnSmall,
  className,
  ...props
}: LinkIconProps) {
  return (
    <a className={twMerge('flex items-center gap-1 hover:text-main-1 transition-colors', className)} {...props}>
      {Icon}
      {hideOnSmall ? <p className="hidden sm:block">{text}</p> : text}
    </a>
  );
}
