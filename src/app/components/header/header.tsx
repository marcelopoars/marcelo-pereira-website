import Image from "next/image";

import { SocialLinks } from "..";

import ImageProfile from "@/app/assets/marcelo-pereira-frontend-developer.jpg";

export function Header() {
  return (
    <header className="bg-indigo-100/50 px-6 pt-6 lg:px-12 lg:pt-12">
      <div className="max-w-7xl mx-auto flex items-start justify-between border-b-2 border-indigo-800/30 pb-4">
        <div className="flex items-center gap-2 lg:gap-4 ">
          <div className="w-[48px] bg-indigo-800 border-4 border-indigo-800 rounded-full overflow-hidden shadow-lg shadow-indigo-200">
            <Image
              src={ImageProfile}
              alt="Foto Marcelo Pereira"
              placeholder="blur"
              className="object-fill"
              priority
            />
          </div>
          <h1 className="text-lg lg:text-3xl font-bold text-indigo-800">
            Marcelo Pereira
            <span className="block text-xs lg:text-xl text-zinc-700 font-medium">
              Desenvolvedor Frontend
            </span>
          </h1>
        </div>

        <SocialLinks items={["GitHub", "Linkedin"]} />
      </div>
    </header>
  );
}
