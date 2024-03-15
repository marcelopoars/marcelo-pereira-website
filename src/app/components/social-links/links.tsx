import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

type SocialItem = "GitHub" | "Linkedin" | "Youtube" | "Instagram";

type LinkProps = {
  name: SocialItem;
  url: string;
  icon: JSX.Element;
};

export const links: LinkProps[] = [
  {
    name: "GitHub",
    url: "https://github.com/marcelopoars",
    icon: <GithubLogo className="size-6" weight="duotone" />,
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/marcelopoars",
    icon: <LinkedinLogo className="size-6" weight="duotone" />,
  },
  {
    name: "Youtube",
    url: "https://youtube.com/DicaDoNerd",
    icon: <YoutubeLogo className="size-6" weight="duotone" />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/dicadonerd",
    icon: <InstagramLogo className="size-6" weight="duotone" />,
  },
];
