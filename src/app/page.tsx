import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-6xl font-bold mb-6">
          THEFT Studio
        </h1>
        <p className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Award-winning design agency specializing in digital experiences,
          branding, and web design.
        </p>
        <div className="flex gap-4 justify-center">
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

      {/* Services Preview */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
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
            <div key={service.title} className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
