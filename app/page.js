import WeatherForecast from "@/components/WeatherForecast";

export default function Home() {
  return (
    // bg-weather-bg
    <main className="max-w-[375px] mx-auto  bg-gradient-to-b from-slate-500 to-slate-700 h-[100%] text-white">
      <WeatherForecast />
    </main>
  );
}

// bg-[#6b737d]