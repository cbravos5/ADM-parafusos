import { twMerge } from "tailwind-merge";

type CardProps = {
  img: string;
  title: string;
  text: string;
  className?: string
}

export function Card({ img, title, text, className }: CardProps) {
  return (
    <div className={twMerge("hover:scale-110 transition-transform w-full sm:w-72 p-5 rounded-[0.25rem] shadow-[0px_13px_27px_-5px_#32325d3f,0px_8px_16px_-8px_#0000004c]", className)}>
      <div className="flex gap-3 mb-2 justify-between">
        <h2 className="font-bold text-main-1 text-xl">{title}</h2>
        <img src={img} className="w-12 h-12" />
      </div>
      <p className="text-lg">{text}</p>
    </div>
  );
}
