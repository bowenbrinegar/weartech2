import React from "react";
import "./founderTron.css";
import "./jumbotron.css";

const FounderTron = ({ children }) => (
  <div id="founder" className="jumbotron">
    {children}
  </div>
);

export default FounderTron;
