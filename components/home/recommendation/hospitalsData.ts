import { MapPin, Clock, Star, HeartPulse } from "lucide-react";

export const hospitals = [
  {
    name: "City General Hospital",
    type: "General Hospital",
    distance: "2.1 km",
    time: "8 min",
    rating: 4.9,
    icon: HeartPulse,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "MediCare Clinic",
    type: "Primary Care",
    distance: "1.3 km",
    time: "5 min",
    rating: 4.8,
    icon: MapPin,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Emergency Center",
    type: "24/7 Emergency",
    distance: "3.5 km",
    time: "10 min",
    rating: 5.0,
    icon: Clock,
    color: "from-red-500 to-orange-500",
  },
];