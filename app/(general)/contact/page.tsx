import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tato Contact',
  description: 'professional email and additional contact methods',
  appleWebApp: false,
  icons: 'icon.png'
};

export default function ContactPage() {
  return (
    <>
      <span className="text-6xl">Contact Page</span>
      <ul>
        <li>
          Contact Information: My professional email and additional contact methods.
        </li>
        <li>
          LinkedIn Profile: Included link to your LinkedIn profile, possibly with a LinkedIn badge.
        </li>
        <li>
          Contact Form: Optionally, simple contact for visitors to use it to reach directly from the website.
        </li>
        <li>
          Map: If relevant, here will come a small map widget showing your location or business address.(Optional)
        </li>
      </ul>
    </>
  )
}
