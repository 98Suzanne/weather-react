import React, { useState } from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function ConversionButton() {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <div id="temperature-type">
          <a href="#" className="degree-type" id="celsius-link">
            °C{" "}
          </a>
          <a
            href="#"
            className="degree-type"
            id="fahrenheit-link"
            onClick={showFahrenheit}
          >
            °F{" "}
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div id="temperature-type">
          <a
            href="#"
            className="degree-type"
            id="celsius-link"
            onClick={showCelsius}
          >
            °C{" "}
          </a>
          <a href="#" className="degree-type" id="fahrenheit-link">
            °F{" "}
          </a>
        </div>
      </div>
    );
  }
}
