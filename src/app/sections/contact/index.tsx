import { ContactForm } from "./contactForm";
import { Map } from "./map";

export function Contact() {
  return (
    <section id="contato" className="w-full px-4 py-10 md:p-12 max-w-7xl mx-auto space-y-5">
      <h1 className="text-center mx-auto lg:mx-0 lg:text-left font-bold text-2xl md:text-4xl text-main-1 max-w-xl">
        CONTATO
      </h1>

      <div className="w-full flex justify-center gap-5 flex-col md:flex-row">
        {/* <ContactForm /> */}
        <Map />
      </div>
    </section>
  );
}