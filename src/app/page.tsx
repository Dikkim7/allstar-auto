import VehicleCard from "../components/VehicleCard";
import Image from "next/image";
import Header from "../components/Header";
import { FiCheckCircle, FiDollarSign, FiTruck, FiMapPin } from "react-icons/fi";


const featuredVehicles = [
  {
    title: "2021 Ford F-150",
    price: "$38,995",
    miles: "25,134 Miles",
   images: ["/truck1.jpg", "/truck2.jpg", "/truck3.jpg"],
  },
  {
    title: "2019 Dodge Charger R/T",
    price: "$32,995",
    miles: "30,221 Miles",
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    title: "2020 Honda Civic",
    price: "$21,995",
    miles: "38,916 Miles",
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    title: "2022 Chevrolet Silverado",
    price: "$44,995",
    miles: "19,432 Miles",
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    title: "2018 Nissan Altima",
    price: "$18,995",
    miles: "44,876 Miles",
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    title: "2021 Toyota Camry",
    price: "$24,995",
    miles: "28,575 Miles",
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    title: "2020 BMW 3 Series",
    price: "$29,995",
    miles: "22,110 Miles",
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    title: "2019 Jeep Grand Cherokee",
    price: "$27,995",
    miles: "35,444 Miles",
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    title: "2022 Tesla Model 3",
    price: "$39,995",
    miles: "12,800 Miles",
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
];



export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Header />




      {/* HERO */}
      <section className="hero-white w-full">
        <div className="relative h-[460px] w-full overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="Hero"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute left-[60px] top-[150px] z-20 md:left-[90px] md:top-[140px]">
            <div className="max-w-[900px]">
              <h1 className="font-heading leading-[1.05] tracking-[0.02em]">
                <span className="block text-[3.5rem] font-extrabold text-white md:text-[5.5rem]">
                  Buy. Sell. Trade.
                </span>

                <span className="hero-red mt-2 block text-[3.5rem] font-extrabold md:text-[5.5rem]">
                  Drive Like an All Star.
                </span>
              </h1>

              <p className="mt-6 text-2xl tracking-[0.05em] text-white/80 md:text-3xl">
                Quality used vehicles · Easy financing · Fair trade-ins
              </p>

              <div className="mt-8 flex gap-4">
                <button className="rounded-md bg-[var(--red)] px-8 py-3 text-lg font-semibold text-white">
                  Browse inventory
                </button>

                <button className="rounded-md bg-white px-8 py-3 text-lg font-semibold text-[var(--navy)]">
                  Get Pre-Approved
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* FEATURE STRIP */}
<section className="feature-strip w-full">
  <div className="mx-auto max-w-[1600px]">
    <div className="grid grid-cols-4">
      <div className="feature-strip-item feature-strip-divider">
<FiCheckCircle className="feature-strip-icon" />        <div>
          <p className="feature-strip-title">Quality Inspected Vehicles</p>
          <p className="feature-strip-subtitle">Trusted by our standards</p>
        </div>
      </div>

      <div className="feature-strip-item feature-strip-divider">
<FiDollarSign className="feature-strip-icon" />        <div>
          <p className="feature-strip-title">Fast Financing Options</p>
          <p className="feature-strip-subtitle">Flexible lenders</p>
        </div>
      </div>

      <div className="feature-strip-item feature-strip-divider">
<FiTruck className="feature-strip-icon" />        <div>
          <p className="feature-strip-title">Top Trade-In Value</p>
          <p className="feature-strip-subtitle">Fair market offers</p>
        </div>
      </div>

      <div className="feature-strip-item">
<FiMapPin className="feature-strip-icon" />        <div>
          <p className="feature-strip-title">
            Locally Owned
           
            &amp; Operated
          </p>
          <p className="feature-strip-subtitle">Community focused</p>
        </div>
      </div>
    </div>
  </div>
</section>
     
<section className="bg-[#f7f7f8] py-16">
  <div className="mx-auto max-w-7xl px-6">
    <h2 className="mb-10 text-center text-4xl font-bold text-[var(--navy)]">
      Featured Vehicles
    </h2>

   <div className="vehicles-grid">
  {featuredVehicles.map((vehicle, index) => (
    <VehicleCard key={index} vehicle={vehicle} />
  ))}
</div>


    <div className="mt-10 text-center">
      <button className="text-lg font-semibold text-[var(--red)] hover:underline">
        View Full Inventory →
      </button>
    </div>
  </div>
</section>
     



    </main>
  );
}