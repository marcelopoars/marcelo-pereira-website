import Image from "next/image";

import { SocialLinks } from "@/components";

// import ImageProfile from "../../public/marcelo-pereira-frontend-developer.jpg";

import blurImage from "../../public/blur.png";

const ImageProfileBase64 = blurImage.blurDataURL;

console.log(ImageProfileBase64);

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center gap-4 py-8">
      <div className="w-[120px] bg-indigo-900 border-4 border-indigo-900 rounded-full overflow-hidden">
        <Image
          src={"/marcelo-pereira-frontend-developer.jpg"}
          alt="Foto Marcelo Pereira"
          width={120}
          height={120}
          placeholder="blur"
          blurDataURL={ImageProfileBase64}
          sizes="(min-width: 60em) 24vw, (min-width: 28em) 45vw, 100vw"
        />
      </div>

      <h1>
        Marcelo Pereira
        <span>Desenvolvedor Frontend</span>
      </h1>

      <div className="max-w-2xl">
        <p className="text-base lg:text-lg">
          Desenvolvedor Frontend a mais de 14 anos, atualmente trabalhando com
          ReactJs, TypeScript, JavaScript, Styled-components, entre outras
          tecnologias.
        </p>
      </div>

      <SocialLinks />
    </section>
  );
}
