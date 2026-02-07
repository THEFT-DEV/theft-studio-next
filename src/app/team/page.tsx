import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Our Team - THEFT Studio',
  description: 'Meet the designers and researchers behind THEFT Studio.',
};

const teamMembers = [
  {
    name: 'Jason Poindexter',
    role: 'UX Design Director',
    slug: 'jason',
    bio: 'With over 15 years of experience, Jason has led design initiatives for Microsoft, Mercedes-Benz, Royal Caribbean, and many other major brands.',
    image: '/images/team/jason-avatar.jpg',
    projects: 23,
  },
  {
    name: 'Iris Latour',
    role: 'UX Researcher & Design Strategist',
    slug: 'iris',
    bio: 'Iris specializes in inclusive design and accessibility, conducting research that shapes more equitable digital experiences.',
    image: '/images/team/iris-avatar.jpg',
    projects: 7,
  },
];

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-bold mb-6">Our Team</h1>
        <p className="text-xl text-gray-600">
          THEFT Studio is led by experienced design professionals who are passionate
          about creating inclusive, user-centered experiences that solve real problems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {teamMembers.map((member) => (
          <article key={member.slug} className="group">
            <Link href={`/team/${member.slug}`}>
              <div className="mb-6">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative mb-4">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-6xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h2>
                <p className="text-lg text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-700 mb-4">{member.bio}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{member.projects} Projects</span>
                </div>
              </div>
              <div className="text-blue-600 font-medium group-hover:underline">
                View Profile →
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
