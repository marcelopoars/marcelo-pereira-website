import Image from "next/image";

import ImageProfile from "../../public/marcelo-pereira-frontend-developer.jpg";
import { SocialLinks } from "./components";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center gap-12 py-8">
      <article className="flex flex-col items-center gap-4">
        <div className="w-[120px] 2xl:w-[160px] bg-indigo-900 border-4 border-indigo-900 rounded-full overflow-hidden relative">
          <Image
            src={ImageProfile}
            alt="Foto Marcelo Pereira"
            placeholder="blur"
            width={1000}
            height={1000}
            priority
          />
        </div>

        <h1>
          Marcelo Pereira
          <span>Desenvolvedor Frontend</span>
        </h1>

        <p className="text-base lg:text-lg">
          Desenvolvedor Frontend a mais de 10 anos, atualmente trabalhando com
          ReactJs, TypeScript, JavaScript, NextJs, TailwindCss,
          Styled-components, entre outras tecnologias.
        </p>
      </article>

      <SocialLinks />
    </section>
  );
}
