import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart extends Component {

  render() {
    return (
      <Bar {...this.props}/>
    );
  }
}

export default BarChart;
