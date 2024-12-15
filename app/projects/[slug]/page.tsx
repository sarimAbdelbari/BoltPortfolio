import { projects } from '@/lib/projects-data';
import { ProjectDetails } from '@/components/projects/project-details';

// Generate static params for all project slugs
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectDetails slug={params.slug} />;
}