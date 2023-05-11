import { useState, useEffect } from "react";
import { formatNumber, unixToTime } from "./utils";
import Image from "next/image";
import { ArrowTrendingUpIcon, BeakerIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function CurrentForecast({ city }) {
  const [forecastData, setForecastData] = useState([]);

  const fetchCurrentWeather = async () => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=44c4ac0fe54faa9d20a4a5dafaf4d201`
    );
    let data = await response.json();
    setForecastData(data);
  };

  useEffect(() => {
    fetchCurrentWeather();
  }, [city]);

  const current = new Date();

  //utc to unix
  const epochUnixTimestamp = Math.floor(current.getTime() / 1000.0);

  const time = current.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const year = current.toLocaleDateString("en-us", { year: "numeric" });
  const day = current.toLocaleDateString("en-us", { day: "numeric" });
  const month = current.toLocaleDateString("en-us", { month: "long" });
  const weekday = current.toLocaleDateString("en-us", { weekday: "long" });
  const dateToday = `${weekday}, ${day} ${month} ${year}`;

  return (
    <>
      {forecastData && (
        <div className="pt-10 pb-8 flex flex-col justify-between h-[100%]">
          {forecastData.message && <h1>{forecastData.message}</h1>}
          <div className="text-center">
            <h1 className="text-2xl">
              {forecastData.name ? forecastData.name : "--"}
            </h1>
            <p className="text-sm text-white/70">
              <span className="uppercase">{weekday}</span> <span>{time}</span>
            </p>
          </div>

          <div className="flex flex-col items-center grow justify-center">
            {forecastData.weather ? (
              <div>
                <Image
                  src={`https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`}
                  height={"100"}
                  width={"100"}
                  alt="temperature"
                  priority
                />
              </div>
            ) : (
              <>--</>
            )}

            <p className="text-5xl mb-3">
              {forecastData.main?.temp
                ? formatNumber(forecastData.main?.temp)
                : "0"}
              &deg;C
            </p>
            <p className="text-sm text-white/70">GOOD MORNING</p>
          </div>

          <div className="flex justify-center grow py-4">
            <p className="w-14 h-[2px] bg-[#546379]"></p>
          </div>

          <div className="grid grid-cols-4">
            <div className="flex flex-col items-center px-3">
              <SunIcon className="h-6 w-6 mb-3" />
              <span className="text-xs uppercase text-white/70">sunrise</span>
              <span className="text-sm">
                {forecastData.sys?.sunrise
                  ? unixToTime(forecastData.sys?.sunrise)
                  : "0"}
              </span>
            </div>
            <div className="flex flex-col items-center border-x-2 border-[#45546a]	px-3">
              <MoonIcon className="h-5 w-5 mb-3.5" />
              <span className="text-xs uppercase text-white/70">sunset</span>
              <span className="text-sm">
                {forecastData.sys?.sunset
                  ? unixToTime(forecastData.sys?.sunset)
                  : "0"}
              </span>
            </div>
            <div className="flex flex-col items-center px-3 border-r-2 border-[#45546a]">
              <ArrowTrendingUpIcon className="h-6 w-6 mb-3" />
              <span className="text-xs uppercase text-white/70">wind</span>{" "}
              <span className="text-sm">
                {forecastData.wind?.speed
                  ? formatNumber(forecastData.wind?.speed)
                  : "0"}{" "}
                m/s
              </span>
            </div>
            <div className="flex flex-col items-center px-3">
              <BeakerIcon className="h-6 w-6 mb-3" />
              <span className="text-xs uppercase text-white/70">temp</span>{" "}
              <span className="text-sm">
                {forecastData.main?.feels_like
                  ? formatNumber(forecastData.main?.feels_like)
                  : "0"}
                &deg;
              </span>
            </div>
          </div>

          {/* <div className="py-2">
            <div className="flex flex-col pb-2">
              <span className="text-sm font-light">Sunrise</span>{" "}
              <span className="font-medium">
                {forecastData.sys?.sunrise
                  ? unixToTime(forecastData.sys?.sunrise)
                  : "--"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-light">Sunset</span>{" "}
              <span className="font-medium">
                {forecastData.sys?.sunset
                  ? unixToTime(forecastData.sys?.sunset)
                  : "--"}
              </span>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
}
