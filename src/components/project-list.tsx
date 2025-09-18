import Link from "next/link";
import type { Project } from "@/lib/projects";
import { useMessages, useGT } from "gt-next";

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  const m = useMessages();
  const gt = useGT();
  
  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <div key={project.name}>
          <div className="space-y-1">
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-bold text-foreground">
                {project.links.demo ? (
                  <Link
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                  >
                    {m(project.name)}
                  </Link>
                ) : (
                  m(project.name)
                )}
              </span>{" "}
              - {m(project.description)}
            </p>
            <p className="text-sm text-muted-foreground/80">
              {project.tech}
              {project.links.github && (
                <>
                  {" • "}
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                  >
                    {gt("GitHub")}
                  </Link>
                </>
              )}
            </p>
          </div>
          {index < projects.length - 1 && (
            <hr className="mt-4 border-border/50" />
          )}
        </div>
      ))}
    </div>
  );
}
