"use client";

import GlassCard from "@/components/ui/GlassCard";

import {
  HeartPulse,
  MapPin,
  Clock,
} from "lucide-react";

interface Props {
  name: string;
  type: string;
  distance: string;
  time: string;
  rating: number;
  icon: "hospital" | "location" | "clock";
  color: string;
}

export default function HospitalCard({
  name,
  type,
  distance,
  time,
  rating,
  icon,
  color,
}: Props) {
  const icons = {
    hospital: HeartPulse,
    location: MapPin,
    clock: Clock,
  };

  const Icon = icons[icon];

  function openMaps() {
    if (!navigator.geolocation) {
      window.open(
        `https://www.google.com/maps/search/${encodeURIComponent(name)}`,
        "_blank"
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        window.open(
          `https://www.google.com/maps/search/${encodeURIComponent(
            name
          )}/@${lat},${lng},15z`,
          "_blank"
        );
      },
      () => {
        window.open(
          `https://www.google.com/maps/search/${encodeURIComponent(name)}`,
          "_blank"
        );
      }
    );
  }

  return (
    <GlassCard className="group p-7">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg`}
      >
        <Icon size={28} />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {name}
      </h3>

      <p className="mt-2 text-slate-500">
        {type}
      </p>

      <div className="mt-5 space-y-2 text-sm text-slate-600">
        <p>📍 Jarak: {distance}</p>
        <p>⏱️ Perkiraan waktu: {time}</p>
        <p>⭐ Rating: {rating}</p>
      </div>

      <button
        onClick={openMaps}
        className="mt-6 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 py-3 font-semibold text-white transition hover:scale-[1.02]"
      >
        Lihat di Google Maps
      </button>
    </GlassCard>
  );
}