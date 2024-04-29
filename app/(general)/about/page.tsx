import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tato Developer',
  description: 'This is a description about myself as a web developer.',
  keywords: ['About Page', 'Antonio', 'Information']
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
      <ul>
        <li>
          Bio: About to share a concise biography that includes my professional background, key skills, and any specialties in web development.
        </li>
        <li>
          Education & Certifications: List of my relevant educational background and certifications.
        </li>
        <li>
          Personal Touch: Some personal anecdotes or interests to give a glimpse of my personality.
        </li>
      </ul>
    </>
  )

}
