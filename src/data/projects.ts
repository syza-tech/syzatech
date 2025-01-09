import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    title: "Manager Saab",
    description: "A comprehensive management platform built with React and modern web technologies. Features include user authentication, dynamic dashboards, and responsive design for seamless management across devices.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
    link: "https://managersaab.lovable.app"
  },
  {
    title: "Healthcare Management System",
    description: "A comprehensive healthcare management system that streamlines patient records, appointments, and billing processes.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["React", "TypeScript", "Express", "PostgreSQL"],
  },
  {
    title: "Real Estate Platform",
    description: "A feature-rich real estate platform with virtual tours, property management, and automated scheduling system.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    technologies: ["Next.js", "Prisma", "AWS", "TailwindCSS"],
  },
];