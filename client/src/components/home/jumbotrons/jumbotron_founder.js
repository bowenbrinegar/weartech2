import React from "react";
import "./jumbotron_business.css";

const JumbotronFounder = ({ children }) => (
  <div className="business-single-client" datascroll>
    <div className="quote-wrapper">{children}</div>
  </div>
);

export default JumbotronFounder;
