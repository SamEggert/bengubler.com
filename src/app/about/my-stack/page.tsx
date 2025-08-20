import type { Metadata } from "next";
import Link from "next/link";
import { getGT } from "gt-next/server";
import { T, useGT } from "gt-next";

type FavoriteItem = {
  name: string;
  link?: string;
};

type FavoriteSubsection = {
  title: string;
  items: FavoriteItem[];
};

type FavoriteSection = {
  category: string;
  subsections: FavoriteSubsection[];
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getGT();
  
  return {
    title: t("My Stack - Ben Gubler"),
    description: t("Technologies, apps, and tools that Ben Gubler uses for development and productivity."),
  };
}

const getStack = (t: (content: string) => string): FavoriteSection[] => [
  {
    category: t("Hardware"),
    subsections: [
      {
        title: t("Computers"),
        items: [
          { name: t("MacBook Pro (work)") },
          { name: t("Dell XPS 15 (personal)") },
        ],
      },
      {
        title: t("Peripherals"),
        items: [
          { name: "NuPhy Air75 V3 Keyboard" },
          { name: "MX Master 3S Mouse" },
        ],
      },
    ],
  },
  {
    category: t("Software"),
    subsections: [
      {
        title: t("Operating Systems"),
        items: [{ name: "macOS" }, { name: "Fedora Linux" }],
      },
      {
        title: t("Desktop & Terminal"),
        items: [
          { name: "GNOME Desktop" },
          { name: t("Cosmic Desktop (occasionally)") },
          { name: "Alacritty" },
        ],
      },
      {
        title: t("Development"),
        items: [{ name: t("Zed w/ Vim keybindings") }, { name: "Zen Browser" }],
      },
    ],
  },
  {
    category: t("Apps"),
    subsections: [
      {
        title: t("Language Learning"),
        items: [
          { name: "Anki", link: "https://apps.ankiweb.net" },
          { name: "Readlang", link: "https://readlang.com" },
          { name: "Pimsleur", link: "https://pimsleur.com" },
          { name: "Beelinguapp", link: "https://beelinguapp.com" },
          { name: t("my own tools"), link: "/language-learning" },
        ],
      },
      {
        title: t("Productivity & Life"),
        items: [
          { name: "Todoist" },
          { name: "Obsidian" },
          { name: "Monarch Money", link: "https://monarchmoney.com" },
          { name: "Wispr Flow" },
          { name: "Day One Journal" },
        ],
      },
    ],
  },
];

export default function MyStackPage() {
  const t = useGT();
  const stack = getStack(t);
  
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <T>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            My Stack
          </h1>
        </T>
        <T>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Technologies, apps, and tools I use for development and productivity.
          </p>
        </T>
      </header>

      {stack.map((section) => (
        <section key={section.category} className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {section.category}
          </h2>
          <div className="space-y-2">
            {section.subsections.map((subsection) => (
              <div key={subsection.title} className="space-y-1">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-bold text-foreground">
                    {subsection.title}
                  </span>
                  :{" "}
                  {subsection.items.map((item, index) => (
                    <span key={item.name}>
                      {item.link ? (
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:no-underline"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        item.name
                      )}
                      {index < subsection.items.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
