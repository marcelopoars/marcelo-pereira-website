import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer, Header } from "./components";

import "./styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Marcelo Pereira | Desenvolvedor Frontend",
  description:
    "Criação e desenvolvimento de sites, landing pages e aplicações web.",
  metadataBase: new URL("https://marcelopereira.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="antialiased text-balance">
      <body className={`${inter.className}`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
