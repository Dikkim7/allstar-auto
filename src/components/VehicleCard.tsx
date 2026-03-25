"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";

type Vehicle = {
  id: string;
  title: string;
  price: string;
  miles: string;
  images: string[];
};

type VehicleCardProps = {
  vehicle: Vehicle;
};

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!isHovering || vehicle.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % vehicle.images.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [isHovering, vehicle.images.length]);

  const goToPrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentImage((prev) =>
      prev === 0 ? vehicle.images.length - 1 : prev - 1
    );
  };

  const goToNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentImage((prev) => (prev + 1) % vehicle.images.length);
  };

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
  };

  return (
   <Link
  href={`/vehicles/${vehicle.id}`}
  className="vehicle-card"
  style={{ textDecoration: "none" }}
  onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => {
    setIsHovering(false);
    setCurrentImage(0);
  }}
>
  <div className="vehicle-card-image-wrap">
    <img
      key={currentImage}
      src={vehicle.images[currentImage] || "/hero.jpg"}
      alt={vehicle.title}
      className="vehicle-card-image"
    />

        <button
          type="button"
          onClick={toggleFavorite}
          className={`vehicle-card-favorite ${isFavorite ? "active" : ""}`}
          aria-label="Save vehicle"
        >
          <FiHeart size={18} fill={isFavorite ? "currentColor" : "none"} />
        </button>

        {vehicle.images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              className="vehicle-card-arrow left"
              aria-label="Previous image"
            >
              ←
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="vehicle-card-arrow right"
              aria-label="Next image"
            >
              →
            </button>
          </>
        )}

        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "6px",
          }}
        >
          {vehicle.images.map((_, i) => (
            <div
              key={i}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "999px",
                background:
                  i === currentImage
                    ? "#ffffff"
                    : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="vehicle-card-body">
        <h3 className="vehicle-card-title">{vehicle.title}</h3>
        <p className="vehicle-card-price">{vehicle.price}</p>
        <p className="vehicle-card-miles">{vehicle.miles}</p>

        <button
          className="vehicle-card-button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = `/vehicles/${vehicle.id}`;
          }}
        >
          View Details
        </button>
      </div>
    </Link>
  );
}