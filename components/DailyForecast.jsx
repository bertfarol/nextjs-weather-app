import { BeakerIcon } from "@heroicons/react/24/solid";

export default function DailyForecast({ day, degrees, icon }) {
  return (
    <div
      className={
        "flex flex-col items-center capitalize text-sm text-white/75 " +
        (day === "today" ? "font-bold" : "")
      }
    >
      {day}
      <span className="py-1">{icon}</span>
      {degrees}°
    </div>
  );
}
