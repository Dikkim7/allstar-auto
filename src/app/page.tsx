import Image from "next/image";
import Header from "../components/Header";
import { FaCheckCircle, FaMoneyBillWave, FaCarSide, FaMapMarkerAlt } from "react-icons/fa";



export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">


      
      <Header />

<section className="w-full bg-[var(--navy)] hero-white"><div className="relative h-[460px] w-full overflow-hidden">
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

      <p className="mt-6 font-body text-white/80 text-3xl md:text-4xl tracking-[0.05em] whitespace-nowrap">
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
{/* FEATURE STRIP */}
<section className="w-full bg-[var(--navy)] border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      
      <div className="flex items-center gap-4 border-r border-white/15 px-6 py-5 text-white">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20">
          <FaCheckCircle className="text-xl" />
        </div>
        <div>
          <div className="text-lg font-semibold">Quality Inspected Vehicles</div>
          <div className="text-sm text-white/70">Trusted by our standards</div>
        </div>
      </div>

      <div className="flex items-center gap-4 border-r border-white/15 px-6 py-5 text-white">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20">
          <FaMoneyBillWave className="text-xl" />
        </div>
        <div>
          <div className="text-lg font-semibold">Fast Financing Options</div>
          <div className="text-sm text-white/70">Flexible lenders</div>
        </div>
      </div>

      <div className="flex items-center gap-4 border-r border-white/15 px-6 py-5 text-white">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20">
          <FaCarSide className="text-xl" />
        </div>
        <div>
          <div className="text-lg font-semibold">Top Trade-In Value</div>
          <div className="text-sm text-white/70">Fair market offers</div>
        </div>
      </div>

      <div className="flex items-center gap-4 px-6 py-5 text-white">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20">
          <FaMapMarkerAlt className="text-xl" />
        </div>
        <div>
          <div className="text-lg font-semibold">Locally Owned &amp; Operated</div>
          <div className="text-sm text-white/70">Community focused</div>
        </div>
      </div>

    </div>
  </div>
</section>





</section>



    </main>
  );
}
