import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "./components";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcelo Pereira | Desenvolvedor Frontend ReactJs",
  description:
    "Desenvolvedor Frontend a mais de 10 anos, atualmente trabalhando com ReactJs, TypeScript, JavaScript, NextJs, TailwindCss, Styled-components, entre outras tecnologias.",
    metadataBase: new URL('https://marcelopereira.dev'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="antialiased">
      <body className={`${inter.className} min-h-svh`}>
        <main className="max-w-[800px] mx-auto flex justify-center items-center flex-1 px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
