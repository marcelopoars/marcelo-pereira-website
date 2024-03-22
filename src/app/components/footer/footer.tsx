import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { Chat, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

import { SocialLinks } from "..";

export function Footer() {
  return (
    <footer className="bg-indigo-900 text-indigo-50 px-6 py-12 space-y-6 lg:px-12 lg:py-20">
      <div className="max-w-7xl mx-auto flex justify-center">
        <SocialLinks />
      </div>

      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} | Desenvolvido com{" "}
          <span className="animate-pulse">❤</span> por{" "}
          <Link
            href="/"
            className="font-semibold hover:underline underline-offset-4"
          >
            Marcelo Pereira
          </Link>
        </p>
      </div>

      <a
        href="https://api.whatsapp.com/send?phone=5551981838118&text=Olá!"
        target="_blank"
        rel="noopener noreferrer"
        className={twMerge(
          "fixed",
          "right-6 bottom-6",
          "lg:right-12 lg:bottom-12",
          "bg-slate-900 text-white text-sm font-semibold whitespace-nowrap",
          "p-3",
          "lg:p-4",
          "lg:hover:bg-slate-950",
          "lg:focus-visible:ring-2 lg:focus-visible:ring-offset-4 lg:focus-visible:ring-indigo-600",
          "lg:flex items-center gap-2",
          "rounded-full outline-none transition",
        )}
        aria-label="Clique para ir para o WhatsApp"
      >
        <WhatsappLogo className="size-12" />
      </a>
    </footer>
  );
}
