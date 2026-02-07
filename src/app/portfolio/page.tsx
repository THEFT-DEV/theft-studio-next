import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '@/lib/content';

export const metadata = {
  title: 'Projects - THEFT Studio',
  description: 'Selected projects showcasing our research and design expertise.',
};

export default function PortfolioPage() {
  const projects = getProjects();

  return (
    <div className="min-h-screen">
      <section className="max-w-container mx-auto px-grid-4 md:px-grid-8 py-grid-8 md:py-grid-12">
        <div className="mb-grid-8 md:mb-grid-12">
          <h1 className="text-display-md md:text-display-lg mb-grid-4">
            PROJECTS
          </h1>
          <div className="divider-solid mb-grid-6"></div>
          <p className="text-headline-lg opacity-70 max-w-2xl">
            A THOUGHTFUL COLLECTION OF WORK THAT BLENDS RESEARCH, STRATEGY,
            AND DESIGN TO CREATE MEANINGFUL DIGITAL EXPERIENCES.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-grid-8 md:gap-grid-12">
          {projects.map((project) => (
            <article key={project.id} className="group">
              <Link href={`/portfolio/${project.slug}`}>
                <div className="aspect-[4/3] mb-grid-4 bg-muted overflow-hidden relative border border-border">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-label opacity-40">
                      {project.title}
                    </div>
                  )}
                </div>
                <h2 className="text-headline-lg mb-grid-3 group-hover:opacity-60 transition-opacity duration-150">
                  {project.title.toUpperCase()}
                </h2>
                {project.excerpt && (
                  <p className="text-body opacity-70 mb-grid-4">
                    {project.excerpt}
                  </p>
                )}
                {project.categories.length > 0 && (
                  <div className="flex gap-grid-2 mb-grid-4 flex-wrap">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-label px-grid-2 py-grid-1 border border-border"
                      >
                        {cat.toUpperCase()}
                      </span>
                    ))}
                  </div>
                )}
                <div className="link-arrow">
                  VIEW PROJECT
                  <span className="arrow">→</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
