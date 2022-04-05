import React from "react";
import Contact from "./Contact";
import Search from "./Search";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <Search />
          <Forecast />
          <hr />
          <div className="weather-forecast" id="forecast"></div>
        </div>
        <Contact />
      </body>
    </div>
  );
}
