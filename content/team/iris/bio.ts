import { Page } from '@/types';

export const irisBio: Page = {
  id: 2,
  title: "Iris Latour",
  slug: "iris",
  content: `
    <h1>Iris Latour</h1>
    <h2>UX Researcher & Design Strategist</h2>

    <p>Iris is a UX researcher and design strategist with a passion for inclusive design and accessibility. Her work focuses on understanding user needs through rigorous research and translating insights into actionable design principles.</p>

    <h3>Expertise</h3>
    <ul>
      <li>User Research & Testing</li>
      <li>Inclusive Design</li>
      <li>Accessibility (WCAG/ADA Compliance)</li>
      <li>Design Strategy</li>
      <li>Qualitative & Quantitative Research</li>
      <li>Usability Testing</li>
    </ul>

    <h3>Design Philosophy</h3>
    <p>Iris believes that great design starts with inclusivity, not ends with accessibility. Her approach centers on understanding the full spectrum of human diversity and creating experiences that work for everyone from the ground up.</p>

    <p>Core principles guiding her work:</p>
    <ul>
      <li><strong>Start with Inclusivity:</strong> Design for the widest range of users from day one</li>
      <li><strong>Research-Driven:</strong> Let user insights guide every decision</li>
      <li><strong>Empathy First:</strong> Understand the human context behind every interaction</li>
      <li><strong>Measurable Impact:</strong> Focus on outcomes that improve people's lives</li>
    </ul>

    <h3>Writing & Thought Leadership</h3>
    <p>Iris regularly writes about UX research, inclusive design, and accessibility. Her articles explore how we can create more equitable digital experiences through thoughtful design practices.</p>
  `
};

export function getIrisBio(): Page {
  return irisBio;
}
