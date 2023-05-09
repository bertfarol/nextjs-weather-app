import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import WeatherForecast from "@/components/WeatherForecast";

export default function Home() {
  return (
    // bg-weather-bg
    <main>
      <div className="text-white max-w-[375px] mx-auto h-screen bg-12am bg-center bg-cover overlay-bg">
        <div className="relative z-10 h-screen px-4">
          <WeatherForecast />
          <div className="flex flex-col items-center lg:text-base h-[8%]">
            <p className="text-sm">View More</p>
            <ChevronDownIcon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </main>
  );
}
