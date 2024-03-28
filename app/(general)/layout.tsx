export default function GeneralLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-lg">Hello Root Layout General</span>
      { children }
    </main>
  );
}
