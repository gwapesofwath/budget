import React from "react";
import "./jumbotron.css"

const Jumbotron = ({ children }) => (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    > <h1> Get Financially Healthy</h1>
      <h2> Keeping up with finances can be hard. Bank Shot can help steer you in the right direction. </h2>
      {children}
    </div>
  );
  
  export default Jumbotron;
  