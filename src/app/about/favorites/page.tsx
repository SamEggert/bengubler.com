import type { Metadata } from "next";
import { getGT } from "gt-next/server";
import { T, useGT } from "gt-next";

type FavoriteItem = {
  name: string;
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
    title: t("Favorites - Ben Gubler"),
    description: t("Ben Gubler's favorite books, movies, and personal recommendations."),
  };
}

const getFavorites = (t: (content: string) => string): FavoriteSection[] => [
  {
    category: t("Books"),
    subsections: [
      {
        title: t("Classics"),
        items: [
          { name: "The Brothers Karamazov" },
          { name: "The Death of Ivan Ilyich" },
          { name: "Les Misérables" },
          { name: "Things Fall Apart" },
          { name: "Animal Farm" },
          { name: "A River Runs Through It" },
          { name: "The Little Prince" },
          { name: "A Tale of Two Cities" },
          { name: "The Picture of Dorian Gray" },
          { name: "Brave New World" },
          { name: "Fahrenheit 451" },
        ],
      },
      {
        title: t("Faith"),
        items: [
          { name: "The Book of Mormon" },
          { name: "The Bible" },
          { name: "The Screwtape Letters" },
          { name: "Jesus the Christ" },
        ],
      },
      {
        title: t("Fantasy"),
        items: [
          { name: "The Lord of the Rings" },
          { name: "The Stormlight Archive" },
          { name: "Inkheart Series" },
          { name: "The Queen's Thief Series" },
        ],
      },
      {
        title: t("Other"),
        items: [
          { name: "The Hiding Place" },
          { name: "Just Mercy" },
          { name: "44 Scotland Street" },
        ],
      },
    ],
  },
  {
    category: t("Movies"),
    subsections: [
      {
        title: t("American"),
        items: [
          { name: "Fiddler on the Roof" },
          { name: "A River Runs Through It" },
          { name: "The Founder" },
          { name: "The Prestige" },
          { name: "Interstellar" },
        ],
      },
      {
        title: t("International"),
        items: [
          { name: "Jojo Rabbit" },
          { name: "Hunt for the Wilderpeople" },
          { name: "Pelíšky" },
        ],
      },
    ],
  },
];

export default function FavoritesPage() {
  const t = useGT();
  const favorites = getFavorites(t);
  
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <T>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Favorites
          </h1>
        </T>
        <T>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Books, movies, and other things I love and recommend.
          </p>
        </T>
      </header>

      {favorites.map((section) => (
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
                      {item.name}
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
