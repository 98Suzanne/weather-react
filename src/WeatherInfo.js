import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col leftcol1" id="city-name">
          <h1>{props.data.city}</h1>
          <div id="current-date">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
        <div className="col rightcol1">
          <h2>
            <span id="temp-display">{Math.round(props.data.temperature)}</span>
            <span id="temp-unit"> °C</span>
          </h2>
          <h3>
            <span id="max">{Math.round(props.data.max)}</span>
            <span>°</span>
            <span> / </span>
            <span id="min">{Math.round(props.data.min)}</span>
            <span>°</span>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col leftcol2">
          <div id="weather">{props.data.description}</div>
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            id="icon"
          />
        </div>
        <div className="col rightcol2">
          <div className="measure" id="clouds">
            Cloudiness: {props.data.clouds}%
          </div>
          <div className="measure" id="humidity">
            Humidity: {props.data.humidity}%
          </div>
          <div className="measure" id="wind">
            Wind: {Math.round(props.data.wind)} km/h
          </div>
        </div>
      </div>
    </div>
  );
}
