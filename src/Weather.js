import React, { useState } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import ConversionButton from "./ConversionButton";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      clouds: response.data.clouds.all,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchLocation(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchLocation() {
    const apiKey = "31a995c70fb45a5759befe8272154a19";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="row">
          <div className="col-8">
            <form id="search" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter a city"
                autoComplete="off"
                id="city-input"
                onChange={handleCityChange}
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button className="location-button">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="location"
                  onClick={getCurrentLocation}
                />
              </button>
            </form>
          </div>
          <div className="col-4">
            <ConversionButton setUnit={setUnit} unit={unit} />
          </div>
        </div>
        <hr />
        <WeatherInfo data={weatherData} setUnit={setUnit} unit={unit} />
        <Forecast coords={weatherData.coord} />
      </div>
    );
  } else {
    searchLocation();
    return "Loading...";
  }
}
