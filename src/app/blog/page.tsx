import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { getBlogPosts } from '@/lib/content';

export const metadata = {
  title: 'Blog - THEFT Studio',
  description: 'Thoughts on design, technology, and creativity.',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600">
          Thoughts on design, technology, and creativity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <Link href={`/blog/${post.slug}`}>
              <div className="aspect-video mb-4 bg-gray-200 rounded-lg overflow-hidden relative">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex gap-2 mb-2">
                {post.categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-3">{post.excerpt}</p>
              <div className="text-sm text-gray-500">
                <time>{formatDate(post.date)}</time>
                <span> • </span>
                <span>{post.author}</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
