import Image from "next/image";

import { SocialLinks } from "@/components";
import ImageProfile from "../../public/marcelo-pereira-frontend-developer.jpg";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center gap-4 pt-20">
      <div className="h-[160px] w-[160px] bg-indigo-900 border-8 border-indigo-900 rounded-full overflow-hidden">
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

      <div className="max-w-2xl text-xl">
        <p className="mb-4">
          Desenvolvedor Frontend a mais de 14 anos, atualmente trabalhando com
          ReactJs, JavaScript, TypeScript, Styled-components, Next.js, entre
          outras tecnologias. Apaixonado por temas como Acecibilidade na Web,
          Web Semântica, SEO e Performance.
        </p>
      </div>

      <SocialLinks />
    </section>
  );
}
