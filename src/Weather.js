import React, { useState } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
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
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "31a995c70fb45a5759befe8272154a19";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
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
              <button id="location-button">
                <FontAwesomeIcon icon={faLocationDot} className="location" />
              </button>
            </form>
          </div>
          <div className="col-4" id="temperature-type">
            <a href="#" className="degree-type" id="celsius-link">
              °C{" "}
            </a>
            <a href="#" className="degree-type" id="fahrenheit-link">
              °F{" "}
            </a>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col leftcol1" id="city-name">
            <h1>{weatherData.city}</h1>
            <div id="current-date">
              <FormattedDate date={weatherData.date} />
            </div>
          </div>
          <div className="col rightcol1">
            <h2>
              <span id="temp-display">
                {Math.round(weatherData.temperature)}
              </span>
              <span id="temp-unit">°C</span>
            </h2>
            <h3>
              <span id="max">{Math.round(weatherData.max)}</span>
              <span>°</span> /
              <span id="min">{Math.round(weatherData.min)}</span>
              <span>°</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col leftcol2">
            <div id="weather">{weatherData.description}</div>
            <img src="img/01d.png" id="icon" />
          </div>
          <div className="col rightcol2">
            <div className="measure" id="clouds">
              Cloudiness: {weatherData.clouds}%
            </div>
            <div className="measure" id="humidity">
              Humidity: {weatherData.humidity}%
            </div>
            <div className="measure" id="wind">
              Wind: {weatherData.wind} km/h
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
