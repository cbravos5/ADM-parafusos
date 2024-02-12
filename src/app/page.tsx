import Image from 'next/image';
import { Hero } from './components/hero';
import { Menu } from './components/menu/menu';
import { Products } from './components/products';

export default function Home() {
  return (
    <main className="h-full w-full">
      <Menu />

      <Hero />

      <Products />
     
    </main>
  );
}
