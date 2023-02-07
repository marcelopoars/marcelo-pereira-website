import { Footer } from "@/components";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head />
      <body className="h-screen flex flex-col bg-indigo-50">
        <main className="flex justify-center items-center flex-1 px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
