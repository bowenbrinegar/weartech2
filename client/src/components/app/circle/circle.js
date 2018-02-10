import React, { Component } from "react";
import "./circle.css";

const Circle = ({ children }) => (
  <div className="circle">
    <div className="content">{children}</div>
  </div>
);

export default Circle;
