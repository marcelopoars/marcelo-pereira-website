import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { Footer, Header } from "./components";

import "./styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "Marcelo Pereira - Website",
  category: "technology",
  authors: [{ name: "Marcelo Pereira", url: "https://marcelopereira.dev" }],
  creator: "Marcelo Pereira",
  title: "Marcelo Pereira - Criação de Sites, Aplicações Web e APPs",
  description:
    "Desenvolvedor Full-Stack especialista na criação e desenvolvimento de sites, blogs, landing pages, aplicações web e APPs para celular.",
  metadataBase: new URL("https://marcelopereira.dev"),
  alternates: {
    canonical: "/",
    languages: { pt: "/" },
  },
  openGraph: {
    type: "website",
    countryName: "Brasil",
    url: "https://marcelopereira.dev",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="antialiased text-pretty scroll-smooth">
      <body className={`${inter.className}`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
