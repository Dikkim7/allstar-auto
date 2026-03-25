import { notFound } from "next/navigation";

const vehicles = [
  {
    id: "f150-raptor",
    title: "2021 Ford F-150 Raptor",
    price: "$38,995",
    miles: "25,134 Miles",
    images: ["/truck1.jpg", "/truck2.jpg", "/truck3.jpg"],
  },
  {
    id: "charger-rt",
    title: "2019 Dodge Charger R/T",
    price: "$32,995",
    miles: "30,221 Miles",
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    id: "civic-2020",
    title: "2020 Honda Civic",
    price: "$21,995",
    miles: "38,916 Miles",
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    id: "silverado-2022",
    title: "2022 Chevrolet Silverado",
    price: "$44,995",
    miles: "19,432 Miles",
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    id: "altima-2018",
    title: "2018 Nissan Altima",
    price: "$18,995",
    miles: "44,876 Miles",
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    id: "camry-2021",
    title: "2021 Toyota Camry",
    price: "$24,995",
    miles: "28,575 Miles",
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    id: "bmw-3-series-2020",
    title: "2020 BMW 3 Series",
    price: "$29,995",
    miles: "22,110 Miles",
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    id: "grand-cherokee-2019",
    title: "2019 Jeep Grand Cherokee",
    price: "$27,995",
    miles: "35,444 Miles",
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
  {
    id: "tesla-model-3-2022",
    title: "2022 Tesla Model 3",
    price: "$39,995",
    miles: "12,800 Miles",
    images: ["/hero.jpg", "/hero.jpg", "/hero.jpg"],
  },
];

export default async function VehiclePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) return notFound();

return (
  <main style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
    <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#29314A", marginBottom: "10px" }}>
      {vehicle.title}
    </h1>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.1fr 0.9fr",
        gap: "32px",
        alignItems: "start",
        marginTop: "24px",
      }}
    >
      <div>
        <img
          src={vehicle.images[0]}
          alt={vehicle.title}
          style={{
            width: "100%",
            maxWidth: "620px",
            borderRadius: "16px",
            display: "block",
          }}
        />
      </div>

      <div>
        <p
          style={{
            fontSize: "1.8rem",
            color: "#B8303C",
            fontWeight: 800,
            margin: "0 0 12px 0",
          }}
        >
          {vehicle.price}
        </p>

        <p
          style={{
            fontSize: "1rem",
            color: "#4A4F5F",
            margin: "0 0 18px 0",
          }}
        >
          {vehicle.miles}
        </p>

        <p
          style={{
            fontSize: "0.95rem",
            lineHeight: 1.7,
            color: "#4A4F5F",
            margin: 0,
          }}
        >
          This vehicle is in excellent condition and offers a strong mix of
          style, comfort, and performance. It has been carefully inspected and
          is ready for the road. Contact All Star Auto Group for financing
          options, availability, and to schedule a test drive.
        </p>
      </div>
    </div>
  </main>
);
}