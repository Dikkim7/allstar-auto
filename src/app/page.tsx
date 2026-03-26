import VehicleCard from "../components/VehicleCard";
import Image from "next/image";
import Header from "../components/Header";
import { FiCheckCircle, FiDollarSign, FiTruck, FiMapPin } from "react-icons/fi";


const featuredVehicles = [
  {
  id: "f150-raptor",
  title: "2021 Ford F-150 Raptor",
  price: "$38,995",
  miles: "25,134",
  fuel: "Gasoline",
  gear: "Automatic",
  vehicleTitle: "Clean",
  condition: "Used but looks like brand new",
  cityMpg: "15 MPG",
  highwayMpg: "18 MPG",
  durability: 5,
  safety: 4,
  resaleValue: 5,
  images: ["/truck1.jpg", "/truck2.jpg", "/truck3.jpg"],
},
  {
  id: "charger-rt",
  title: "2019 Dodge Charger R/T",
  price: "$32,995",
  miles: "30,221",
  fuel: "Gasoline",
  gear: "Automatic",
  vehicleTitle: "Clean",
  condition: "Used",
  cityMpg: "16 MPG",
  highwayMpg: "25 MPG",
  durability: 4,
  safety: 4,
  resaleValue: 4,
  images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
},
  {
    id: "civic-2020",
    title: "2020 Honda Civic",
    price: "$21,995",
    miles: "38,916 Miles",
    fuel: "Gasoline",
  gear: "Automatic",
  vehicleTitle: "Clean",
  condition: "Used",
  cityMpg: "16 MPG",
  highwayMpg: "25 MPG",
  durability: 4,
  safety: 4,
  resaleValue: 4,
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    id: "silverado-2022",
    title: "2022 Chevrolet Silverado",
    price: "$44,995",
    miles: "19,432 Miles",
    fuel: "Gasoline",
  gear: "Automatic",
  vehicleTitle: "Clean",
  condition: "Used",
  cityMpg: "16 MPG",
  highwayMpg: "25 MPG",
  durability: 4,
  safety: 4,
  resaleValue: 4,
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    id: "altima-2018",
    title: "2018 Nissan Altima",
    price: "$18,995",
    miles: "44,876 Miles",
    fuel: "Gasoline",
  gear: "Automatic",
  vehicleTitle: "Clean",
  condition: "Used",
  cityMpg: "16 MPG",
  highwayMpg: "25 MPG",
  durability: 4,
  safety: 4,
  resaleValue: 4,
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    id: "camry-2021",
    title: "2021 Toyota Camry",
    price: "$24,995",
    miles: "28,575 Miles",
    fuel: "Gasoline",
  gear: "Automatic",
  vehicleTitle: "Clean",
  condition: "Used",
  cityMpg: "16 MPG",
  highwayMpg: "25 MPG",
  durability: 4,
  safety: 4,
  resaleValue: 4,
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    id: "bmw-3-series-2020",
    title: "2020 BMW 3 Series",
    price: "$29,995",
    miles: "22,110 Miles",
    fuel: "Gasoline",
  gear: "Automatic",
  vehicleTitle: "Clean",
  condition: "Used",
  cityMpg: "16 MPG",
  highwayMpg: "25 MPG",
  durability: 4,
  safety: 4,
  resaleValue: 4,
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    id: "grand-cherokee-2019",
    title: "2019 Jeep Grand Cherokee",
    price: "$27,995",
    miles: "35,444 Miles",
    fuel: "Gasoline",
  gear: "Automatic",
  vehicleTitle: "Clean",
  condition: "Used",
  cityMpg: "16 MPG",
  highwayMpg: "25 MPG",
  durability: 4,
  safety: 4,
  resaleValue: 4,
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    id: "tesla-model-3-2022",
    title: "2022 Tesla Model 3",
    price: "$39,995",
    miles: "12,800 Miles",
    fuel: "Gasoline",
  gear: "Automatic",
  vehicleTitle: "Clean",
  condition: "Used",
  cityMpg: "16 MPG",
  highwayMpg: "25 MPG",
  durability: 4,
  safety: 4,
  resaleValue: 4,
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
];



export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Header />




      {/* HERO */}
<section className="hero-white w-full">
  <div className="relative h-[440px] w-full overflow-hidden sm:h-[520px] lg:h-[580px] xl:h-[640px]">
    <Image
      src="/hero.jpg"
      alt="Hero"
      fill
      priority
      className="object-cover"
    />

    <div className="absolute inset-0 bg-black/45" />

    <div className="absolute inset-0 z-20">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 pt-32 sm:pt-36 md:pt-40 lg:pt-32 xl:pt-36">
        <div className="max-w-[300px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[560px] xl:max-w-[760px]">
          <h1 className="font-heading leading-[0.94] tracking-[0.01em]">
            <span className="block text-[2rem] font-extrabold text-white sm:text-[2.6rem] md:text-[3.1rem] lg:text-[3.6rem] xl:text-[5rem]">
              Buy. Sell. Trade.
            </span>

            <span className="hero-red mt-1 block text-[1.95rem] font-extrabold sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4.9rem]">
              Drive Like an All Star.
            </span>
          </h1>

          <p className="mt-4 max-w-[480px] text-[0.95rem] leading-[1.35] tracking-[0.01em] text-white/85 sm:text-[1rem] md:text-[1.08rem] lg:text-[1.15rem]">
            Quality used vehicles · Easy financing · Fair trade-ins
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button className="rounded-md bg-[var(--red)] px-5 py-2.5 text-sm font-semibold text-white sm:px-6 sm:py-3 sm:text-base">
              Browse inventory
            </button>

            <button className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[var(--navy)] sm:px-6 sm:py-3 sm:text-base">
              Get Pre-Approved
            </button>
          </div>
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