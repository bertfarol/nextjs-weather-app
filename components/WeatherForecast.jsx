import CurrentForecast from "./CurrentForecast";
import ThreeHourForecast from "./ThreeHourForecast";

export default function WeatherForecast({ city }) {
  return (
    <>
      <CurrentForecast city={city} />
      {/* <ThreeHourForecast city={city} /> */}
    </>
  );
}
