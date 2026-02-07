import Link from 'next/link';
import Image from 'next/image';
import { jasonProjects } from '@/content/team/jason/projects';

export const metadata = {
  title: 'Jason\'s Projects - THEFT Studio',
  description: 'Browse all projects by Jason Poindexter.',
};

export default function JasonProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Link
        href="/team/jason"
        className="inline-flex items-center text-sm text-gray-600 hover:text-black mb-8"
      >
        ← Back to Jason's Profile
      </Link>

      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Jason's Projects</h1>
        <p className="text-xl text-gray-600">
          {jasonProjects.length} projects spanning automotive, healthcare, e-commerce, entertainment, and enterprise sectors.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jasonProjects.map((project) => (
          <article key={project.id} className="group">
            <Link href={`/team/jason/projects/${project.slug}`}>
              <div className="aspect-[4/3] mb-4 bg-gray-200 rounded-lg overflow-hidden relative">
                {project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    {project.title}
                  </div>
                )}
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{project.excerpt}</p>
              {project.categories.length > 0 && (
                <div className="flex gap-2 flex-wrap">
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
