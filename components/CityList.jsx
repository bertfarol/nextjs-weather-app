import { useState, useEffect } from "react";

export default function CityList({ handleClick, queryCity, searchToggle }) {
  const [searchList, setSearchList] = useState([]);

  const fetchCityList = async () => {
    let response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${queryCity}&limit=5&appid=44c4ac0fe54faa9d20a4a5dafaf4d201`
    );
    let cities = await response.json();
    
    if (cities.length > 0) {
      const city = cities.filter((city) => city.country === "PH");
      setSearchList(city);
    }
  };

  useEffect(() => {
    fetchCityList();
  }, [queryCity]);

  return (
    <>
      {searchToggle && (
        <div className="p-2 bg-white rounded absolute top-[75px] left-0 w-11/12 right-0 mx-auto ">
          {searchList.length > 0 ? (
            <>
              {searchList &&
                searchList.map((city, index) => (
                  <div
                    key={index}
                    onClick={handleClick}
                    className="py-1 text-black cursor-pointer hover:font-bold"
                  >
                    <span>{city.name}</span> City,{" "}
                    {city.state && <> {city.state},</>}
                    {city.country}
                  </div>
                ))}
            </>
          ) : (
            <p className="py-1 text-black">{queryCity}</p>
          )}
        </div>
      )}
    </>
  );
}
