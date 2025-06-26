import { InstagramIcon } from '@/app/components/icons/instagram-icon';
import { ContactForm } from './contactForm';
import { Map } from './map';
import { LinkIcon } from '@/app/components/link-icon';
import { MailIcon } from '@/app/components/icons/mail-icon';
import { PhoneIcon } from '@/app/components/icons/phone-icon';

export function Contact() {
  return (
    <section
      id="contato"
      className="w-full px-4 py-10 md:p-12 max-w-7xl mx-auto space-y-5"
    >
      <h1 className="text-center mx-auto lg:mx-0 lg:text-left font-bold text-2xl md:text-4xl text-main-1 max-w-xl">
        CONTATO
      </h1>

      <div className="w-full flex gap-5 flex-col lg:flex-row">
        {/* <ContactForm /> */}

        <div className='w-full  lg:w-2/5 space-y-5'>
          <h2 className="text-xl font-bold text-main-2 text-center lg:text-left">Entre em contato pelas redes ou por telefone</h2>
          <div className="flex lg:flex-col gap-4 font-semibold text-sm flex-wrap justify-center">
            <LinkIcon
              Icon={<InstagramIcon className="w-7 h-7 lg:w-9 lg:h-9" />}
              className="text-lg lg:text-xl"
              text="@mdaparafusos"
              href="https://www.instagram.com/mdaparafusos"
              target="_blank"
            />
            <LinkIcon
              Icon={<MailIcon className="w-7 h-7 lg:w-9 lg:h-9" />}
              className="text-lg lg:text-xl"
              text="mdaparafusos@gmail.com"
              href="mailto:mdaparafusos@gmail.com"
              target="_blank"
            />
            <LinkIcon
              Icon={<PhoneIcon className="w-7 h-7 lg:w-9 lg:h-9" />}
              className="text-lg lg:text-xl"
              text="(41) 3565-1010"
              href="tel:+554135651010"
              target="_blank"
            />
          </div>
        </div>

        <Map />
      </div>
    </section>
  );
}
