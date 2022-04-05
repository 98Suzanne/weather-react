import React from "react";

export default function Forecast() {
  return (
    <div>
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
}
