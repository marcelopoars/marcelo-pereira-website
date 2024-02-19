import { links } from "./links";

type SocialItem = "GitHub" | "Linkedin" | "Youtube" | "Instagram";

interface SocialLinksProps {
  items?: SocialItem[];
}

const defaultItems: SocialItem[] = [
  "GitHub",
  "Linkedin",
  "Youtube",
  "Instagram",
];

export const SocialLinks = ({ items = defaultItems }: SocialLinksProps) => {
  return (
    <aside className="max-w-2xl flex justify-center flex-wrap gap-2 lg:gap-8">
      {links
        .filter(({ name }) => items.includes(name))
        .map(({ name, url, icon }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 rounded-md transition outline-indigo-200 lg:hover:bg-indigo-300/15"
            aria-label={`Ir para ${name}`}
          >
            {icon}
            <span className="hidden lg:block">{name}</span>
          </a>
        ))}
    </aside>
  );
};
