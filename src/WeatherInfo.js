import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
            <WeatherTemperature
              celsius={props.data.temperature}
              max={props.data.max}
              min={props.data.min}
            />
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col leftcol2">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            id="icon"
          />
          <div id="weather">{props.data.description}</div>
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
