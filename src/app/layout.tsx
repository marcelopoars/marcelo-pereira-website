import { Footer } from "@/components";

import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head />
      <body>
        <main className="max-w-[600px] mx-auto flex justify-center items-center flex-1 px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
