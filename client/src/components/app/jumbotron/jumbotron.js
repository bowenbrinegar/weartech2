import React from "react";
import "./jumbotron.css";

const Jumbotron = ({ children }) => (
  <div id="main" className="jumbotron">
    {children}
  </div>
);

export default Jumbotron;
