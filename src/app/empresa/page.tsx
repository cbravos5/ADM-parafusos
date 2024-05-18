import { About } from './about';


import { Diferenciais } from './diferenciais';
import { Values } from './values';

export default function Company() {
  return (
    <section className="w-full px-4 py-10 md:p-12 max-w-6xl mx-auto">
      <About />

      <Diferenciais />

      <Values />
    </section>
  );
}
