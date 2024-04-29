import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Tato Dev Portfolio</span>

      <Link href={'/about'} >
        <span className='text-3xl'>Go for it</span>
      </Link>
    </main>
  );
}
