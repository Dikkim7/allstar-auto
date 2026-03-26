"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";

function renderStars(count: number) {
  return "★".repeat(count) + "☆".repeat(5 - count);
}



const vehicles = [
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

export default function VehiclePage() {
  const params = useParams();
  const id = params?.id as string;

  const vehicle = useMemo(() => {
    return vehicles.find((v) => v.id === id);
  }, [id]);

  const [currentImage, setCurrentImage] = useState(0);
  const [showLargeImage, setShowLargeImage] = useState(false);

  if (!vehicle) {
    return (
      <main style={{ padding: "32px", maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", color: "#29314A" }}>Vehicle not found</h1>
      </main>
    );
  }

  const goPrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? vehicle.images.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentImage((prev) => (prev + 1) % vehicle.images.length);
  };

  const cardStyle: React.CSSProperties = {
    padding: "10px 12px",
    border: "1px solid #E5E7EB",
    borderRadius: "10px",
    background: "#fff",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.78rem",
    color: "#6B7280",
    fontWeight: 600,
    marginBottom: "3px",
  };

  const valueStyle: React.CSSProperties = {
    fontSize: "0.95rem",
    color: "#12161F",
    fontWeight: 700,
    lineHeight: 1.35,
  };

  return (
    <>
      <main style={{ padding: "0px 24px 24px", maxWidth: "1120px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "1.9rem",
            fontWeight: 800,
            color: "#29314A",
            marginBottom: "2px",
          }}
        >
          {vehicle.title}
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.95fr 1.05fr",
            gap: "20px",
            alignItems: "start",
            marginTop: "14px",
          }}
        >
          <div>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "460px",
                aspectRatio: "4 / 3",
                borderRadius: "14px",
                overflow: "hidden",
                background: "#E5E7EB",
                cursor: "zoom-in",
              }}
              onClick={() => setShowLargeImage(true)}
            >
          <img
  src={vehicle.images[currentImage]}
  alt={vehicle.title}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.08)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
/>

              {vehicle.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goPrev();
                    }}
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      border: "none",
                      borderRadius: "999px",
                      width: "34px",
                      height: "34px",
                      background: "rgba(0,0,0,0.6)",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goNext();
                    }}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      border: "none",
                      borderRadius: "999px",
                      width: "34px",
                      height: "34px",
                      background: "rgba(0,0,0,0.6)",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    →
                  </button>
                </>
              )}
            </div>

            {vehicle.images.length > 1 && (
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginTop: "10px",
                  flexWrap: "wrap",
                }}
              >
                {vehicle.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentImage(i)}
                    style={{
                      border: i === currentImage ? "2px solid #B8303C" : "1px solid #D1D5DB",
                      borderRadius: "10px",
                      padding: 0,
                      width: "86px",
                      height: "64px",
                      overflow: "hidden",
                      background: "#fff",
                      cursor: "pointer",
                    }}
                  >
                   <img
  src={img}
  alt={`${vehicle.title} thumbnail ${i + 1}`}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.1)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
/>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            <div style={cardStyle}>
              <div style={labelStyle}>Price</div>
              <div style={valueStyle}>{vehicle.price}</div>
            </div>

            <div style={cardStyle}>
              <div style={labelStyle}>Mileage</div>
              <div style={valueStyle}>{vehicle.miles} miles</div>
            </div>

            <div style={cardStyle}>
              <div style={labelStyle}>Fuel</div>
              <div style={valueStyle}>{vehicle.fuel}</div>
            </div>

            <div style={cardStyle}>
              <div style={labelStyle}>Gear</div>
              <div style={valueStyle}>{vehicle.gear}</div>
            </div>

            <div style={cardStyle}>
              <div style={labelStyle}>Title</div>
              <div style={valueStyle}>{vehicle.vehicleTitle}</div>
            </div>

            <div style={cardStyle}>
              <div style={labelStyle}>Condition</div>
              <div style={valueStyle}>{vehicle.condition}</div>
            </div>

            <div style={cardStyle}>
              <div style={labelStyle}>Fuel Economy</div>
              <div style={valueStyle}>
                City {vehicle.cityMpg} / Highway {vehicle.highwayMpg}
              </div>
            </div>

            <div style={cardStyle}>
              <div style={labelStyle}>Durability</div>
              <div style={{ ...valueStyle, color: "#D97706" }}>
                {renderStars(vehicle.durability)}
              </div>
            </div>

            <div style={cardStyle}>
              <div style={labelStyle}>Safety</div>
              <div style={{ ...valueStyle, color: "#D97706" }}>
                {renderStars(vehicle.safety)}
              </div>
            </div>

            <div style={cardStyle}>
              <div style={labelStyle}>Resale Value</div>
              <div style={{ ...valueStyle, color: "#D97706" }}>
                {renderStars(vehicle.resaleValue)}
              </div>
            </div>
          </div>
        </div>
      </main>

      {showLargeImage && (
        <div
          onClick={() => setShowLargeImage(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.82)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "24px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "980px",
            }}
          >
            <img
              src={vehicle.images[currentImage]}
              alt={vehicle.title}
              style={{
                width: "100%",
                maxHeight: "82vh",
                objectFit: "contain",
                borderRadius: "14px",
                display: "block",
                margin: "0 auto",
                background: "#111827",
              }}
            />

            {vehicle.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "none",
                    borderRadius: "999px",
                    width: "42px",
                    height: "42px",
                    background: "rgba(255,255,255,0.16)",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  style={{
                    position: "absolute",
                    right: "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "none",
                    borderRadius: "999px",
                    width: "42px",
                    height: "42px",
                    background: "rgba(255,255,255,0.16)",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  →
                </button>
              </>
            )}

            <button
              type="button"
              onClick={() => setShowLargeImage(false)}
              style={{
                position: "absolute",
                top: "-12px",
                right: "-12px",
                border: "none",
                borderRadius: "999px",
                width: "38px",
                height: "38px",
                background: "#fff",
                color: "#111827",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}