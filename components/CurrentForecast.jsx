import { useState, useEffect } from "react";
import { SunIcon } from "@heroicons/react/24/solid";
import { formatNumber } from "./utils";
import Image from "next/image";

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
        <div className="flex flex-col items-center justify-center h-[60%]">
          {forecastData.message && <h1>{forecastData.message}</h1>}
          <h1 className="text-2xl lg:text-3xl font-medium lg:pb-2.5 pb-0.5">
            {forecastData.name ? forecastData.name : "Loading city..."}
          </h1>
          <p className="pb-2 text-sm lg:pb-4 lg:text-base ">{dateToday}</p>
          <p className="pb-4 text-lg lg:text-xl ">{time}</p>
          {forecastData.weather ? (
            <Image
              src={`https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`}
              height={"100"}
              width={"100"}
              alt="temperature"
              priority
            />
          ) : (
            <SunIcon className="w-[100px] h-[100px]" />
          )}
          <p className="relative pt-4 text-4xl font-bold lg:text-5xl">
            {forecastData.main?.temp
              ? formatNumber(forecastData.main?.temp)
              : "0"}
            &deg;
          </p>
        </div>
      )}
    </>
  );
}
