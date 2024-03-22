import { CTALink } from "..";

export function Hero() {
  return (
    <section className="bg-indigo-100/25 px-6 py-16 lg:py-28 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 className=" mx-auto text-[2.5rem] text-center font-black leading-normal lg:leading-[1.4] lg:text-7xl">
          Criação de{" "}
          <strong className="text-indigo-600 font-black">sites</strong>,{" "}
          <strong className="text-indigo-600 font-black whitespace-nowrap">landing pages</strong>{" "}
          <strong className="text-indigo-600 font-black whitespace-nowrap">aplicações web</strong>{" "}
          e <strong className="text-indigo-600 font-black">APIs</strong>.
        </h2>

        <div className="flex flex-col gap-4 md:flex-row md:justify-center md:gap-6">
          <CTALink href="/#last-projects">
            Ver projetos
          </CTALink>
          <CTALink
            href="https://api.whatsapp.com/send?phone=5551981838118&text=Ol%C3%A1!"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Contato
          </CTALink>
        </div>
      </div>
    </section>
  );
}
