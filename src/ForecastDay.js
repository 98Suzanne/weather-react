import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}° /`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return ` ${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="ForecastWeather">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} height="100px" />
      <div>
        <span className="ForecastMax">{maxTemperature()}</span>
        <span className="ForecastMin">{minTemperature()}</span>
      </div>
    </div>
  );
}
