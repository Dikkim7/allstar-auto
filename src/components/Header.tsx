import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
   <header className="absolute top-0 left-0 w-full z-30 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20 md:h-24">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="All Star Auto Group"
              width={300}
              height={80}
              priority
              className="h-auto w-[140px] sm:w-[180px] md:w-[240px]"
            />
          </Link>

          <nav className="hidden items-center gap-5 text-sm text-white md:flex lg:gap-7 lg:text-base">
            <Link href="#" className="hover:opacity-80">Buy</Link>
            <Link href="#" className="hover:opacity-80">Sell</Link>
            <Link href="#" className="hover:opacity-80">Trade In</Link>
            <Link href="#" className="hover:opacity-80">Financing</Link>
            <Link href="#" className="hover:opacity-80">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="#"
              className="rounded-md bg-[var(--red)] px-4 py-2 font-semibold text-white"
            >
              Browse Inventory
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}