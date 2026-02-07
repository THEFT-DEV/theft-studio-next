import Link from 'next/link';

export const metadata = {
  title: 'About - THEFT Studio',
  description: 'A research and design studio focused on creating meaningful, accessible, and beautiful products.',
};

export default function AboutPage() {
  const services = [
    {
      title: 'UX RESEARCH',
      description: 'Comprehensive user research and testing to inform design decisions with real insights.',
    },
    {
      title: 'PRODUCT DESIGN',
      description: 'Thoughtful interface design that prioritizes usability, accessibility, and elegance.',
    },
    {
      title: 'DESIGN SYSTEMS',
      description: 'Scalable design systems that maintain consistency while enabling creativity.',
    },
    {
      title: 'STRATEGIC CONSULTING',
      description: 'Strategic planning and design thinking to solve complex product challenges.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-container mx-auto px-grid-4 md:px-grid-8 py-grid-8 md:py-grid-12">
        <div className="max-w-4xl">
          <h1 className="text-display-md md:text-display-lg mb-grid-4">
            ABOUT
          </h1>
          <div className="divider-solid mb-grid-6"></div>
          <p className="text-headline-lg mb-grid-6">
            WE ARE A RESEARCH AND DESIGN STUDIO FOCUSED ON CREATING MEANINGFUL,
            ACCESSIBLE, AND BEAUTIFUL DIGITAL PRODUCTS.
          </p>
          <p className="text-headline-lg opacity-70">
            OUR PRACTICE IS BUILT ON INCLUSIVE DESIGN PRINCIPLES, SYSTEMS THINKING,
            AND A COMMITMENT TO UNDERSTANDING THE PEOPLE WE DESIGN FOR. WE BELIEVE
            GREAT DESIGN STARTS WITH GREAT RESEARCH.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-container mx-auto px-grid-4 md:px-grid-8 py-grid-8 md:py-grid-12 border-t border-border">
        <div className="max-w-4xl">
          <h2 className="text-display-md mb-grid-6">
            OUR APPROACH
          </h2>
          <div className="space-y-grid-6 text-body opacity-70">
            <p>
              We start with inclusivity rather than accessibility. By designing
              for diverse needs from the beginning, we create products that work
              better for everyone.
            </p>
            <p>
              Simplicity is at the core of our work. We believe in finding elegant
              solutions to complex problems through systems thinking and careful
              reduction.
            </p>
            <p>
              The Pareto principle guides our practice. We focus on the 20% of
              work that creates 80% of the impact, ensuring efficient and
              effective outcomes for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-container mx-auto px-grid-4 md:px-grid-8 py-grid-8 md:py-grid-12 border-t border-border">
        <div className="max-w-4xl">
          <h2 className="text-display-md mb-grid-8">
            WHAT WE DO
          </h2>
          <div className="grid md:grid-cols-2 gap-grid-6">
            {services.map((service) => (
              <div key={service.title} className="border-l border-border pl-grid-4">
                <h3 className="text-headline-lg mb-grid-3">
                  {service.title}
                </h3>
                <p className="text-body opacity-70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-container mx-auto px-grid-4 md:px-grid-8 py-grid-12 md:py-grid-16 border-t border-border">
        <div className="max-w-3xl">
          <h2 className="text-display-md md:text-display-lg mb-grid-6">
            LET'S CREATE SOMETHING MEANINGFUL TOGETHER.
          </h2>
          <Link
            href="/contact"
            className="link-arrow inline-flex"
          >
            START A CONVERSATION
            <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
