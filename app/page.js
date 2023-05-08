import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import DailyForecast from "@/components/DailyForecast";
import SearchWeather from "@/components/SearchWeather";

export default function Home() {
  return (
    // bg-weather-bg
    <main>
      <div className="text-white max-w-[375px] mx-auto px-4  h-screen bg-weather-bg bg-center bg-cover overlay-bg">
        <div className="relative z-10 h-screen">
          <SearchWeather />
          <div className="flex flex-col items-center lg:text-base h-[8%]">
            <p className="text-sm">View More</p>
            <ChevronDownIcon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </main>
  );
}
