import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
  category: 'technology',
  authors: [{ name: "Marcelo Pereira", url: "https://marcelopereira.dev" }],
  creator: "Marcelo Pereira",
  title: "Marcelo Pereira | Desenvolvedor Frontend",
  description:
    "Criação e desenvolvimento de sites, landing pages e aplicações web em Porto Alegre.",
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
    <html lang="pt-br" className="antialiased text-balance">
      <body className={`${inter.className}`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <GoogleTagManager gtmId="G-VBFCXZR5JB" />
      </body>
    </html>
  );
}
