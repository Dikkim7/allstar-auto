import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">

      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="All Star Auto Group"
              width={220}
              height={60}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7 font-body text-white">
            <Link href="#" className="hover:opacity-80">Buy</Link>
            <Link href="#" className="hover:opacity-80">Sell</Link>
            <Link href="#" className="hover:opacity-80">Trade In</Link>
            <Link href="#" className="hover:opacity-80">Financing</Link>
            <Link href="#" className="hover:opacity-80">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3 font-body">
            <Link
              href="#"
              className="rounded-md bg-[var(--red)] px-4 py-2 text-white font-semibold"
            >
              Browse Inventory
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
