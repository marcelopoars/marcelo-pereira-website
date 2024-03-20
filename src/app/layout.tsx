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
      <head>
        <meta
          name="adopt-website-id"
          content="38d0dc0f-dc5e-4487-a4de-fdd17e233975"
        />
        <script
          src="//tag.goadopt.io/injector.js?website_code=38d0dc0f-dc5e-4487-a4de-fdd17e233975"
          className="adopt-injector"
          async
        />
      </head>
      <body className={`${inter.className}`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoogleTagManager gtmId="G-VBFCXZR5JB" />
      </body>
    </html>
  );
}
