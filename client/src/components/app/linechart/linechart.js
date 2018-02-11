import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart extends Component {
  render() {
    return (
      <Line {...this.props}/>
    );
  }
}

export default LineChart;