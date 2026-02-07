import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/content';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} - THEFT Studio Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const nextPost = allPosts[currentIndex + 1];
  const prevPost = allPosts[currentIndex - 1];

  return (
    <article className="min-h-screen">
      <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-light tracking-tight text-gray-600 hover:opacity-60 transition-opacity mb-12"
        >
          ← Back to Research
        </Link>

        {/* Featured Image */}
        {post.thumbnail && (
          <div className="aspect-video bg-gray-100 mb-12 relative overflow-hidden">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Meta */}
        <div className="mb-16">
          <div className="flex gap-2 mb-6 flex-wrap">
            {post.categories.map((cat) => (
              <span
                key={cat}
                className="text-xs px-3 py-1 border border-black/10 font-light tracking-tight"
              >
                {cat}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="w-12 h-px bg-black mb-6"></div>
          <div className="flex items-center gap-4 text-xs text-gray-500 font-light tracking-tight">
            <time>{formatDate(post.date)}</time>
          </div>
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none mb-16 font-light leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex gap-2 mb-16 flex-wrap">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-black/10 text-xs font-light tracking-tight"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Navigation */}
        <div className="border-t border-black/10 pt-12 mt-24">
          <div className="grid md:grid-cols-2 gap-8">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`} className="group">
                <span className="text-xs text-gray-500 font-light tracking-tight mb-2 block">
                  Previous Article
                </span>
                <h3 className="text-lg md:text-xl font-light tracking-tight group-hover:opacity-60 transition-opacity">
                  {prevPost.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group md:text-right"
              >
                <span className="text-xs text-gray-500 font-light tracking-tight mb-2 block">
                  Next Article
                </span>
                <h3 className="text-lg md:text-xl font-light tracking-tight group-hover:opacity-60 transition-opacity">
                  {nextPost.title}
                </h3>
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
