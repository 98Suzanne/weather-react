import React, { useState } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "1abad5c198be1cab987a15b09610f472";
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
                autocomplete="off"
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
            <h1>Amsterdam</h1>
            <div id="current-date">Monday, January 10 2022</div>
          </div>
          <div className="col rightcol1">
            <h2>
              <span id="temp-display">9</span>
              <span id="temp-unit">°C</span>
            </h2>
            <h3>
              <span id="max">11</span>
              <span>°</span> /<span id="min">4</span>
              <span>°</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col leftcol2">
            <div id="weather">Partly cloudy</div>
            <img src="img/01d.png" id="icon" />
          </div>
          <div className="col rightcol2">
            <div className="measure" id="clouds">
              Cloudiness: 37%
            </div>
            <div className="measure" id="humidity">
              Humidity: 90%
            </div>
            <div className="measure" id="wind">
              Wind: 16 km/h
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
