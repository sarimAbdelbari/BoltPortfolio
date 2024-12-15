'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Github, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects-data';
import { notFound } from 'next/navigation';

interface ProjectDetailsProps {
  slug: string;
}

export function ProjectDetails({ slug }: ProjectDetailsProps) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Array of preview images for the project
  const previewImages = [
    project.image,
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4">
        <Button
          variant="ghost"
          className="mb-8"
          asChild
        >
          <Link href="/#projects" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
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
            </div>

            <div className="space-y-6">
              {previewImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative h-[300px] rounded-lg overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${project.title} preview ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}