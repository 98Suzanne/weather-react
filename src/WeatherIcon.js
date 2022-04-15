import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "clear-day",
    "01n": "clear-night",
    "02d": "partly-cloudy-day",
    "02n": "partly-cloudy-night",
    "03d": "cloudy",
    "03n": "cloudy",
    "04d": "overcast-day",
    "04n": "overcast-night",
    "09d": "rain",
    "09n": "rain",
    "10d": "partly-cloudy-day-drizzle",
    "10n": "partly-cloudy-night-drizzle",
    "11d": "thunderstorms-day-rain",
    "11n": "thunderstorms-night-rain",
    "13d": "snow",
    "13n": "snow",
    "50d": "mist",
    "50n": "mist",
  };

  return (
    <img
      src={`https://bmcdn.nl/assets/weather-icons/v2.1/fill/${
        codeMapping[props.data]
      }.svg`}
      alt={props.alt}
      height="150"
      className="icon"
    />
  );
}
