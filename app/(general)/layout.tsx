import { Navbar } from "@/components"

export default function GeneralLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Tato Web Development Portfolio</span>
        { children }
      </main>
    </>
  );
}
