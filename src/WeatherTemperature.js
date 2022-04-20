import React from "react";

export default function WeatherTemperature(props) {
  if (props.unit === "celsius") {
    return (
      <div>
        <span id="temp-display">{Math.round(props.celsius)}</span>
        <span id="temp-unit"> °C</span>
        <div className="minMax">
          <span id="max">{Math.round(props.max)}</span>
          <span>°</span>
          <span> / </span>
          <span id="min">{Math.round(props.min)}</span>
          <span>°</span>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    let min = (props.min * 9) / 5 + 32;
    let max = (props.max * 9) / 5 + 32;
    return (
      <div>
        <span id="temp-display">{Math.round(fahrenheit)}</span>
        <span id="temp-unit"> °F</span>
        <div className="minMax">
          <span id="max">{Math.round(max)}</span>
          <span>°</span>
          <span> / </span>
          <span id="min">{Math.round(min)}</span>
          <span>°</span>
        </div>
      </div>
    );
  }
}
