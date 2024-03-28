import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SEO pricing',
  description: 'Pricing page of the services',
  keywords: ['prices', 'dolar', 'washington dc'],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-6xl">Pricing Page</span>
    </>
  )
}
