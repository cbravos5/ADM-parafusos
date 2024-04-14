import Image from "next/image";

export function Product({ text, image }: { text: string; image: string }) {
  return (
    <a
      className="w-full border-4 border-black rounded-md relative h-64 lg:h-96 block overflow-hidden [&_div]:hover:h-full"
      href="#"
    >
      <Image alt="Parafusos" src={image} fill className="object-cover" />
     
      <div
        className="absolute transition-all duration-300 bottom-0
                  left-0 bg-main-2 hover:bg-main-2/85 w-full p-3 h-14
                  grid place-items-center"
      >
        <h2 className="text-white font-semibold text-lg md:text-2xl xl:text-3xl">
          {text}
        </h2>
      </div>
    </a>
  );
}
