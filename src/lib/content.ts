import fs from 'fs';
import path from 'path';
import { Project, BlogPost } from '@/types';

const contentDir = path.join(process.cwd(), 'content');

// Temporary sample data until we import WordPress content
export function getProjects(): Project[] {
  return [
    {
      id: 1,
      title: 'E-commerce Redesign',
      slug: 'ecommerce-redesign',
      content: '<p>Complete redesign of a modern e-commerce platform with focus on UX and conversion.</p>',
      excerpt: 'Complete redesign of a modern e-commerce platform.',
      date: '2025-12-15',
      thumbnail: '/images/projects/ecommerce.jpg',
      categories: ['Web Design', 'E-commerce'],
      tags: ['Figma', 'Next.js', 'Tailwind'],
    },
    {
      id: 2,
      title: 'Brand Identity System',
      slug: 'brand-identity',
      content: '<p>Comprehensive brand identity for a tech startup.</p>',
      excerpt: 'Comprehensive brand identity for a tech startup.',
      date: '2025-11-20',
      thumbnail: '/images/projects/branding.jpg',
      categories: ['Branding', 'Identity'],
      tags: ['Illustrator', 'Branding'],
    },
    {
      id: 3,
      title: 'Mobile App Design',
      slug: 'mobile-app',
      content: '<p>User-centered mobile application design.</p>',
      excerpt: 'User-centered mobile application design.',
      date: '2025-10-10',
      thumbnail: '/images/projects/mobile.jpg',
      categories: ['Mobile', 'UI/UX'],
      tags: ['Figma', 'Mobile'],
    },
  ];
}

export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getProjects();
  return projects.find((p) => p.slug === slug);
}

export function getBlogPosts(): BlogPost[] {
  return [
    {
      id: 1,
      title: 'Design Trends for 2026',
      slug: 'design-trends-2026',
      content: '<p>Our take on the biggest design trends shaping the industry this year.</p>',
      excerpt: 'Our take on the biggest design trends shaping the industry.',
      date: '2026-01-15',
      author: 'THEFT Studio',
      thumbnail: '/images/blog/trends.jpg',
      categories: ['Design', 'Trends'],
      tags: ['Design', 'Trends', '2026'],
    },
    {
      id: 2,
      title: 'The Future of Web Design',
      slug: 'future-web-design',
      content: '<p>How AI and new technologies are changing web design forever.</p>',
      excerpt: 'How AI and new technologies are changing web design.',
      date: '2026-01-10',
      author: 'THEFT Studio',
      thumbnail: '/images/blog/future.jpg',
      categories: ['Web Design', 'Technology'],
      tags: ['AI', 'Web Design', 'Future'],
    },
  ];
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getBlogPosts();
  return posts.find((p) => p.slug === slug);
}

export function getProjectCategories(): string[] {
  const projects = getProjects();
  const categories = projects.flatMap((p) => p.categories);
  return [...new Set(categories)].sort();
}
