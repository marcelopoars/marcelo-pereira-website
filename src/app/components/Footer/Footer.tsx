import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-indigo-50 text-center p-6">
      <p>
        &copy; {new Date().getFullYear()} | Desenvolvido com <span className="animate-pulse">❤</span> por{" "}
        <Link href="https://marcelopereira.dev" target="_parent">
          Marcelo Pereira
        </Link>
      </p>
    </footer>
  );
};
