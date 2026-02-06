import Link from 'next/link';
import Image from 'next/image';
import { getProjects, getBlogPosts } from '@/lib/content';
import { formatDate } from '@/lib/utils';

export default function HomePage() {
  const featuredProjects = getProjects().slice(0, 3);
  const recentPosts = getBlogPosts().slice(0, 2);

  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          THEFT Studio
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Award-winning design agency specializing in digital experiences,
          branding, and web design.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/portfolio"
            className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Our Work
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Featured Work</h2>
            <Link
              href="/portfolio"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              View All Projects →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
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
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{project.excerpt}</p>
                  <div className="flex gap-2">
                    {project.categories.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className="text-xs px-2 py-1 bg-white rounded-full"
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
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'Web Design',
              description: 'Modern, responsive websites built with the latest technologies.',
            },
            {
              title: 'Branding',
              description: 'Complete brand identity design from concept to execution.',
            },
            {
              title: 'Digital Strategy',
              description: 'Strategic planning to elevate your digital presence.',
            },
          ].map((service) => (
            <div
              key={service.title}
              className="p-6 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Latest Insights</h2>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              View All Posts →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {recentPosts.map((post) => (
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
                    {post.categories.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className="text-xs px-2 py-1 bg-white rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{post.excerpt}</p>
                  <div className="text-sm text-gray-500">
                    <time>{formatDate(post.date)}</time>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create something extraordinary together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
