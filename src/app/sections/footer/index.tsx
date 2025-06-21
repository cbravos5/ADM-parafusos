import { InstagramIcon } from '@/app/components/icons/instagram-icon';
import { MailIcon } from '@/app/components/icons/mail-icon';
import { PhoneIcon } from '@/app/components/icons/phone-icon';
import logo from '@/app/assets/LOGO.png';
import Image from 'next/image';
import { MENU_ITEMS } from '@/app/constants';
import { MenuItem } from '../menu/menu-item';
import { LinkIcon } from '@/app/components/link-icon';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-main-3/30 border-t-2 border-main-1 flex items-center flex-col px-2 py-4">
      <div className="flex flex-wrap w-full max-w-3xl justify-around gap-5 items-center">
        <a
          href="#"
          className="w-28 h-16 sm:w-32 sm:h-20 relative block shrink-0"
        >
          <Image src={logo.src} alt="Logo MDA Parafusos" fill />
        </a>

        <ul className="flex flex-col gap-2 text-sm font-bold whitespace-nowrap ">
          {MENU_ITEMS.map(({ path, label }) => (
            <li className="font-semibold" key={label}>
              <a
                href={path}
                className="  hover:text-main-1 focus:text-main-1 transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 font-semibold text-sm mr-5">
          <li>
            <LinkIcon
              Icon={<InstagramIcon className="w-6 h-6" />}
              text="@mda.parafusos"
              href="https://www.instagram.com/mda.parafusos"
              target="_blank"
            />
          </li>
          <li>
            <LinkIcon
              Icon={<MailIcon className="w-6 h-6" />}
              text="mdaparafusos@terra.com.br"
              href="mailto:mdaparafusos@terra.com.br"
              target="_blank"
            />
          </li>
          <li>
            <LinkIcon
              Icon={<PhoneIcon className="w-6 h-6" />}
              text="(41) 3565-1010"
              href="tel:+554135651010"
              target="_blank"
            />
          </li>
        </ul>
      </div>
      <div className="w-full max-w-4xl my-3 h-[1px] bg-main-1"></div>
      <p className="text-[9px]">
        Copyright © {currentYear} MDA PARAFUSOS. Todos os direitos reservados.
      </p>
    </footer>
  );
}
