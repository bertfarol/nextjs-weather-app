"use client";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import WeatherForecast from "./WeatherForecast";
import CityList from "./CityList";
import ThreeHourForecast from "./ThreeHourForecast";


export default function SearchWeather() {
  const [searchCity, setSearchCity] = useState("");
  const [cityName, setCityName] = useState("las pinas");
  const [openSearchList, setOpenSearchList] = useState(false);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setCityName(searchCity);
  };

  const handleInputChange = (e) => {
    setSearchCity(e.target.value);
    setOpenSearchList(true);
  };

  const handleSearchList = (event) => {
    const city = event.target.firstChild.textContent;
    setCityName(city);
    setOpenSearchList(false);
    setSearchCity("");
  };

  const handleClearInput = () => {
    setOpenSearchList(false);
    setSearchCity("");
  };

  return (
    <>
      <div className="relative pt-5 h-[10%]">
        <form onSubmit={handleSearchSubmit}>
          <div className="relative px-12 border border-white rounded-full">
            <span className="absolute left-[15px] top-1/2 translate-y-[-50%]">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search City..."
              value={searchCity}
              onChange={handleInputChange}
              className="w-full py-3 text-sm bg-transparent placeholder-white/75 outline-0"
            />
            <span>
              {openSearchList && (
                <XMarkIcon
                  onClick={handleClearInput}
                  className="w-5 h-5 absolute right-[15px] top-1/2 translate-y-[-50%] cursor-pointer"
                />
              )}
            </span>
          </div>
        </form>
        <CityList
          handleClick={handleSearchList}
          queryCity={searchCity}
          searchToggle={openSearchList}
        />
      </div>
      <WeatherForecast city={cityName} />
      <ThreeHourForecast city={cityName} />
    </>
  );
}
