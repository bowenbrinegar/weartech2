import React from "react";
import "./jumbotron_business.css";

const JumbotronBusiness = ({ children }) => (
  <div className="business-hero">
    <div className="container">{children}</div>
  </div>
);

export default JumbotronBusiness;
