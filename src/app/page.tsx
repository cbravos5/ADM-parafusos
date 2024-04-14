import { Contact } from "./sections/contact";
import { Hero } from "./sections/hero";
import { Menu } from "./sections/menu/menu";
import { Products } from "./sections/products";
import { SpecialProjects } from "./sections/special-projects";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Menu />

      <Hero />

      <Products />

      <SpecialProjects />

      <Contact />
     
    </main>
  );
}
