import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="border-none shadow-lg h-full">
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-[300px] overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              {project.title}
            </h3>
            <p className="text-secondary/80 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
              >
                Visit Project
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;