import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { getBlogPosts } from '@/lib/content';

export const metadata = {
  title: 'Research - THEFT Studio',
  description: 'Insights on design research, inclusive practices, and digital strategy.',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen">
      <section className="max-w-container mx-auto px-grid-4 md:px-grid-8 py-grid-8 md:py-grid-12">
        <div className="mb-grid-8 md:mb-grid-12">
          <h1 className="text-display-md md:text-display-lg mb-grid-4">
            RESEARCH
          </h1>
          <div className="divider-solid mb-grid-6"></div>
          <p className="text-headline-lg opacity-70 max-w-2xl">
            INSIGHTS ON DESIGN RESEARCH, INCLUSIVE PRACTICES, SYSTEMS THINKING,
            AND BUILDING BETTER DIGITAL EXPERIENCES.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-grid-8 md:gap-grid-12">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`}>
                {post.thumbnail && (
                  <div className="aspect-video mb-grid-4 bg-muted overflow-hidden relative border border-border">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex gap-grid-2 mb-grid-3 flex-wrap">
                  {post.categories.map((cat) => (
                    <span
                      key={cat}
                      className="text-label px-grid-2 py-grid-1 border border-border"
                    >
                      {cat.toUpperCase()}
                    </span>
                  ))}
                </div>
                <h2 className="text-headline-lg mb-grid-3 group-hover:opacity-60 transition-opacity duration-150">
                  {post.title.toUpperCase()}
                </h2>
                <p className="text-body opacity-70 mb-grid-3">
                  {post.excerpt}
                </p>
                <div className="text-label opacity-50 mb-grid-3">
                  <time>{formatDate(post.date).toUpperCase()}</time>
                </div>
                <div className="link-arrow">
                  READ ARTICLE
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
