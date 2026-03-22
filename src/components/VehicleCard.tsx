"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Vehicle = {
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

  useEffect(() => {
    if (!isHovering || vehicle.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % vehicle.images.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [isHovering, vehicle.images.length]);

  const goToPrevious = () => {
    setCurrentImage((prev) =>
      prev === 0 ? vehicle.images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % vehicle.images.length);
  };

  return (
    <div
      className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setCurrentImage(0);
      }}
    >
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        <Image
          src={vehicle.images[currentImage] || "/hero.jpg"}
          alt={vehicle.title}
          fill
          className="object-cover"
        />

        {vehicle.images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/55 px-3 py-2 text-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/55 px-3 py-2 text-white"
            >
              →
            </button>
          </>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-[1.35rem] font-bold text-[var(--navy)]">
          {vehicle.title}
        </h3>

        <p className="mt-2 text-[2rem] font-extrabold text-[var(--red)]">
          {vehicle.price}
        </p>

        <p className="mt-2 text-[15px] text-gray-500">{vehicle.miles}</p>

        <button className="mt-5 w-full rounded-md bg-[var(--navy)] px-4 py-3 text-[15px] font-semibold text-white">
          View Details
        </button>
      </div>
    </div>
  );
}