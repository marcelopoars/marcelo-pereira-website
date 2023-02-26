import Link from "next/link";

export const SocialLinks = () => {
  const links = [
    { name: "GitHub", url: "https://github.com/marcelopoars" },
    { name: "Linkedin", url: "https://linkedin.com/in/marcelopoars" },
    { name: "Youtube", url: "https://youtube.com/DicaDoNerd" },
    { name: "Instagram", url: "https://instagram.com/dicadonerd" },
  ];

  return (
    <aside className="flex justify-center flex-wrap gap-4">
      {links.map(({ name, url }) => (
        <Link
          key={url}
          className="social-links"
          href={url}
          target={"_blank"}
          title={`Ir para ${name}`}
        >
          {name}
        </Link>
      ))}
    </aside>
  );
};
