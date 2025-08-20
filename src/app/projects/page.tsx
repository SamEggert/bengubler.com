import { getProjectsData } from '@/lib/projects'; // This requires a t function to be passed into it
import { ProjectList } from "@/components/project-list";
import type { Metadata } from "next";
import { T } from "gt-next";
import { getGT } from "gt-next/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getGT();
  
  return {
    title: t("Projects - Ben Gubler"),
    description: t(
      "A collection of Ben Gubler's projects, from featured work to experimental builds."
    ),
  };
}

export default async function ProjectsPage() {
  const t = await getGT();
  const projectsData = getProjectsData(t);
  
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <T>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Projects
          </h1>
        </T>
        <T>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A collection of things I've built over the years, from open-source
            libraries to web applications and browser extensions.
          </p>
        </T>
      </header>

      {projectsData.map((section) => (
        <section key={section.category} className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {section.category}
          </h2>
          <ProjectList projects={section.projects} />
        </section>
      ))}
    </div>
  );
}
