'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BlogContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function BlogContainer({ children, className }: BlogContainerProps) {
  return (
    <div className={cn('min-h-screen pt-24 pb-16', className)}>
      <div className="container px-4 mx-auto max-w-7xl">
        {children}
      </div>
    </div>
  );
}