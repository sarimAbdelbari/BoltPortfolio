'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Project } from '@/lib/projects-data';

interface ProjectGalleryProps {
  project: Project;
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const previewImages = [
    project.image,
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
  ];

  return (
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
            alt={`Project preview ${index + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}