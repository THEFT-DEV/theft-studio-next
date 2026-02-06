import { notFound } from 'next/navigation';
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
    <article className="container mx-auto px-4 py-16 max-w-3xl">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center text-sm text-gray-600 hover:text-black mb-8"
      >
        ← Back to Blog
      </Link>

      {/* Featured Image Placeholder */}
      <div className="aspect-video bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
        <span className="text-gray-400">Blog Image</span>
      </div>

      {/* Meta */}
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          {post.categories.map((cat) => (
            <span key={cat} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
              {cat}
            </span>
          ))}
        </div>
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <time>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{post.author}</span>
        </div>
      </div>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none mb-16"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex gap-2 mb-16">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 border border-gray-300 rounded-full text-sm">
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Navigation */}
      <div className="border-t pt-8 mt-16">
        <div className="flex justify-between items-center">
          {prevPost ? (
            <Link href={`/blog/${prevPost.slug}`} className="group">
              <span className="text-sm text-gray-500">Previous Post</span>
              <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">
                {prevPost.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} className="group text-right">
              <span className="text-sm text-gray-500">Next Post</span>
              <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">
                {nextPost.title}
              </h3>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
