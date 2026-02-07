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
    <article className="min-h-screen">
      <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
        {/* Back Link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center text-sm font-light tracking-tight text-gray-600 hover:opacity-60 transition-opacity mb-12"
        >
          ← Back to Projects
        </Link>

        {/* Hero Image */}
        {project.thumbnail && (
          <div className="aspect-[16/10] bg-gray-100 mb-12 relative overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Meta */}
        <div className="mb-16">
          <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-6 leading-tight">
            {project.title}
          </h1>
          <div className="w-12 h-px bg-black mb-8"></div>
          {project.excerpt && (
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-6">
              {project.excerpt}
            </p>
          )}
          <div className="flex gap-4 text-xs text-gray-500 font-light tracking-tight mb-6">
            <time>{formatDate(project.date)}</time>
          </div>
          {project.categories.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 border border-black/10 text-xs font-light tracking-tight"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none mb-16 font-light leading-relaxed"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />

        {/* Navigation */}
        <div className="border-t border-black/10 pt-12 mt-24">
          <div className="grid md:grid-cols-2 gap-8">
            {prevProject ? (
              <Link
                href={`/portfolio/${prevProject.slug}`}
                className="group"
              >
                <span className="text-xs text-gray-500 font-light tracking-tight mb-2 block">
                  Previous Project
                </span>
                <h3 className="text-lg md:text-xl font-light tracking-tight group-hover:opacity-60 transition-opacity">
                  {prevProject.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}
            {nextProject && (
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="group md:text-right"
              >
                <span className="text-xs text-gray-500 font-light tracking-tight mb-2 block">
                  Next Project
                </span>
                <h3 className="text-lg md:text-xl font-light tracking-tight group-hover:opacity-60 transition-opacity">
                  {nextProject.title}
                </h3>
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
