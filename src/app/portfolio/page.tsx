import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '@/lib/content';

export const metadata = {
  title: 'Portfolio - THEFT Studio',
  description: 'Our latest work and projects.',
};

export default function PortfolioPage() {
  const projects = getProjects();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Our Work</h1>
        <p className="text-xl text-gray-600">
          Selected projects showcasing our design expertise.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article key={project.id} className="group">
            <Link href={`/portfolio/${project.slug}`}>
              <div className="aspect-[4/3] mb-4 bg-gray-200 rounded-lg overflow-hidden relative">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{project.excerpt}</p>
              {project.categories.length > 0 && (
                <div className="flex gap-2">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
