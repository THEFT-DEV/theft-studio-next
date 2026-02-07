import Link from 'next/link';
import { getIrisBio } from '@/content/team/iris/bio';
import { getBlogPosts } from '@/lib/content';

export const metadata = {
  title: 'Iris Latour - THEFT Studio',
  description: 'UX Researcher & Design Strategist specializing in inclusive design and accessibility.',
};

export default function IrisPage() {
  const bio = getIrisBio();
  const irisPosts = getBlogPosts().filter(post => post.author === 'iris.latour').slice(0, 6);

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
              IL
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

      {/* Featured Writing */}
      {irisPosts.length > 0 && (
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold">Featured Writing</h2>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              View All Articles →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {irisPosts.map((post) => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-video mb-4 bg-gray-200 rounded-lg overflow-hidden relative">
                    {post.thumbnail ? (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">
                        {post.title.substring(0, 30)}...
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">
                        {post.title.substring(0, 30)}...
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                  <div className="flex gap-2">
                    {post.categories.slice(0, 2).map((cat) => (
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
      )}
    </div>
  );
}
