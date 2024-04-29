import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tato CV/Resume',
  description: 'Professional Overview: Offer a brief introduction about what can be expected in Tato CV',
  keywords: ['Web developer', 'developer', 'Resume'],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-6xl">CV/Resume Page</span>
      <span className="text-2xl">(former pricing page)</span>
      <ul>
        <li>
          Professional Overview: Introduction about what can be expected in my CV.
        </li>
        <li>
          <button type="button">My CV/Resume</button>
        </li>
        <li>
          Optional Interactive Resume: This would become an interactive version of my resume on the page itself, where users can click through different sections like education, experience, and skills.
        </li>
      </ul>
    </>
  )
}
