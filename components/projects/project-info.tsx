'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Globe } from 'lucide-react';
import type { Project } from '@/lib/projects-data';

interface ProjectInfoProps {
  project: Project;
}

export function ProjectInfo({ project }: ProjectInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-muted-foreground">{project.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Project Details</h2>
        <div className="space-y-2 text-muted-foreground">
          <p>Role: {project.role}</p>
          <p>Duration: {project.duration}</p>
          <p>Company: {project.company}</p>
        </div>
      </div>

      <div className="flex gap-4">
        {project.github && (
          <Button asChild>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              View Source
            </a>
          </Button>
        )}
        {project.demo && (
          <Button asChild>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}