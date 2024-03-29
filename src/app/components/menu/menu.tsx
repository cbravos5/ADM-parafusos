import Image from 'next/image';
import { MenuItem } from './menu-item';
import { MENU_ITEMS } from './MENU-ITEMS';
import { BurguerMenu } from './burguer-menu';

import logo from '@/app/assets/LOGO-ADM-branca.png';

export function Menu() {
  return (
    <header className="w-full px-4 lg:px-10 py-3 flex justify-around items-center bg-main-1 border-b border-white">
      <a href="#" className="w-14 h-10 md:w-24 md:h-16 relative block">
        <Image src={logo.src} alt="Logo ADM Parafusos" fill />
      </a>
      <nav className="hidden md:block">
        <ul className="flex gap-5 text-sm font-bold text-white whitespace-nowrap">
          {MENU_ITEMS.map((props) => (
            <MenuItem {...props} key={props.label} />
          ))}
        </ul>
      </nav>

      <BurguerMenu />
    </header>
  );
}
