import { useState, useEffect } from "react";
import { formatNumber, unixToTime } from "./utils";
import Image from "next/image";

export default function CurrentForecast({ city }) {
  const [forecastData, setForecastData] = useState([]);

  const fetchCurrentWeather = async () => {
    console.log("API is loading....");
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=44c4ac0fe54faa9d20a4a5dafaf4d201`
    );
    let data = await response.json();
    setForecastData(data);
    console.log(data);
    console.log("API is LOADED");
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
        <div className="flex flex-col justify-center h-[60%]">
          {forecastData.message && <h1>{forecastData.message}</h1>}
          <h1 className="text-2xl lg:text-3xl font-medium pb-0.5">
            {forecastData.name ? forecastData.name : "Loading city..."}
          </h1>
          <p className="pb-1 text-sm lg:pb-3 lg:text-base ">{dateToday}</p>
          <p className="pb-3 text-sm lg:text-base ">{time}</p>

          <p className="relative pt-4 text-5xl font-bold lg:text-5xl">
            {forecastData.main?.temp
              ? formatNumber(forecastData.main?.temp)
              : "0"}
            &deg;
          </p>
          {forecastData.weather ? (
            <div className="flex items-center ml-[-8px]">
              <Image
                src={`https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`}
                height={"40"}
                width={"40"}
                alt="temperature"
                priority
              />
              <p className="pl-1 text-xs font-medium capitalize">
                {forecastData.weather[0].description}
              </p>
            </div>
          ) : (
            <>--</>
          )}
          <div className="py-2">
            <div className="flex flex-col pb-2">
              <span className="text-sm font-light text-white/80">Sunrise</span>{" "}
              <span className="font-medium">
                {forecastData.sys?.sunrise
                  ? unixToTime(forecastData.sys?.sunrise)
                  : "--"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-light text-white/70">Sunset</span>{" "}
              <span className="font-medium">
                {forecastData.sys?.sunset
                  ? unixToTime(forecastData.sys?.sunset)
                  : "--"}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
