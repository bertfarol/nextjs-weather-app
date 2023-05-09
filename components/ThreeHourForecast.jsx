import { useState, useEffect } from "react";
import { formatUnix, formatNumber } from "./utils";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 2,
};


export default function ThreeHourForecast({ city }) {
  const [hourForecast, setHourForecast] = useState([]);

  const fetchHourForecast = async () => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=44c4ac0fe54faa9d20a4a5dafaf4d201`
    );

    let data = await response.json();
    setHourForecast(data.list);
  };

  useEffect(() => {
    fetchHourForecast();
  }, [city]);

  return (
    <div className="text-white max-w-[375px] w-full h-[22%]">
      <Slider {...settings}>
        {hourForecast.map((forecast, index) => (
          <div key={index} className="text-sm text-center box-weather">
            <p>{formatUnix(forecast.dt)}</p>
            <div className="flex justify-center">
              <Image
                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                height={"60"}
                width={"60"}
                alt={forecast.weather[0].description}
                priority
              />
            </div>
            <p>{formatNumber(forecast.main?.temp)}&deg;</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
