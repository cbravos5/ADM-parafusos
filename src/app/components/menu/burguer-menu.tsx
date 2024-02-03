'use client';

import { useState } from 'react';
import { MENU_ITEMS } from './MENU-ITEMS';
import { MenuItem } from './menu-item';
import { BurguerIcon } from './burguer-icon';
import { CloseIcon } from './close-icon';

const animateIn = 'animate-in slide-in-from-right-full';
const animateOut = 'animate-out slide-out-to-right-full';

export function BurguerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const onClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      setIsOpen(false);
    }, 500);
  };

  return (
    <div className="block md:hidden ml-auto">
      <button
        className="text-white hover:text-main-2 transition"
        onClick={() => setIsOpen(true)}
      >
        <BurguerIcon className="w-8 h-8" />
      </button>

      {isOpen && (
        <div className="fixed w-full h-full top-0 left-0 z-10">
          <div
            onClick={onClose}
            className="absolute w-full h-full top-0 left-0 z-20 bg-black/15 backdrop-blur-sm"
          ></div>
          <nav
            className={` ${
              isExiting ? animateOut : animateIn
            } duration-500 z-50 absolute w-3/4 h-full right-0 top-0 p-5 bg-white shadow-[-2px_0px_3px_0px_rgba(0,0,0,0.15)]`}
          >
            <button className="absolute top-4 left-4" onClick={onClose}>
              <CloseIcon className="h-6 w-6" />
            </button>

            <ul className="flex flex-col justify-center items-center h-full text-center space-y-5 font-bold text-main-1 whitespace-nowrap">
              {MENU_ITEMS.map((props) => (
                <MenuItem {...props} />
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
