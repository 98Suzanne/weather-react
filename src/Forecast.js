import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <div className="col ForecastWeather">
          <div className="row">
            <div className="card">
              <div className="card-body">
                <div className="ForecastDay">{forecast[0].dt}</div>
              </div>
              <WeatherIcon
                code={forecast[0].weather[0].icon}
                className="ForecastIcon"
                height="100"
              />
              <div className="ForecastTemp">
                <span className="ForecastMax">
                  {Math.round(forecast[0].temp.max)}°
                </span>{" "}
                /
                <span className="ForecastMin">
                  {" "}
                  {Math.round(forecast[0].temp.min)}°
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "31a995c70fb45a5759befe8272154a19";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
