'use client';

import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="max-w-container mx-auto px-grid-4 md:px-grid-8 py-grid-8 md:py-grid-12 max-w-3xl">
        <div className="mb-grid-8 md:mb-grid-12">
          <h1 className="text-display-md md:text-display-lg mb-grid-4">
            CONTACT
          </h1>
          <div className="divider-solid mb-grid-6"></div>
          <p className="text-headline-lg opacity-70">
            HAVE A PROJECT IN MIND? LET'S DISCUSS HOW WE CAN HELP BRING YOUR
            VISION TO LIFE THROUGH THOUGHTFUL RESEARCH AND DESIGN.
          </p>
        </div>

        {status === 'success' && (
          <div className="mb-grid-6 p-grid-4 border border-border bg-muted">
            <p className="text-button mb-grid-1">THANK YOU FOR YOUR MESSAGE.</p>
            <p className="text-body opacity-70">
              We'll get back to you as soon as possible.
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="mb-grid-6 p-grid-4 border border-destructive bg-destructive/10">
            <p className="text-button mb-grid-1 text-destructive-foreground">
              SOMETHING WENT WRONG.
            </p>
            <p className="text-body text-destructive-foreground opacity-70">{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-grid-6">
          <div>
            <label
              htmlFor="name"
              className="block text-label mb-grid-2"
            >
              NAME *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field w-full"
              required
              disabled={status === 'loading'}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-label mb-grid-2"
            >
              EMAIL *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field w-full"
              required
              disabled={status === 'loading'}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-label mb-grid-2"
            >
              MESSAGE *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-grid-2 py-grid-2 border border-border bg-transparent font-mono text-body resize-none transition-border-color duration-150 focus:outline-none focus:border-foreground"
              required
              disabled={status === 'loading'}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
          </button>
        </form>

        <div className="mt-grid-8 pt-grid-6 border-t border-border">
          <h2 className="text-headline-lg mb-grid-4">
            OTHER WAYS TO REACH US
          </h2>
          <div className="space-y-grid-2 text-body opacity-70">
            <p>
              EMAIL:{' '}
              <a
                href="mailto:hello@theft.studio"
                className="border-b border-transparent hover:border-foreground transition-border-color duration-150"
              >
                hello@theft.studio
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
