import wpp from '@/app/assets/whatsapp.png';

export function FloatingWpp() {
  return (
    <a
      href="https://wa.me/554135651010?text=Ol%C3%A1%2C+acessei+o+site+e+preciso+falar+com+um+vendedor."
      className="w-fit fixed bottom-12 right-5 z-50  animate-[popping_2000ms_ease_1000ms_alternate_infinite] hover:scale-105 transition-transform"
    >
      <img src={wpp.src} className="w-14 h-14 md:w-16 md:h-16" />
    </a>
  );
}
