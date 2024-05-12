import { InstagramIcon } from '@/app/components/icons/instagram-icon';
import { MailIcon } from '@/app/components/icons/mail-icon';
import { PhoneIcon } from '@/app/components/icons/phone-icon';
import logo from '@/app/assets/LOGO-ADM.png';
import Image from 'next/image';
import { MENU_ITEMS } from '@/app/constants';
import { MenuItem } from '../menu/menu-item';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-main-3 border-t-2 border-main-1 flex items-center flex-col px-2 py-4">
      <div className="flex w-full max-w-3xl justify-around gap-5 items-center">
        <a href="#" className="w-28 h-16 sm:w-32 sm:h-20 relative block shrink-0">
          <Image src={logo.src} alt="Logo ADM Parafusos" fill />
        </a>

          <ul className="flex flex-col gap-2 text-xs font-bold whitespace-nowrap sm:m-auto">
            {MENU_ITEMS.map(({ path, label }) => (
              <li className="font-semibold" key={label}>
                <a
                  href={path}
                  className="text-black  hover:text-main-1 focus:text-main-1 transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2 font-semibold text-sm mr-5">
            <li>
              <a
                href="https://www.instagram.com/adm.parafusos"
                target="_blank"
                className="flex items-center gap-1"
              >
                <InstagramIcon className="w-6 h-6" />
                <p className="hidden sm:block">@adm.parafusos</p>
              </a>
            </li>
            <li>
              <a
                href="mailto:admparafusos@terra.com.br"
                target="_blank"
                className="flex items-center gap-1"
              >
                <MailIcon className="w-6 h-6" />
                <p className="hidden sm:block">admparafusos@terra.com.br</p>
              </a>
            </li>
            <li>
              <a
                href="tel:+5541935651010"
                target="_blank"
                className="flex items-center gap-1"
              >
                <PhoneIcon className="w-6 h-6" />
                <p className="hidden sm:block">(41) 3565-1010</p>
              </a>
            </li>
          </ul>
      </div>
      <div className="w-full max-w-4xl my-3 h-[1px] bg-main-1"></div>
      <p className="text-[9px]">
        Copyright © {currentYear} ADM PARAFUSOS. Todos os direitos reservados.
      </p>
    </footer>
  );
}
