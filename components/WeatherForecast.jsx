"use client";
import { useState, useEffect, useRef } from "react";
import ThreeHourForecast from "./ThreeHourForecast";
import SearchInput from "./SearchInput";
import CurrentForecast from "./CurrentForecast";


export default function WeatherForecast() {
  const [searchCity, setSearchCity] = useState("");
  const [cityName, setCityName] = useState("las pinas");
  const [openSearchList, setOpenSearchList] = useState(false);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // setCityName(searchCity);
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

  let logoutRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!logoutRef.current?.contains(e.target)) {
        handleClearInput();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <SearchInput
        inputValue={searchCity}
        onChange={handleInputChange}
        onClick={handleClearInput}
        onSubmit={handleSearchSubmit}
        searchToggle={openSearchList}
        handleSearchList={handleSearchList}
        logoutRef={logoutRef}
      />
      <CurrentForecast city={cityName} />
      <ThreeHourForecast city={cityName} />
    </>
  );
}
