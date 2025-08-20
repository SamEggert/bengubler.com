import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import { T, useGT } from "gt-next";
import { getGT } from "gt-next/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getGT();

  return {
    title: t("Page Not Found - Ben Gubler"),
    description: t("The page you're looking for doesn't exist."),
  };
}

export default function NotFound() {
  const t = useGT();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
        <T>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Page Not Found
          </h2>
        </T>
        <T>
          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </T>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Button asChild>
          <Link href="/">{t("Go Home")}</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/posts">{t("View Posts")}</Link>
        </Button>
      </div>
    </div>
  );
}
