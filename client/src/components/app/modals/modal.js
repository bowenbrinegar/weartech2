import React, { Component } from 'react'
import "./modal.css"

class Modal extends Component {
  state = {
    institution: '',

  };

  addSensor = () => {
    console.log(this.props.institution)
  };

  addData = () => {
    console.log('success')
  }

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