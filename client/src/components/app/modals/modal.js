import React, { Component } from 'react'
import "./modal.css"
import DB from '../../../utils/DB';
import Moment from 'moment'

let connection = Math.floor(Math.random() * (10 - 6)) + 6;
let sitTime = Math.floor(Math.random() * (480 - 30)) + 30;
let pressure = Math.floor(Math.random() * (250 - 100)) + 100;
let compressionTime = Math.floor(Math.random() * (480 - 30)) + 30;
let compressionAmount = Math.floor(Math.random() * (10 - 6)) + 6;
let springRate = Math.floor(Math.random() * (10 - 6)) + 6;
let distance = Math.floor(Math.random() * (5 - 1)) + 1;
let steps = Math.floor(Math.random() * (10000 - 1000)) + 1000;
let date = Moment().subtract(Math.floor(Math.random() * (200 - 1)) + 1, "days");
let num = Math.floor(Math.random() * (100 - 40)) + 40;

const refresh = () => {
  connection = Math.floor(Math.random() * (10 - 6)) + 6;
  sitTime = Math.floor(Math.random() * (480 - 30)) + 30;
  pressure = Math.floor(Math.random() * (250 - 100)) + 100;
  compressionTime = Math.floor(Math.random() * (480 - 30)) + 30;
  compressionAmount = Math.floor(Math.random() * (10 - 6)) + 6;
  springRate = Math.floor(Math.random() * (10 - 6)) + 6;
  distance = Math.floor(Math.random() * (5 - 1)) + 1;
  steps = Math.floor(Math.random() * (10000 - 1000)) + 1000;
  date = Moment().subtract(Math.floor(Math.random() * (200 - 1)) + 1, "days");
  num = Math.floor(Math.random() * (100 - 40)) + 40;
};

class Modal extends Component {
  state = {
    sensor: '',
  };

  addSensor = () => {
    DB.createCushion({
      createAt: Moment(),
      updatedAt: Moment(),
      institution: this.props.institution
    }).then(res => {
      this.setState({sensor: res.data._id})
    })
  };

  addData = () => {
    for (let i = 0; i < num; i++) {
      refresh();
      DB.createCushionData({
        health: 10,
        connectionStrength: connection,
        sitTime: sitTime,
        pressure: pressure,
        createAt: date,
        sensor: this.state.sensor
      }).then(res => {
        console.log(res);
      });
    }
  };

  render() {
    if (!this.props.show) {
      return null;
    } else if (this.props.value === "sensor") {
      return (
        <div id="modal">
          <button id='Close'
                  value='Close'
                  onClick={this.props.close}>Close</button>
          <div id='modalHeader'>
            <h1 id='modalH1'>Sensor Modal</h1>
          </div>
          <div id='modalContent'>
            <button id='sensorModalButton'
                    onClick={this.addSensor}
            >Add Sensor</button>
            <button id='sensorModalButton'
                    onClick={this.addData}
            >Add Data</button>
          </div>
        </div>
      )
    } else if (this.props.value === "institution") {
      return (
        <div id="modal">
          <h1>Institution Modal</h1>
          <button value='Close' onClick={this.props.close}>Close</button>
        </div>
      )
    }
  }
}

export default Modal