import React from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search() {
  return (
    <div>
      <div className="row">
        <div className="col-8">
          <form id="search">
            <input
              type="text"
              placeholder="Enter a city"
              autocomplete="off"
              id="city-input"
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
    </div>
  );
}
