import React, { Component } from 'react'
import * as d3 from 'd3'
import * as csvMaker from 'json2csv';
import fs from 'fs'
import axios from 'axios'
import DB from '../../../utils/DB';
import './d3Line.css'

class D3Line extends Component {
  chartRender = () => {
    let w = 800;
    let h = 450;
    let data = [1,2,3,4,5,6,7,8,9,10];
    let svg = d3.select('chart4 svg')
      .attr('id', 'chart')
      .attr('width', w)
      .attr('height', h);

    svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', (d, i) => {
        return d
      })
      .attr('height', 20)
  };

  componentDidMount() {
    this.chartRender()
  }

  render() {
    return (
      <svg></svg>
    )
  }
}

export default D3Line