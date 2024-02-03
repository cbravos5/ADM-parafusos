import { Hero } from './components/hero';
import { Menu } from './components/menu/menu';

export default function Home() {
  return (
    <main className="h-full">
      <Menu />

      <Hero />
     
    </main>
  );
}
