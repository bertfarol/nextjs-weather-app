"use client";
import { useState, useEffect, useRef } from "react";
import ThreeHourForecast from "./ThreeHourForecast";
import SearchInput from "./SearchInput";
import CurrentForecast from "./CurrentForecast";

export default function WeatherForecast() {
  const [searchCity, setSearchCity] = useState("");
  const [cityName, setCityName] = useState("las pinas");
  const [openDropdownList, setOpenDropdownList] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const handleInputChange = (e) => {
    setSearchCity(e.target.value);
    setOpenDropdownList(true);
  };

  const handleSearchList = (event) => {
    const city = event.target.firstChild.textContent;
    setCityName(city);
    setOpenDropdownList(false);
    setOpenSearch(false);
    setSearchCity("");
  };

  const handleClearInput = () => {
    setOpenDropdownList(false);
    setSearchCity("");
  };

  const handleSearchBar = () => {
    setOpenSearch(!openSearch);
  };

  let searchBarRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!searchBarRef.current?.contains(e.target)) {
        setOpenSearch(false);
        setOpenDropdownList(false)
         setSearchCity("");
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
        onClickRestText={handleClearInput}
        searchToggle={openDropdownList}
        handleSearchList={handleSearchList}
        searchBarRef={searchBarRef}
        onClickSearchIcon={handleSearchBar}
        openSearchBar={openSearch}
      />
      <CurrentForecast city={cityName} />
      {/* <ThreeHourForecast city={cityName} /> */}
    </>
  );
}
