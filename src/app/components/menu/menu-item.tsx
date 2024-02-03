type MenuItemProps = {
  path: string;
  label: string;
}

export function MenuItem({ path, label }: MenuItemProps) {
  const MENU_ITEM_CLASSES = `relative focus-within:after:w-full focus-within:after:bg-main-2
                            after:transition-all hover:after:w-full after:left-1/2
                            after:-translate-x-1/2 hover:text-main-2 hover:after:bg-main-2
                            after:content-[''] after:h-0.5 after:absolute after:bg-main-1
                            after:w-0 after:-bottom-1`;

  return (
    <li className={MENU_ITEM_CLASSES}>
      <a href={path} className="focus:text-main-2 transition">
        {label}
      </a>
    </li>
  );
}
