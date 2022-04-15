import React from "react";

import ClearSkyDay from "./img/01d.png";
import ClearSkyNight from "./img/01n.png";
import FewCloudsDay from "./img/02d.png";
import FewCloudsNight from "./img/02n.png";
import ScatteredCloudsDay from "./img/03d.png";
import ScatteredCloudsNight from "./img/03n.png";
import BrokenCloudsDay from "./img/04d.png";
import BrokenCloudsNight from "./img/04n.png";
import ShowerDay from "./img/09d.png";
import ShowerNight from "./img/09n.png";
import RainDay from "./img/10d.png";
import RainNight from "./img/10n.png";
import Thunderstorm from "./img/11d.png";
import Snow from "./img/13d.png";
import Mist from "./img/50d.png";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": ClearSkyDay,
    "01n": ClearSkyNight,
    "02d": FewCloudsDay,
    "02n": FewCloudsNight,
    "03d": ScatteredCloudsDay,
    "03n": ScatteredCloudsNight,
    "04d": BrokenCloudsDay,
    "04n": BrokenCloudsNight,
    "09d": ShowerDay,
    "09n": ShowerNight,
    "10d": RainDay,
    "10n": RainNight,
    "11d": Thunderstorm,
    "11n": Thunderstorm,
    "13d": Snow,
    "13n": Snow,
    "50d": Mist,
    "50n": Mist,
  };
  let name = codeMapping[props.code];
  return (
    <img className="todays-icon" src={`./img/${name}.png`} alt={props.alt} />
  );
}
