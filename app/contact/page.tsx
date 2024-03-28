import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SEO Contact',
  description: 'SEO Contact',
  appleWebApp: false,
  icons: 'icon.png'
};

export default function ContactPage() {
  return (
    <>
      <span className="text-6xl">Contact Page</span>
    </>
  )
}
