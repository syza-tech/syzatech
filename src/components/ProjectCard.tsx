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
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative h-[240px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-secondary mb-3">
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
      </CardContent>
    </Card>
  );
};

export default ProjectCard;