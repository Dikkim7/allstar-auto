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
  images: ["/dodge1.jpg", "/dodge2.jpg", "/dodge3.jpg"],
},
  {
    id: "civic-2020",
    title: "2020 Honda Civic Type R",
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
    images: ["/honda1.jpg", "/honda2.jpg", "/honda3.jpg"],
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
<section className="w-full">
  <div className="relative h-[520px] w-full overflow-hidden sm:h-[580px] lg:h-[650px]">
    <Image
      src="/hero.jpg"
      alt="Hero"
      fill
      priority
      className="object-cover"
    />

    <div className="absolute inset-0 bg-black/45 z-10" />

    {/* HERO TEXT */}
    <div
      className="absolute z-40 max-w-[650px]"
   style={{
  top: "160px",
  left: "60px",
}}
    >
      <h1
        className="leading-[1.05] tracking-[-0.02em]"
        style={{ margin: 0 }}
      >
        <span
          className="block text-[3.6rem] font-extrabold sm:text-[2.4rem] md:text-[3rem] lg:text-[3.5rem]"
          style={{ color: "#ffffff" }}
        >
          Buy. Sell. Trade.
        </span>

        <span
          className="mt-2 block text-[3.6rem] font-extrabold sm:text-[2.3rem] md:text-[2.9rem] lg:text-[3.4rem]"
          style={{ color: "#B8303C" }}
        >
          Drive Like an All Star
        </span>
      </h1>

      <p
        className="mt-5 max-w-[540px] text-base leading-[1.6] sm:text-lg"
        style={{ color: "#ffffff" }}
      >
        Quality used vehicles · Easy financing · Fair trade-ins
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <button className="rounded-md bg-[var(--red)] px-5 py-3 text-sm font-semibold text-white sm:px-6 sm:text-base">
          Browse Inventory
        </button>

        <button className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-[var(--navy)] sm:px-6 sm:text-base">
          Get Pre-Approved
        </button>
      </div>
    </div>
  </div>
</section>

{/* FEATURE STRIP */}
<section className="feature-strip w-full">
  <div className="grid grid-cols-4">
    <div className="feature-strip-item feature-strip-divider">
      <FiCheckCircle className="feature-strip-icon" />
      <div className="flex flex-col justify-center">
        <p className="feature-strip-title">Quality Inspected Vehicles</p>
        <p className="feature-strip-subtitle">Trusted by our standards</p>
      </div>
    </div>

    <div className="feature-strip-item feature-strip-divider">
      <FiDollarSign className="feature-strip-icon" />
      <div className="flex flex-col justify-center">
        <p className="feature-strip-title">Fast Financing Options</p>
        <p className="feature-strip-subtitle">Flexible lenders</p>
      </div>
    </div>

    <div className="feature-strip-item feature-strip-divider">
      <FiTruck className="feature-strip-icon" />
      <div className="flex flex-col justify-center">
        <p className="feature-strip-title">Top Trade-In Value</p>
        <p className="feature-strip-subtitle">Fair market offers</p>
      </div>
    </div>

    <div className="feature-strip-item">
      <FiMapPin className="feature-strip-icon" />
      <div className="flex flex-col justify-center">
        <p className="feature-strip-title">Locally Owned &amp; Operated</p>
        <p className="feature-strip-subtitle">Community focused</p>
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