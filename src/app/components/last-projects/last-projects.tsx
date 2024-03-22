import { lastProjects } from "@/app/lib";
import { GithubLogo, Link } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export function LastProjects() {
  return (
    <section id="last-projects" className="px-6 py-16 lg:px-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-center mb-8 lg:text-4xl lg:mb-12">
          Últimos projetos
        </h2>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-20">
          {lastProjects.map(
            ({ name, githubLink, previewLink, stack, thumb, projectType }) => (
              <article key={name} className="space-y-4">
                <header>
                  <h3 className="text-lg font-semibold lg:text-xl">{name}</h3>
                  <span className="text-indigo-600 font-semibold">
                    {projectType}
                  </span>
                </header>

                <Image
                  src={thumb}
                  alt="Screenshot do projeto"
                  placeholder="blur"
                  className="border border-zinc-300 rounded shadow-lg shadow-indigo-100"
                />
                <div>
                  <span className="block text-sm font-bold mb-4">
                    Tecnologias:
                  </span>
                  <ul className="flex flex-wrap gap-2 ">
                    {stack.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-indigo-600 font-semibold border border-indigo-600 p-1 rounded"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <footer className="">
                  <aside className="flex gap-6 pt-4 border-t">
                    {githubLink && (
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-semibold hover:underline underline-offset-4"
                      >
                        <GithubLogo className="size-5" />
                        Github
                      </a>
                    )}

                    {previewLink && (
                      <a
                        href={previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-semibold hover:underline underline-offset-4"
                      >
                        <Link />
                        Preview
                      </a>
                    )}
                  </aside>
                </footer>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
