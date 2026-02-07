import Link from 'next/link';
import Image from 'next/image';
import { getJasonBio } from '@/content/team/jason/bio';
import { jasonProjects } from '@/content/team/jason/projects';

export const metadata = {
  title: 'Jason Poindexter - THEFT Studio',
  description: 'UX Design Director with over 15 years of experience leading design initiatives for major brands.',
};

export default function JasonPage() {
  const bio = getJasonBio();
  const projects = jasonProjects.slice(0, 6); // Show first 6 projects

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Back Link */}
      <Link
        href="/team"
        className="inline-flex items-center text-sm text-gray-600 hover:text-black mb-8"
      >
        ← Back to Team
      </Link>

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="aspect-square w-48 h-48 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-6xl font-bold">
              JP
            </div>
          </div>
          <div className="flex-1">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: bio.content }}
            />
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <Link
            href="/team/jason/projects"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            View All {jasonProjects.length} Projects →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
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
                    <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">
                      {project.title}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{project.excerpt}</p>
                <div className="flex gap-2">
                  {project.categories.slice(0, 2).map((cat) => (
                    <span
                      key={cat}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
