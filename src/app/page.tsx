import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";
import { Hero } from "./sections/hero";
import { Menu } from "./sections/menu/menu";
import { Products } from "./sections/products";
import { SpecialProjects } from "./sections/special-projects";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Hero />

      <Products />

      <SpecialProjects />

      <Contact />
    </main>
  );
}
