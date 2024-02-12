import Image from 'next/image';
import { MenuItem } from './menu-item';
import { MENU_ITEMS } from './MENU-ITEMS';
import { BurguerMenu } from './burguer-menu';



export function Menu() {
  return (
    <header className="w-full px-4 lg:px-10 py-3 flex justify-around items-center bg-main-2">
      <a href="#" className="w-24 h-16 relative block">
        <Image src={'/LOGO-ADM.png'} alt="Logo ADM Parafusos" fill />
      </a>
      <nav className="hidden md:block">
        <ul className="flex gap-5 text-sm font-bold text-white whitespace-nowrap">
          {MENU_ITEMS.map((props) => (
            <MenuItem {...props} />
          ))}
        </ul>
      </nav>

      <BurguerMenu />
    </header>
  );
}
