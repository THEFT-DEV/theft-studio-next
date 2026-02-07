import { Page } from '@/types';

export const jasonBio: Page = {
  id: 1,
  title: "Jason Poindexter",
  slug: "jason",
  content: `
    <h1>Jason Poindexter</h1>
    <h2>UX Design Director</h2>

    <p>With over 15 years of experience in user experience design, Jason has led design initiatives for major brands including Microsoft, Mercedes-Benz, Royal Caribbean, Overstock.com, and many others. His work spans multiple industries from automotive and healthcare to entertainment and e-commerce.</p>

    <h3>Expertise</h3>
    <ul>
      <li>User Experience Design</li>
      <li>Product Strategy</li>
      <li>Design Systems</li>
      <li>Mobile & Web Applications</li>
      <li>Enterprise Software</li>
      <li>E-commerce Platforms</li>
    </ul>

    <h3>Selected Clients</h3>
    <ul>
      <li>Microsoft</li>
      <li>Mercedes-Benz</li>
      <li>Volkswagen</li>
      <li>Royal Caribbean</li>
      <li>Overstock.com</li>
      <li>PNC Bank</li>
      <li>Glassdoor</li>
      <li>Oprah Winfrey Network</li>
      <li>American Express (Serve)</li>
      <li>Pearl Jam</li>
    </ul>

    <h3>Design Philosophy</h3>
    <p>Jason believes in creating inclusive, user-centered designs that solve real problems. His approach combines rigorous research, iterative design, and strategic thinking to deliver solutions that are both beautiful and functional. He specializes in simplifying complex systems and creating intuitive experiences that users love.</p>

    <p>Throughout his career, Jason has been passionate about:</p>
    <ul>
      <li><strong>Inclusive Design:</strong> Creating products accessible to everyone</li>
      <li><strong>Simplicity:</strong> Finding elegant solutions to complex problems</li>
      <li><strong>Impact:</strong> Focusing on the 20% of effort that creates 80% of value</li>
      <li><strong>Collaboration:</strong> Working closely with teams and stakeholders</li>
    </ul>
  `
};

export function getJasonBio(): Page {
  return jasonBio;
}
