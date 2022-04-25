import React from "react";
import Weather from "./Weather";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <Weather defaultCity="Amsterdam" />
          <hr />
        </div>
        <Contact />
      </body>
    </div>
  );
}
