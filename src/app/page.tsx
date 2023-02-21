import Image from "next/image";

import { SocialLinks } from "@/components";
import ImageProfile from "../../public/marcelo-pereira-frontend-developer.jpg";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center gap-4">
      <div className="w-[120px] 2xl:w-[160px] bg-indigo-900 border-8 border-indigo-900 rounded-full overflow-hidden">
        <Image
          src={ImageProfile}
          alt="Foto Marcelo Pereira"
          placeholder="blur"
          priority
        />
      </div>

      <h1>
        Marcelo Pereira
        <span>Desenvolvedor Frontend</span>
      </h1>

      <div className="max-w-2xl">
        <p className="text-lg">
          Desenvolvedor Frontend a mais de 14 anos, atualmente trabalhando com
          ReactJs, TypeScript, JavaScript, Styled-components, entre outras
          tecnologias.
        </p>
      </div>

      <SocialLinks />
    </section>
  );
}
