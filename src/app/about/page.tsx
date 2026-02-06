export const metadata = {
  title: 'About - THEFT Studio',
  description: 'Learn more about THEFT Studio and our approach to design.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-5xl font-bold mb-8">About THEFT Studio</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          We are a design agency specializing in digital experiences, branding,
          and web design.
        </p>

        <h2 className="text-3xl font-bold mb-4 mt-12">Our Approach</h2>
        <p className="text-gray-700">
          We believe in creating meaningful digital experiences that connect
          brands with their audiences. Our process is collaborative,
          user-centered, and driven by a passion for exceptional design.
        </p>

        <h2 className="text-3xl font-bold mb-4 mt-12">What We Do</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Web Design & Development</li>
          <li>Brand Identity & Strategy</li>
          <li>UI/UX Design</li>
          <li>Digital Marketing</li>
          <li>Content Strategy</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4 mt-12">Let's Work Together</h2>
        <p className="text-gray-700">
          Ready to start your next project? Get in touch and let's create
          something amazing.
        </p>
      </div>
    </div>
  );
}
