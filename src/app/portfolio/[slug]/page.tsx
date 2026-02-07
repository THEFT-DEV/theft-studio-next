import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProjects, getProjectBySlug } from '@/lib/content';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} - THEFT Studio`,
    description: project.excerpt,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[currentIndex + 1];
  const prevProject = allProjects[currentIndex - 1];

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Back Link */}
      <Link
        href="/portfolio"
        className="inline-flex items-center text-sm text-gray-600 hover:text-black mb-8"
      >
        ← Back to Portfolio
      </Link>

      {/* Hero Image */}
      <div className="aspect-video bg-gray-200 rounded-lg mb-8 relative overflow-hidden">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl font-medium">
            {project.title}
          </div>
        )}
      </div>

      {/* Meta */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-600 mb-4">{project.excerpt}</p>
        <div className="flex gap-4 text-sm text-gray-500 mb-4">
          <time>{formatDate(project.date)}</time>
        </div>
        {project.categories.length > 0 && (
          <div className="flex gap-2">
            {project.categories.map((cat) => (
              <span key={cat} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none mb-16"
        dangerouslySetInnerHTML={{ __html: project.content }}
      />

      {/* Navigation */}
      <div className="border-t pt-8 mt-16">
        <div className="flex justify-between items-center">
          {prevProject ? (
            <Link
              href={`/portfolio/${prevProject.slug}`}
              className="group"
            >
              <span className="text-sm text-gray-500">Previous Project</span>
              <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">
                {prevProject.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
          {nextProject && (
            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="group text-right"
            >
              <span className="text-sm text-gray-500">Next Project</span>
              <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">
                {nextProject.title}
              </h3>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
