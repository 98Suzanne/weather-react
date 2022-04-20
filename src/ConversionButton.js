import React from "react";

export default function ConversionButton(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  if (props.unit === "celsius") {
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
