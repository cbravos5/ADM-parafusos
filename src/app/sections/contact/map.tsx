import { MapPinIcon } from "@/app/components/icons/map-pin-icon";

export function Map() {
  return (
    <div className="w-full lg:w-3/5">
      <div className="flex items-center gap-3 w-full">
        <h1 className="text-lg font-bold text-main-2 text-nowrap">
          VENHA NOS VISITAR!
        </h1>
        <div className="h-0.5 w-full bg-main-2"></div>
      </div>

      <div className="flex items-center gap-2 mt-3">
        <MapPinIcon className="text-main-2 h-8 w-8" />
        <p className="md:text-lg">
          Rua Omar Raymundo Picheth, 1177 - Xaxim - Curitiba/PR
        </p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.784197924376!2d-49.27633492368247!3d-25.51224273615258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfb24dfb1d8af%3A0xf6e42edd84649a68!2sAdm%20industria%20de%20parafusos%20ltda!5e0!3m2!1spt-BR!2sbr!4v1713129042123!5m2!1spt-BR!2sbr"
        width="100%"
        className="border-2 border-main-2 rounded-[8px] h-64 md:h-80 mt-3"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
