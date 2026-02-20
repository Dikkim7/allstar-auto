import Image from "next/image";
import Header from "../components/Header";



export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">


      
      <Header />

<section className="w-full bg-[var(--navy)] hero-white">
{/* HERO */}
<div className="relative h-[460px] w-full overflow-hidden">
  <Image src="/hero.jpg" alt="Hero" fill priority className="object-cover" />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/45" />

  {/* ONE CONTENT BLOCK (MOVE THIS) */}
  <div className="absolute z-20 left-[120px] top-[150px] md:left-[150px] md:top-[180px]">
    <div className="w-[900px] max-w-[calc(100vw-160px)]">
      <h1 className="font-heading leading-[1.05] tracking-[0.02em]">
        <span className="block text-[3.5rem] md:text-[5.5rem] font-extrabold text-white">
          Buy. Sell. Trade.
        </span>

        <span className="mt-2 block text-[3.5rem] md:text-[5.5rem] font-extrabold hero-red">
          Drive Like an All Star.
        </span>
      </h1>

      <p className="mt-6 font-body text-white/750 text-3xl md:text-4xl tracking-[0.05em] whitespace-nowrap">
        Quality used vehicles · Easy financing · Fair trade-ins
      </p>

      <div className="mt-8 flex gap-6">
        <button className="bg-[var(--red)] text-white px-14 py-5 text-xl rounded-md font-semibold">
          Browse inventory
        </button>

        <button className="bg-white text-[var(--navy)] px-14 py-5 text-xl rounded-md font-semibold">
          Get Pre-Approved
        </button>
      </div>
    </div>
  </div>
</div>
  {/* FEATURE STRIP */}
  <div className="border-t border-white/10">
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-5 text-white items-center">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-white/25 flex items-center justify-center">
            ✓
          </div>
          <div>
            <div className="font-body font-semibold text-sm md:text-base">
              Quality Inspected Vehicles
            </div>
            <div className="font-body text-xs text-white/70">
              Trusted by our standards
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-white/25 flex items-center justify-center">
            $
          </div>
          <div>
            <div className="font-body font-semibold text-sm md:text-base">
              Fast Financing Options
            </div>
            <div className="font-body text-xs text-white/70">
              Flexible lenders
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-white/25 flex items-center justify-center">
            ⇄
          </div>
          <div>
            <div className="font-body font-semibold text-sm md:text-base">
              Top Trade-In Value
            </div>
            <div className="font-body text-xs text-white/70">
              Fair market offers
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-white/25 flex items-center justify-center">
            📍
          </div>
          <div>
            <div className="font-body font-semibold text-sm md:text-base">
              Locally Owned & Operated
            </div>
            <div className="font-body text-xs text-white/70">
              Community focused
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </main>
  );
}
