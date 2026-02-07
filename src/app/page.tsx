import Link from 'next/link';
import Image from 'next/image';
import { getProjects, getBlogPosts } from '@/lib/content';

export default function HomePage() {
  const projects = getProjects();
  const recentPosts = getBlogPosts().slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-container mx-auto px-grid-4 md:px-grid-8 py-grid-12 md:py-grid-16">
        <div className="max-w-5xl">
          <h1 className="text-display-lg md:text-[64px] md:leading-[64px] mb-0">
            WE DESIGN CONSCIOUSLY CRAFTED DIGITAL EXPERIENCES FOR THOUGHTFUL BRANDS.
          </h1>
        </div>
      </section>

      {/* Project Grid */}
      <section className="max-w-container mx-auto px-grid-4 md:px-grid-8 py-grid-8 md:py-grid-12 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-8 md:gap-grid-12">
          {projects.map((project) => (
            <article key={project.id} className="group">
              <Link href={`/portfolio/${project.slug}`} className="block">
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
                <h3 className="text-headline-lg mb-grid-3 group-hover:opacity-60 transition-opacity duration-150">
                  {project.title.toUpperCase()}
                </h3>
                {project.excerpt && (
                  <p className="text-body opacity-70 mb-grid-4">
                    {project.excerpt}
                  </p>
                )}
                <div className="link-arrow inline-flex">
                  VIEW PROJECT
                  <span className="arrow">→</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Research Section */}
      {recentPosts.length > 0 && (
        <section className="max-w-container mx-auto px-grid-4 md:px-grid-8 py-grid-8 md:py-grid-12 border-t border-border">
          <div className="mb-grid-8 md:mb-grid-12">
            <h2 className="text-display-md mb-0">
              RESEARCH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid-8 md:gap-grid-12">
            {recentPosts.map((post) => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  {post.thumbnail && (
                    <div className="aspect-[4/3] mb-grid-4 bg-muted overflow-hidden relative border border-border">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <h3 className="text-headline-lg mb-grid-3 group-hover:opacity-60 transition-opacity duration-150">
                    {post.title.toUpperCase()}
                  </h3>
                  {post.excerpt && (
                    <p className="text-body opacity-70 mb-grid-4">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="link-arrow inline-flex">
                    READ MORE
                    <span className="arrow">→</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
