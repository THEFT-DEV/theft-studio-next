import Link from 'next/link';

export const metadata = {
  title: 'About - THEFT Studio',
  description: 'Award-winning design agency specializing in digital experiences, branding, and web design. Learn about our approach and expertise.',
};

export default function AboutPage() {
  const services = [
    {
      title: 'Web Design & Development',
      description: 'Custom websites built with modern technologies like Next.js, React, and TypeScript.',
    },
    {
      title: 'Brand Identity & Strategy',
      description: 'Complete brand systems from logo design to brand guidelines and visual identity.',
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that prioritizes usability and creates delightful experiences.',
    },
    {
      title: 'Digital Strategy',
      description: 'Strategic planning and consulting to elevate your digital presence.',
    },
  ];

  const stats = [
    { label: 'Projects Delivered', value: '100+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Design Awards', value: '15+' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">About THEFT Studio</h1>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
          We are an award-winning design agency specializing in creating
          exceptional digital experiences. Our team combines strategic thinking
          with creative excellence to deliver work that not only looks beautiful
          but drives real results.
        </p>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <h2 className="text-4xl font-bold mb-8">Our Approach</h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            We believe in creating meaningful digital experiences that connect
            brands with their audiences. Our process is collaborative,
            user-centered, and driven by a passion for exceptional design.
          </p>
          <p>
            Every project begins with understanding your goals, audience, and
            challenges. We then craft solutions that are not only visually
            stunning but strategically sound and technically excellent.
          </p>
          <p>
            Our team stays on the cutting edge of design and technology trends,
            ensuring your brand remains relevant and competitive in an
            ever-evolving digital landscape.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-black text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to start your next project? Get in touch and let's create
            something extraordinary.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
