import Image from 'next/image';
import { Hero } from './components/hero';
import { Menu } from './components/menu/menu';
import { Products } from './components/products';
import { SpecialProjects } from './components/special-projects';

export default function Home() {
  return (
    <main className="h-full w-full">
      <Menu />

      <Hero />

      <Products />

      <SpecialProjects />
     
    </main>
  );
}
