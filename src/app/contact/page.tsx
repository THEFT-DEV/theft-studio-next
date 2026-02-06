export const metadata = {
  title: 'Contact - THEFT Studio',
  description: 'Get in touch with THEFT Studio.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-5xl font-bold mb-8">Get in Touch</h1>

      <p className="text-xl text-gray-600 mb-12">
        Have a project in mind? Let's talk about how we can help bring your
        vision to life.
      </p>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            required
          />
        </div>

        <button
          type="submit"
          className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
