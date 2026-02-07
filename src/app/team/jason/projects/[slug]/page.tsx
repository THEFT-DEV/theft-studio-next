import { notFound } from 'next/navigation';
import Image from 'next/image';
import { jasonProjects } from '@/content/team/jason/projects';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

export async function generateStaticParams() {
  return jasonProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = jasonProjects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} - Jason Poindexter - THEFT Studio`,
    description: project.excerpt,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = jasonProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = jasonProjects.findIndex((p) => p.slug === slug);
  const nextProject = jasonProjects[currentIndex + 1];
  const prevProject = jasonProjects[currentIndex - 1];

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Back Link */}
      <Link
        href="/team/jason/projects"
        className="inline-flex items-center text-sm text-gray-600 hover:text-black mb-8"
      >
        ← Back to Jason's Projects
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

      {/* Image Gallery */}
      {project.images && project.images.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Project Images</h2>
          <div className="grid gap-8">
            {project.images.map((image, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="border-t pt-8 mt-16">
        <div className="flex justify-between items-center">
          {prevProject ? (
            <Link
              href={`/team/jason/projects/${prevProject.slug}`}
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
              href={`/team/jason/projects/${nextProject.slug}`}
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
