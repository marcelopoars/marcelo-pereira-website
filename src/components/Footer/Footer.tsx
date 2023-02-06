import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-indigo-100 text-center p-6">
      <p>
        Desenvolvido com <span className="animate-pulse">❤</span> por{" "}
        <Link href="https://marcelopereira.dev" target="_parent">
          Marcelo Pereira
        </Link>
      </p>
    </footer>
  );
};
